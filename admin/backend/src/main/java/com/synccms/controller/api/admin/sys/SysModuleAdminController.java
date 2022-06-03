package com.synccms.controller.api.admin.sys;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.constants.Constants;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.ControllerUtils;
import com.synccms.common.tools.JsonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.*;
import com.synccms.exception.AuthorizationException;
import com.synccms.logic.component.site.MenuMessageComponent;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.*;
import com.synccms.views.pojo.entities.SysMenuData;
import com.synccms.views.pojo.entities.SysModuleData;
import com.synccms.views.pojo.model.ModuleParameter;
import com.synccms.views.pojo.model.ModuleSearchParameter;
import com.synccms.views.pojo.query.SysModuleQuery;
import com.synccms.views.pojo.query.SysRoleModuleQuery;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.*;
import java.util.stream.Collectors;

import static com.synccms.views.pojo.model.ModuleParameter.TYPE_MENU;

/**
 *
 * SysModuleAdminController
 *
 */
@RestController
@RequestMapping("sysModule")
public class SysModuleAdminController {
    @Autowired
    private SysModuleService service;
    @Autowired
    private SysModuleLangService sysModuleLangService;
    @Autowired
    private SysRoleService roleService;
    @Autowired
    private SysModuleService moduleService;
    @Autowired
    private SysRoleModuleService roleModuleService;
    @Autowired
    private SysRoleAuthorizedService roleAuthorizedService;
    @Autowired
    private MenuMessageComponent menuMessageComponent;
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    @Autowired private SysModuleLangService  langService;

    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("moduleTree")
    public List<SysModuleData> moduleTree(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            ModuleSearchParameter search,
            HttpServletRequest request,
            ModelMap model) {
        Boolean menu = search.getType() == null ? null : search.getType() == TYPE_MENU;
        return service.getTree(search.getId(), menu);
    }

    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("menuTree")
    public List<SysMenuData> menuTree(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            HttpServletRequest request,
            ModelMap model) {
        List<SysModuleData> moduleTree = service.getTree(null, "new_menu", true);

        Locale locale = RequestContextUtils.getLocale(request);
        return moduleTree.stream().map(m -> new SysMenuData(m, locale)).collect(Collectors.toList());
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
    public List<SysModuleData> list(@RequestAttribute SysSite site,
                                      @SessionAttribute BaseSysUser admin,
                                      SysModuleQuery query,
                                      HttpServletRequest request,
                                      ModelMap model) {

        query.setOnlySite(true);
        query.setSiteId(site.getId());

        return service.getList(query).stream().map(m -> new SysModuleData(m,
                langService.getLang(m.getId(), Constants.Lang.ENGLISH.getValue()),
                langService.getLang(m.getId(), Constants.Lang.KOREAN.getValue()))).collect(Collectors.toList());
    }



    /**
     * @param site
     * @param admin
     * @param param
     * @param request
     * @param session
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    public String save(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestBody ModuleParameter param,
            HttpServletRequest request,
            HttpSession session,
            ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", !siteComponent.isMaster(site.getId()), model)) {
            String errorCode = (String)model.get(CommonConstants.ERROR);
            throw new AuthorizationException(HttpStatus.BAD_REQUEST, errorCode);
        }
        param.setMenu(param.isMenu());

        String oldId = param.getOldId();

        SysModule entity = param.getSysModule();
        if (CommonUtils.notEmpty(oldId)) {
            if (!param.getId().equals(oldId)
                && ControllerUtils.verifyHasExist("module", service.getEntity(param.getId()), model)) {
                String errorCode = (String)model.get(CommonConstants.ERROR);
                throw new AuthorizationException(HttpStatus.BAD_REQUEST, errorCode);
            }
            entity = service.update(oldId, entity);
            if (!entity.getId().equals(oldId)) {
                service.updateParentId(oldId, entity.getId());
            }
            if (null != entity) {
                @SuppressWarnings("unchecked")
                List<SysRoleModule> roleModuleList = (List<SysRoleModule>) roleModuleService
                        .getPage(new SysRoleModuleQuery(null, entity.getId()), null, null).getList();
                dealRoleAuthorized(roleModuleList);
                sysModuleLangService.save(oldId, entity.getId(), param.getLangList());
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("update.module")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
        } else {
            service.save(entity);
            sysModuleLangService.save(null, entity.getId(), param.getLangList());
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.module")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        menuMessageComponent.clear();
        return entity.getId();
    }

    /**
     * @param id
     * @param oldId
     * @return view name
     */
    @RequestMapping("verify")
    public boolean verify(String id, String oldId) {
        if (CommonUtils.notEmpty(id)) {
            if (CommonUtils.notEmpty(oldId) && !id.equals(oldId) && null != service.getEntity(id)
                    || CommonUtils.empty(oldId) && null != service.getEntity(id)) {
                return false;
            }
        }
        return true;
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
    public boolean delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String id, HttpServletRequest request,
                          ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", !siteComponent.isMaster(site.getId()), model)) {
            String errorCode = (String)model.get(CommonConstants.ERROR);
            throw new AuthorizationException(HttpStatus.BAD_REQUEST, errorCode);
        }
        SysModule entity = service.getEntity(id);
        if (null != entity) {
            service.delete(id);
            service.updateParentId(id, null);
            sysModuleLangService.delete(id);
            @SuppressWarnings("unchecked")
            List<SysRoleModule> roleModuleList = (List<SysRoleModule>) roleModuleService.getPage(new SysRoleModuleQuery(null, id), null, null).getList();
            roleModuleService.deleteByModuleId(id);
            dealRoleAuthorized(roleModuleList);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.module")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        menuMessageComponent.clear();
        return true;
    }

    @SuppressWarnings("unchecked")
    private void dealRoleAuthorized(List<SysRoleModule> roleModuleList) {
        for (SysRoleModule roleModule : roleModuleList) {
            Set<String> moduleIds = new HashSet<>();
            List<SysRoleModule> tmpRoleModuleList = (List<SysRoleModule>) roleModuleService.getPage(new SysRoleModuleQuery(roleModule.getId().getRoleId(), null), null, null).getList();
            for (SysRoleModule tmpRoleModule : tmpRoleModuleList) {
                moduleIds.add(tmpRoleModule.getId().getModuleId());
            }
            SysRole role = roleService.getEntity(roleModule.getId().getRoleId());
            if (!moduleIds.isEmpty() && null != role && !role.isOwnsAllRight()) {
                roleAuthorizedService.dealRoleModules(
                        roleModule.getId().getRoleId(),
                        role.isShowAllModule(),
                        service.getEntitys(moduleIds.toArray(new String[moduleIds.size()])),
                        role.isShowAllModule() ? moduleService.getPageUrl(null) : null
                );
            }
        }
    }
}
