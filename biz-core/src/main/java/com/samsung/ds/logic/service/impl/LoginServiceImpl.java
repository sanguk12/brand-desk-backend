package com.samsung.ds.logic.service.impl;



import com.samsung.ds.pojo.result.RoleInfo;
import com.samsung.ds.pojo.result.UserData;
import com.synccms.entities.sys.SysRoleUser;
import com.synccms.logic.service.sys.*;
import com.samsung.ds.logic.service.LoginService;
import com.samsung.ds.tools.MessageUtils;
import com.synccms.common.api.Config;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.*;
import com.synccms.controller.web.event.LoginEvent;
import com.synccms.controller.web.event.LogoutEvent;
import com.synccms.entities.log.LogLogin;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.entities.sys.SysUserToken;
import com.synccms.logic.component.config.ConfigComponent;
import com.synccms.logic.component.config.LoginConfigComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.views.pojo.query.SysRoleUserQuery;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class LoginServiceImpl implements LoginService {
    protected static final Log log = LogFactory.getLog(LoginServiceImpl.class);

    @Autowired protected ConfigComponent configComponent;
    @Autowired protected SysLoginService loginService;
    @Autowired protected SysRoleUserService roleUserService;
    @Autowired protected SysRoleService roleService;
    @Autowired protected SysUserTokenService userTokenService;
    @Autowired private LogLoginService logLoginService;
    @Autowired private SysUserService service;
    @Autowired private Environment env;

    protected static ApplicationEventPublisher eventPublisher;

    @Autowired(required = false)
    public void setEventPublisher(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }


    @Override
    public UserData login(
            SysSite site,
            String username,
            String password,
            Boolean rememberMe,
            HttpServletRequest request,
            HttpServletResponse response) {
        ModelMap model = new ModelMap();

        Map<String, String> config = configComponent.getConfigData(site.getId(), Config.CONFIG_CODE_SITE);

        username = StringUtils.trim(username);
        password = StringUtils.trim(password);
        if (ControllerUtils.verifyNotEmpty("username", username, model)
                || ControllerUtils.verifyNotEmpty("password", password, model)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, MessageUtils.getMessage((String)model.get(CommonConstants.ERROR), request));
        } else {
            SysUser user;
            if (ControllerUtils.verifyNotEMail(username)) {
                user = service.findByName(site.getId(), username);
            } else {
                user = service.findByEmail(site.getId(), username);
            }
            String ip = RequestUtils.getIpAddress(request);
            Date now = CommonUtils.getDate();
            if (ControllerUtils.verifyCustom("password",
                    null == user || !UserPasswordUtils.passwordEncode(password, user.getSalt()).equals(user.getPassword()), model)
                    || verifyNotEnablie(user, model)) {
                Long userId = null;
                if (null != user) {
                    userId = user.getId();
                }
                logLoginService.save(
                        LogLogin
                                .builder()
                                .siteId(site.getId())
                                .name(username)
                                .userId(userId)
                                .ip(ip)
                                .channel(LogLoginService.CHANNEL_WEB)
                                .result(false)
                                .createDate(now)
                                .errorPassword(password)
                                .build()
                );
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, MessageUtils.getMessage((String)model.get(CommonConstants.ERROR), request));
            } else {
                if (UserPasswordUtils.needUpdate(user.getSalt())) {
                    String salt = UserPasswordUtils.getSalt();
                    service.updatePassword(user.getId(), UserPasswordUtils.passwordEncode(password, salt), salt);
                }
                if (!user.isWeakPassword() && UserPasswordUtils.isWeek(username, password)) {
                    service.updateWeekPassword(user.getId(), true);
                }
                service.updateLoginStatus(user.getId(), ip);

                String authToken = UUID.randomUUID().toString();
                int expiryMinutes = ConfigComponent.getInt(config.get(LoginConfigComponent.CONFIG_EXPIRY_MINUTES_WEB),
                        LoginConfigComponent.DEFAULT_EXPIRY_MINUTES);
                String token = addLoginStatus(user, authToken, request, response, expiryMinutes);
                userTokenService.save(
                        SysUserToken
                                .builder()
                                .authToken(authToken)
                                .siteId(site.getId())
                                .userId(user.getId())
                                .channel(LogLoginService.CHANNEL_WEB)
                                .createDate(now)
                                .expiryDate(DateUtils.addMinutes(now, expiryMinutes))
                                .loginIp(ip)
                                .build()

                );

                logLoginService.save(
                        LogLogin
                                .builder()
                                .siteId(site.getId())
                                .name(username)
                                .userId(user.getId())
                                .ip(ip)
                                .channel(LogLoginService.CHANNEL_WEB)
                                .result(true)
                                .createDate(now)
                                .build()
                );

                List<SysRoleUser> roleList =  roleUserService.getList(SysRoleUserQuery.builder().userId(user.getId()).build());
                List<RoleInfo> roles = roleService.getEntitys(
                        roleList.stream().map(ru -> ru.getId().getRoleId()).collect(Collectors.toList()).toArray(new Integer[0])
                ).stream().map(r-> RoleInfo.builder().id(r.getId()).name(r.getName()).build()).collect(Collectors.toList());

                return UserData.builder()
                        .id(user.getId())
                        .token(token)
                        .email(user.getEmail())
                        .nickname(user.getNickname())
                        .roles(roles)
                        .build();
            }
        }
    }

    public static String addLoginStatus(
            SysUser user,
            String authToken,
            HttpServletRequest request,
            HttpServletResponse response,
            Integer expiryMinutes) {
        user.setPassword(null);

        StringBuilder sb = new StringBuilder();
        sb.append(user.getId()).append(CommonConstants.getCookiesUserSplit()).append(authToken);
        String userCookieValue = sb.toString();
        ControllerUtils.setUserToSession(request.getSession(), user, userCookieValue);

        RequestUtils.addCookie(request.getContextPath(), response, CommonConstants.getCookiesUser(), userCookieValue, expiryMinutes, null);

        if(eventPublisher!=null)
        {
            eventPublisher.publishEvent(new LoginEvent(user, request, response));
        }

        return userCookieValue;
    }


    @Override
    public UserData currentUser(HttpSession session, SysSite site) {
        SysUser user = (SysUser)ControllerUtils.getUserFromSession(session);
        List<SysRoleUser> roleList =  roleUserService.getList(SysRoleUserQuery.builder().userId(user.getId()).build());
        List<RoleInfo> roles = roleService.getEntitys(
                roleList.stream().map(ru -> ru.getId().getRoleId()).collect(Collectors.toList()).toArray(new Integer[0])
        ).stream().map(r-> RoleInfo.builder().id(r.getId()).name(r.getName()).build()).collect(Collectors.toList());

        return UserData.builder()
                .id(user.getId())
                .nickname(user.getNickname())
                .email(user.getEmail())
                .roles(roles)
                .build();
    }


    /**
     * @param site
     * @param userId
     * @param request
     * @param response
     * @return view name
     */
    public void logout(
            SysSite site,
            Long userId,
            HttpServletRequest request,
            HttpServletResponse response) {
        Map<String, String> config = configComponent.getConfigData(site.getId(), Config.CONFIG_CODE_SITE);
        SysUser user = (SysUser)ControllerUtils.getUserFromSession(request.getSession());
        if (null != userId && null != user && userId.equals(user.getId())) {
            Cookie userCookie = RequestUtils.getCookie(request.getCookies(), CommonConstants.getCookiesUser());
            if (null != userCookie && CommonUtils.notEmpty(userCookie.getValue())) {
                String value = userCookie.getValue();
                if (null != value) {
                    String[] userData = value.split(CommonConstants.getCookiesUserSplit());
                    if (userData.length > 1) {
                        userTokenService.delete(userData[1]);
                    }
                }
            }
            ControllerUtils.clearUserToSession(request.getContextPath(), request.getSession(), response);
            if(eventPublisher!=null) {
                eventPublisher.publishEvent(new LogoutEvent(user, request, response));
            }
        }
    }


    /**
     * @param user
     * @param model
     * @return 사용자 비활성화 여부
     */
    public boolean verifyNotEnablie(SysUser user, ModelMap model) {
        if (user.isDisabled()) {
            model.addAttribute(CommonConstants.ERROR, "verify.user.notEnablie");
            return true;
        }
        return false;
    }


    /**
     * @param site
     * @param entity
     * @param repassword
     * @param request
     * @param response
     * @param model
     * @return view name
     */
    public SysUser regist(
            SysSite site,
            SysUser entity,
            String repassword,
            HttpServletRequest request,
            HttpServletResponse response,
            ModelMap model) {
        entity.setUsername(StringUtils.trim(entity.getUsername()));
        entity.setNickname(StringUtils.trim(entity.getNickname()));
        entity.setPassword(StringUtils.trim(entity.getPassword()));
        repassword = StringUtils.trim(repassword);

        Map<String, String> config = configComponent.getConfigData(site.getId(), Config.CONFIG_CODE_SITE);
        if (ControllerUtils.verifyNotEmpty("username", entity.getUsername(), model)
                || ControllerUtils.verifyNotEmpty("nickname", entity.getNickname(), model)
                || ControllerUtils.verifyNotEmpty("password", entity.getPassword(), model)
                || ControllerUtils.verifyNotUserName("username", entity.getUsername(), model)
                || ControllerUtils.verifyNotNickName("nickname", entity.getNickname(), model)
                || ControllerUtils.verifyNotEquals("repassword", entity.getPassword(), repassword, model)
                || ControllerUtils.verifyHasExist("username", service.findByName(site.getId(), entity.getUsername()), model)
                || ControllerUtils.verifyHasExist("nickname", service.findByNickName(site.getId(), entity.getNickname()),
                model)) {
            model.addAttribute("username", entity.getUsername());
            model.addAttribute("nickname", entity.getNickname());
            return null;
        } else {
            String ip = RequestUtils.getIpAddress(request);
            String salt = UserPasswordUtils.getSalt();
            entity.setPassword(UserPasswordUtils.passwordEncode(entity.getPassword(), salt));
            entity.setSalt(salt);
            entity.setLastLoginIp(ip);
            entity.setSiteId(site.getId());
            entity.setDisabled(false);
            entity.setRoles(null);
            entity.setAdmin(false);
            entity.setOwnsAllContent(false);
            entity.setLoginCount(0);
            entity.setDeptId(null);
            service.save(entity);

            int expiryMinutes = ConfigComponent.getInt(config.get(LoginConfigComponent.CONFIG_EXPIRY_MINUTES_WEB),
                    LoginConfigComponent.DEFAULT_EXPIRY_MINUTES);

            Date now = CommonUtils.getDate();
            String authToken = UUID.randomUUID().toString();
            Date expiryDate = DateUtils.addMinutes(now, expiryMinutes);
            addLoginStatus(entity, authToken, request, response, expiryMinutes);
            userTokenService.save(
                    SysUserToken
                            .builder()
                            .authToken(authToken)
                            .siteId(site.getId())
                            .userId(entity.getId())
                            .channel(LogLoginService.CHANNEL_WEB)
                            .createDate(now)
                            .expiryDate(expiryDate)
                            .loginIp(ip)
                            .build()
            );

        }
        return entity;
    }
}
