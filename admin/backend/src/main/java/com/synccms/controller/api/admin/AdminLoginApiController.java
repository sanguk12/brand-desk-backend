package com.synccms.controller.api.admin;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.api.Config;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.*;
import com.synccms.controller.web.event.LoginEvent;
import com.synccms.controller.web.event.LogoutEvent;
import com.synccms.entities.log.LogLogin;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.entities.sys.SysUserToken;
import com.synccms.exception.AuthorizationException;
import com.synccms.logic.component.cache.CacheComponent;
import com.synccms.logic.component.config.ConfigComponent;
import com.synccms.logic.component.config.LoginConfigComponent;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.ServiceUtils;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysRoleService;
import com.synccms.logic.service.sys.SysUserTokenService;
import com.synccms.views.pojo.entities.LoginData;
import com.synccms.views.pojo.entities.RoleData;
import com.synccms.views.pojo.entities.UserInfoData;
import com.synccms.views.pojo.model.LoginParameter;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.*;
import java.util.stream.Collectors;

/**
 *
 * AdminLoginApiController
 *
 */
@RestController
public class AdminLoginApiController {
    @Autowired
    protected LogOperateService logOperateService;

    @Autowired
    private SysRoleService roleService;

    @Autowired
    private SysUserTokenService sysUserTokenService;
    @Autowired
    private LogLoginService logLoginService;
    @Autowired
    private CacheComponent cacheComponent;
    @Autowired
    private ConfigComponent configComponent;
    @Autowired
    protected SiteComponent siteComponent;


    protected static ApplicationEventPublisher eventPublisher;

    @Autowired
    public void setEventPublisher(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    /**
     * @param site
     * @param loginRequest
     * @param request
     * @param session
     * @param response
     * @return view name
     */
    @RequestMapping(value = "login", method = RequestMethod.POST)
    @ResponseBody
    public LoginData login(
            @RequestAttribute SysSite site,
            @RequestBody LoginParameter loginRequest,
            HttpServletRequest request,
            HttpSession session,
            HttpServletResponse response) {
        Map<String, Object> model = new HashMap<>();

        String username = StringUtils.trim(loginRequest.getUsername());
        String password = StringUtils.trim(loginRequest.getPassword());
        if (ControllerUtils.verifyNotEmpty("username", username, model)
                || ControllerUtils.verifyNotEmpty("password", password, model)) {
            throw new AuthorizationException(HttpStatus.UNAUTHORIZED, (String)model.get(CommonConstants.ERROR));
        }
        String ip = RequestUtils.getIpAddress(request);
        BaseSysUser user = ServiceUtils.getUserService().findByName(site.getId(), username);
        if (ControllerUtils.verifyNotExist("username", user, model) || ControllerUtils.verifyNotEquals("password",
                UserPasswordUtils.passwordEncode(password, user.getSalt()), user.getPassword(), model)
                || verifyNotAdmin(user, model) || verifyNotEnablie(user, model)) {
            Long userId = null;
            if (null != user) {
                userId = user.getId();
            }
            logLoginService.save(LogLogin.builder()
                    .siteId(site.getId())
                    .name(username)
                    .userId(userId)
                    .ip(ip)
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .result(false)
                    .createDate( CommonUtils.getDate())
                    .errorPassword(password)
                    .build());

            throw new AuthorizationException(HttpStatus.UNAUTHORIZED, (String)model.get(CommonConstants.ERROR));
        }

        if (UserPasswordUtils.needUpdate(user.getSalt())) {
            String salt = UserPasswordUtils.getSalt();
            ServiceUtils.getUserService().updatePassword(user.getId(), UserPasswordUtils.passwordEncode(password, salt), salt);
        }
        if (!user.isWeakPassword() && UserPasswordUtils.isWeek(username, password)) {
            ServiceUtils.getUserService().updateWeekPassword(user.getId(), true);
        }
        ServiceUtils.getUserService().updateLoginStatus(user.getId(), ip);
        String authToken = UUID.randomUUID().toString();
        Date now = CommonUtils.getDate();
        Map<String, String> config = configComponent.getConfigData(site.getId(), Config.CONFIG_CODE_SITE);
        int expiryMinutes = ConfigComponent.getInt(config.get(
                LoginConfigComponent.CONFIG_EXPIRY_MINUTES_MANAGER),
                LoginConfigComponent.DEFAULT_EXPIRY_MINUTES);
        sysUserTokenService.save(SysUserToken.builder()
                .authToken(authToken)
                .siteId(site.getId())
                .userId(user.getId())
                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                .createDate(now)
                .expiryDate(DateUtils.addMinutes(now, expiryMinutes))
                .loginIp(ip)
                .build()
        );

        StringBuilder sb = new StringBuilder();
        sb.append(user.getId()).append(CommonConstants.getCookiesUserSplit()).append(authToken);
        RequestUtils.addCookie(
                request.getContextPath(),
                response,
                CommonConstants.getCookiesAdmin(),
                sb.toString(),
                expiryMinutes * 60,
                null);

        ControllerUtils.setAdminToSession(session, user, sb.toString());

        eventPublisher.publishEvent(new LoginEvent(user, request, response));

        logLoginService.save(LogLogin.builder()
                .siteId(site.getId())
                .name(username)
                .userId(user.getId())
                .ip(ip)
                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                .result(true)
                .createDate( CommonUtils.getDate())
                .build());

        return LoginData.builder().userId(user.getId()).token(sb.toString()).build();
    }


    /**
     * @param admin
     * @return view name
     */
    @RequestMapping(value = "userInfo", method = RequestMethod.GET)
    @ResponseBody
    public UserInfoData userInfo(@SessionAttribute BaseSysUser admin, HttpServletRequest request) {

        String csrfToken = null;
        Cookie userCookie = RequestUtils.getCookie(request.getCookies(), CommonConstants.getCookiesAdmin());
        if (null != userCookie && CommonUtils.notEmpty(userCookie.getValue())) {
            String value = userCookie.getValue();
            if (null != value) {
                String[] userData = value.split(CommonConstants.getCookiesUserSplit());
                if (userData.length > 1) {
                    csrfToken = userData[1];
                }
            }
        }

        UserInfoData.UserInfoDataBuilder builder = UserInfoData.builder()
                .userId(admin.getId())
                .username(admin.getUsername())
                .realName(admin.getNickname())
                .csrf(csrfToken);

        String roles = admin.getRoles();
        if(roles != null) {
            List<Integer> roleArray = Arrays.stream(StringUtils.split(roles, CommonConstants.COMMA)).map(a -> NumberUtils.toInt(a)).collect(Collectors.toList());
            builder.roles(
                    roleService.getEntitys(roleArray.toArray(new Integer[0]))
                            .stream().map(r-> RoleData.builder().name(r.getName()).id(r.getId()).build()).collect(Collectors.toList())
            );

        }



        return builder.build();
    }



    /**
     * @param site
     * @param admin
     * @param oldpassword
     * @param password
     * @param repassword
     * @param request
     * @param response
     * @param model
     * @return view name
     */
    @RequestMapping(value = "changePassword", method = RequestMethod.POST)
    @Csrf
    @ResponseBody
    public String changeMyselfPassword(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            String oldpassword,
            String password,
            String repassword,
            HttpServletRequest request,
            HttpServletResponse response,
            ModelMap model) {
        BaseSysUser user = ServiceUtils.getUserService().getEntity(admin.getId());
        String encodedOldPassword = UserPasswordUtils.passwordEncode(oldpassword, user.getSalt());

        if (null != user.getPassword()
                && ControllerUtils.verifyNotEquals("password", user.getPassword(), encodedOldPassword, model)) {
            String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
        } else if (ControllerUtils.verifyNotEmpty("password", password, model)
                || ControllerUtils.verifyNotEquals("repassword", password, repassword, model)) {
            String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
        } else {
            ControllerUtils.clearAdminToSession(request.getContextPath(), request.getSession(), response);
        }
        String salt = UserPasswordUtils.getSalt();
        ServiceUtils.getUserService().updatePassword(user.getId(), UserPasswordUtils.passwordEncode(password, salt), salt);
        if (user.isWeakPassword() && !UserPasswordUtils.isWeek(user.getUsername(), password)) {
            ServiceUtils.getUserService().updateWeekPassword(user.getId(), false);
        }
        sysUserTokenService.delete(user.getId());
        logOperateService.save(LogOperate.builder()
                .siteId(site.getId())
                .userId(user.getId())
                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                .operate("changepassword")
                .ip(RequestUtils.getIpAddress(request))
                .createDate(CommonUtils.getDate())
                .content(encodedOldPassword)
                .build()
        );
        String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), "message.needReLogin");

        return message;
    }

    /**
     * @param admin
     * @param password
     * @param session
     * @return result
     */
    @RequestMapping("isWeak")
    @ResponseBody
    public boolean isWeak(@SessionAttribute BaseSysUser admin, String password, HttpSession session) {
        return !UserPasswordUtils.isWeek(admin.getUsername(), password);
    }

    /**
     * @param userId
     * @param request
     * @param response
     * @return view name
     */
    @RequestMapping(value = "logout", method = RequestMethod.GET)
    @ResponseBody
    public boolean logout(Long userId, HttpServletRequest request, HttpServletResponse response) {
        BaseSysUser admin = ControllerUtils.getAdminFromSession(request.getSession());
        if (null != userId && null != admin && userId.equals(admin.getId())) {
            Cookie userCookie = RequestUtils.getCookie(request.getCookies(), CommonConstants.getCookiesAdmin());
            if (null != userCookie && CommonUtils.notEmpty(userCookie.getValue())) {
                String value = userCookie.getValue();
                if (null != value) {
                    String[] userData = value.split(CommonConstants.getCookiesUserSplit());
                    if (userData.length > 1) {
                        sysUserTokenService.delete(userData[1]);
                    }
                }
            }
            ControllerUtils.clearAdminToSession(request.getContextPath(), request.getSession(), response);
            eventPublisher.publishEvent(new LogoutEvent(admin, request, response));
        }
        return true;
    }

    /**
     * @return view name
     */
    @RequestMapping(value = "clearCache")
    @ResponseBody
    public boolean clearCache() {
        cacheComponent.clear();
        return true;
    }

    protected boolean verifyNotAdmin(BaseSysUser user, Map<String, Object> model) {
        if (!user.isDisabled() && !user.isAdmin()) {
            model.put(CommonConstants.ERROR, "verify.user.notAdmin");
            return true;
        }
        return false;
    }

    protected boolean verifyNotEnablie(BaseSysUser user, Map<String, Object> model) {
        if (user.isDisabled()) {
            model.put(CommonConstants.ERROR, "verify.user.notEnablie");
            return true;
        }
        return false;
    }
}
