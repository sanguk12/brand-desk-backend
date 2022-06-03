package com.synccms.controller.api.admin.sys;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.base.BaseService;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.common.tools.*;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.*;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.ServiceUtils;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysDeptService;
import com.synccms.logic.service.sys.SysRoleService;
import com.synccms.logic.service.sys.SysRoleUserService;
import com.synccms.views.pojo.entities.SysUserData;
import com.synccms.views.pojo.query.SysRoleQuery;
import com.synccms.views.pojo.query.SysRoleUserQuery;
import com.synccms.views.pojo.query.SysUserQuery;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * SysUserAdminController
 *
 */
@RestController
@RequestMapping("sysUser")
public class SysUserAdminController {
    @Autowired private SysDeptService deptService;
    @Autowired private SysRoleUserService roleUserService;
    @Autowired private SysRoleService roleService;
    @Autowired protected LogOperateService logOperateService;
    @Autowired protected SiteComponent siteComponent;

    private String[] ignoreProperties = ArrayUtils.addAll(new String[] { "id",
            "siteId",
            "salt",
            "password",
            "lastLoginDate",
            "lastLoginIp",
            "loginCount",
            "disabled" }, BaseService.ignoreProperties);

    /**
     * @param site
     * @param admin
     * @param id
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("{id}")
    @ResponseBody
    public SysUserData detail(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @PathVariable Long id,
            HttpServletRequest request,
            ModelMap model) {

        BaseSysUser user = ServiceUtils.getUserService().getEntity(id);
        SysDept dept = user.getDeptId() == null ? null : deptService.getEntity(user.getDeptId());
        List<SysRole> roles = (List<SysRole>) roleService.getPage(SysRoleQuery.builder().userId(user.getId()).build()).getList();
        return new SysUserData(user, dept, roles);
    }

    /**
     * @param site
     * @param admin
     * @param query
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("list")
    @ResponseBody
    public PageHandler list(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            SysUserQuery query,
            @RequestParam(value = "page", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize,
            HttpServletRequest request,
            ModelMap model) {

        PageHandler page = ServiceUtils.getUserService().getPage(query, pageIndex, pageSize);

        List<SysUserData> userList = ((List<BaseSysUser>)page.getList()).stream().map(r ->
                new SysUserData(r,
                        r.getDeptId() == null ? null : deptService.getEntity(r.getDeptId()),
                        (List<SysRole>)roleService.getPage(SysRoleQuery.builder().userId(r.getId()).build()).getList()
                )
        ).collect(Collectors.toList());
        page.setList(userList);

        return page;
    }



    /**
     * @param site
     * @param admin
     * @param data
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    public AjaxResponse save(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestBody SysUserData data,
            HttpServletRequest request,
            ModelMap model) {
        BaseSysUser entity = data.toEntity(ServiceUtils.getUserService().getSysUserBuilder().build()) ;

        entity.setUsername(StringUtils.trim(entity.getUsername()));
        entity.setNickname(StringUtils.trim(entity.getNickname()));
        entity.setPassword(StringUtils.trim(entity.getPassword()));
        String  repassword = StringUtils.trim(data.getRepassword());
        if (ControllerUtils.verifyNotEmpty("username", entity.getUsername(), model)
                || ControllerUtils.verifyNotEmpty("nickname", entity.getNickname(), model)
                || ControllerUtils.verifyNotUserName("username", entity.getUsername(), model)
                || ControllerUtils.verifyNotNickName("nickname", entity.getNickname(), model)) {
            String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
            return AjaxResponse.fail(message);
        }
        if (!entity.isAdmin()) {
            entity.setRoles(null);
            entity.setDeptId(null);
            entity.setOwnsAllContent(false);
        }

        Integer[] roleIds = data.getRoleIds().toArray(new Integer[0]);

        if (null != entity.getId()) {
            BaseSysUser oldEntity = ServiceUtils.getUserService().getEntity(entity.getId());
            if (null == oldEntity || ControllerUtils.verifyNotEquals("siteId", site.getId(), oldEntity.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            if (
                (
                    !oldEntity.getUsername().equals(entity.getUsername())
                    && ControllerUtils.verifyHasExist("username", ServiceUtils.getUserService().findByName(site.getId(), entity.getUsername()), model)

                )
                    // || (!oldEntity.getNickName().equals(entity.getNickName()) && ControllerUtils.verifyHasExist("nickname", service.findByNickName(site.getId(), entity.getNickName()), model))

            ) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            if (CommonUtils.notEmpty(entity.getPassword())) {
                if (ControllerUtils.verifyNotEquals("repassword", entity.getPassword(), repassword, model)) {
                    String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                    return AjaxResponse.fail(message);
                }
                String salt = UserPasswordUtils.getSalt();
                ServiceUtils.getUserService().updatePassword(entity.getId(), UserPasswordUtils.passwordEncode(entity.getPassword(), salt), salt);
            }
            if (CommonUtils.empty(entity.getEmail()) || !entity.getEmail().equals(oldEntity.getEmail())) {
                entity.setEmailVerified(false);
            }
            entity = ServiceUtils.getUserService().update(entity.getId(), entity, ignoreProperties);
            if (null != entity) {
                roleUserService.dealRoleUsers(entity.getId(), roleIds);
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("update.user")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
        } else {
            if (ControllerUtils.verifyNotEmpty("password", entity.getPassword(), model)
                    || ControllerUtils.verifyNotEquals("repassword", entity.getPassword(), repassword, model)
                    || ControllerUtils.verifyHasExist("username", ServiceUtils.getUserService().findByName(site.getId(), entity.getUsername()), model)
                    // || ControllerUtils.verifyHasExist("nickname", service.findByNickName(site.getId(), entity.getNickName()), model)
            ) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            entity.setSiteId(site.getId());
            entity.setSalt(UserPasswordUtils.getSalt());
            entity.setPassword(UserPasswordUtils.passwordEncode(entity.getPassword(), entity.getSalt()));
            entity.setWeakPassword(true);
            ServiceUtils.getUserService().save(entity);
            if (CommonUtils.notEmpty(roleIds)) {
                for (Integer roleId : roleIds) {
                    roleUserService.save(SysRoleUser.builder().id(SysRoleUserId.builder().roleId(roleId).userId(entity.getId()).build()).build());
                }
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.user")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }

        return AjaxResponse.success(entity.getId());
    }

    /**
     * @param site
     * @param admin
     * @param id
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping(value = "enable/{id}", method = RequestMethod.POST)
    @Csrf
    public String enable(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, @PathVariable Long id, HttpServletRequest request,
                         ModelMap model) {
        BaseSysUser entity = ServiceUtils.getUserService().getEntity(id);
        if (null != entity) {
            if (ControllerUtils.verifyNotEquals("siteId", site.getId(), entity.getSiteId(), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            ServiceUtils.getUserService().updateStatus(id, false);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("enable.user")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param id
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping(value = "disable/{id}", method = RequestMethod.POST)
    @Csrf
    public String disable(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, @PathVariable Long id, HttpServletRequest request,
                          ModelMap model) {
        BaseSysUser entity = ServiceUtils.getUserService().getEntity(id);
        if (null != entity) {
            if (ControllerUtils.verifyNotEquals("siteId", site.getId(), entity.getSiteId(), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            ServiceUtils.getUserService().updateStatus(id, true);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("disable.user")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param username
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping(value = "exist/{username}", method = RequestMethod.POST)
    public AjaxResponse exist(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @PathVariable String username,
            HttpServletRequest request,
            ModelMap model) {
        BaseSysUser user = ServiceUtils.getUserService().findByName(site.getId(), username);
        if (user != null) {
            return AjaxResponse.fail("User Already Exist");
        }
        return AjaxResponse.success("can use username");
    }

    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("roleList")
    @ResponseBody
    public List<String> roleList(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            HttpServletRequest request,
            ModelMap model) {


        List<SysRoleUser> userRoleList = roleUserService.getList(SysRoleUserQuery.builder().userId(admin.getId()).build());

        return roleService.getEntitys(userRoleList.stream().map(ur -> ur.getId().getRoleId()).collect(Collectors.toList()).toArray(new Integer[0])).stream().map(r->r.getName()).collect(Collectors.toList());
    }


}
