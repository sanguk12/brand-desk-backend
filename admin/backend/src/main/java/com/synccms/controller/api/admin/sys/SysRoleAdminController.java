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
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.*;
import com.synccms.views.pojo.entities.RoleData;
import com.synccms.views.pojo.entities.SysModuleData;
import com.synccms.views.pojo.entities.SysRoleData;
import com.synccms.views.pojo.model.ModuleSearchParameter;
import com.synccms.views.pojo.query.SysRoleModuleQuery;
import com.synccms.views.pojo.query.SysRoleUserQuery;
import org.apache.commons.lang3.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static com.synccms.views.pojo.model.ModuleParameter.TYPE_MENU;

/**
 *
 * SysRoleAdminController
 *
 */
@RestController
@RequestMapping("sysRole")
public class SysRoleAdminController {
    @Autowired
    private SysRoleService service;
    @Autowired
    private SysRoleUserService roleUserService;
    @Autowired
    private SysRoleModuleService roleModuleService;
    @Autowired
    private SysModuleService moduleService;

    @Autowired
    private SysRoleAuthorizedService roleAuthorizedService;
    @Autowired
    private BaseSysUserService userService;

    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    private String[] ignoreProperties = ArrayUtils.addAll(new String[] { "id", "siteId" }, BaseService.ignoreProperties);

    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("list")
    @ResponseBody
    public PageHandler list(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize,
            HttpServletRequest request,
            ModelMap model) {
        PageHandler page = service.getPage(site.getId(), pageIndex, pageSize);
        List<RoleData> roleList =  ((List<SysRole>)page.getList()).stream().map(r -> createRoleData(r)).collect(Collectors.toList());
        page.setList(roleList);

        return page;
    }


    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("moduleTree")
    @ResponseBody
    public List<SysModuleData> moduleTree(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            Integer roleId,
            ModuleSearchParameter search,
            HttpServletRequest request,
            ModelMap model) {
        List<SysRoleModule> roleModuleList = roleModuleService.list(roleId);

        Boolean menu = search.getType() == null ? null : search.getType() == TYPE_MENU;
        List<SysModuleData> tree =  moduleService.getTree(search.getId(), menu);

        Stream<SysModuleData> stream = tree.stream().flatMap(SysModuleData::stream);

        stream.forEach(m ->
                m.setSelected(
                        roleModuleList.stream().filter(r->
                                StringUtil.equals(m.getId(), r.getId().getModuleId()
                                )
                        ).findAny().isPresent()));
        return tree;
    }

    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("allList")
    @ResponseBody
    public List<RoleData> list(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            HttpServletRequest request,
            ModelMap model) {
        PageHandler page = service.getPage(site.getId(), 1, PageHandler.MAX_PAGE_SIZE);
        return ((List<SysRole>)page.getList()).stream().map(r -> createRoleData(r)).collect(Collectors.toList());
    }

    private RoleData createRoleData(SysRole role)
    {
        List<String> moduleIds = ((List<SysRoleModule>)roleModuleService.getPage(new SysRoleModuleQuery(role.getId(), null), null, null).getList())
                .stream().map(rm -> rm.getId().getModuleId()).collect(Collectors.toList());

        return new RoleData(role, moduleIds.toArray(new String[0]));
    }





    /**
     * @param site
     * @param admin
     * @param ownsAllRight
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("saveOwnsAllRight")
    @Csrf
    @ResponseBody
    public AjaxResponse saveOwnsAllRight(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestParam("roleId") Integer roleId,
            @RequestParam("ownsAllRight") Boolean ownsAllRight,
            HttpServletRequest request,
            ModelMap model) {
        if (null != roleId) {
            SysRole role = service.getEntity(roleId);
            if (null == role || ControllerUtils.verifyNotEquals("siteId", site.getId(), role.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            role.setOwnsAllRight(ownsAllRight);
            service.update(role.getId(), role);
        }

        return AjaxResponse.success();
    }

    /**
     * @param site
     * @param admin
     * @param showAllModule
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("saveShowAllModule")
    @Csrf
    @ResponseBody
    public AjaxResponse saveShowAllModule(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestParam("roleId") Integer roleId,
            @RequestParam("showAllModule") Boolean showAllModule,
            HttpServletRequest request,
            ModelMap model) {
        if (null != roleId) {
            SysRole role = service.getEntity(roleId);
            if (null == role || ControllerUtils.verifyNotEquals("siteId", site.getId(), role.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            role.setShowAllModule(showAllModule);
            service.update(role.getId(), role);
        }

        return AjaxResponse.success();
    }



    /**
     * @param site
     * @param admin
     * @param moduleIds
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("saveModule")
    @Csrf
    @ResponseBody
    public AjaxResponse saveModule(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestParam("roleId") Integer roleId,
            @RequestParam("moduleIds[]") String[] moduleIds,
            HttpServletRequest request,
            ModelMap model) {
        if (null != roleId) {
            SysRole role = service.getEntity(roleId);
            if (null == role || ControllerUtils.verifyNotEquals("siteId", site.getId(), role.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }

            roleModuleService.updateRoleModules(role.getId(), moduleIds);
            roleAuthorizedService.dealRoleModules(role.getId(), role.isShowAllModule(), moduleService.getEntitys(moduleIds), role.isShowAllModule() ? moduleService.getPageUrl(null) : null);

            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.role.module")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(role))
                    .build()
            );
        }

        return AjaxResponse.success();
    }

    /**
     * @param site
     * @param admin
     * @param id
     * @param status
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("setStatus")
    @Csrf
    @ResponseBody
    public Integer setStatus(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            Integer id,
            Integer status,
            HttpServletRequest request,
            ModelMap model) {
        SysRole entity = service.getEntity(id);
        entity.setStatus(status);
        entity = service.update(id, entity, ignoreProperties);

        logOperateService.save(LogOperate.builder()
                .siteId(site.getId())
                .userId(admin.getId())
                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                .operate("save.role.status")
                .ip(RequestUtils.getIpAddress(request))
                .createDate(CommonUtils.getDate())
                .content(JsonUtils.getString(entity))
                .build()
        );

        return status;
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
    @ResponseBody
    public AjaxResponse save(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestBody SysRoleData data,
            HttpServletRequest request,
            ModelMap model) {

        SysRole entity = data.toEntity();
        if (null != entity.getId()) {
            SysRole oldEntity = service.getEntity(entity.getId());
            if (null == oldEntity || ControllerUtils.verifyNotEquals("siteId", site.getId(), oldEntity.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            entity = service.update(entity.getId(), entity, ignoreProperties);
            if (null != entity) {
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("update.role")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
        } else {
            entity.setSiteId(site.getId());
            service.save(entity);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.role")
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
    @RequestMapping("delete")
    @Csrf
    @ResponseBody
    public AjaxResponse delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Integer id, HttpServletRequest request,
                         ModelMap model) {
        SysRole entity = service.getEntity(id);
        if (null != entity) {
            if (ControllerUtils.verifyNotEquals("siteId", site.getId(), entity.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            service.delete(id);
            @SuppressWarnings("unchecked")
            List<SysRoleUser> roleUserList = roleUserService.getList(SysRoleUserQuery.builder().roleId(id).build());
            for (SysRoleUser roleUser : roleUserList) {
                userService.deleteRoleIds(roleUser.getId().getUserId(), id);
            }
            roleUserService.deleteByRoleId(id);
            roleModuleService.deleteByRoleId(id);
            roleAuthorizedService.deleteByRoleId(id);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.role")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        return AjaxResponse.success();
    }
}
