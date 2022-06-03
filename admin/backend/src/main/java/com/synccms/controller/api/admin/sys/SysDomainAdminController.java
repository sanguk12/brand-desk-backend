package com.synccms.controller.api.admin.sys;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.ControllerUtils;
import com.synccms.common.tools.JsonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysDomain;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysDomainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 *
 * SysDomainAdminController
 *
 */
@RestController
@RequestMapping("sysDomain")
public class SysDomainAdminController {
    @Autowired
    private SysDomainService service;
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    private String[] ignoreProperties = new String[] { "siteId", "name", "wild" };

    /**
     * @param site
     * @param admin
     * @param entity
     * @param oldName
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    public String save(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, SysDomain entity, String oldName,
                       HttpServletRequest request, ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", !siteComponent.isMaster(site.getId()), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        if (CommonUtils.notEmpty(oldName)) {
            if (!entity.getName().equals(oldName)
                    && ControllerUtils.verifyHasExist("domain", service.getEntity(entity.getName()), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            entity = service.update(oldName, entity);
            if (null != entity) {
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("update.domain")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
        } else {
            if (ControllerUtils.verifyHasExist("domain", service.getEntity(entity.getName()), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            if (0 == entity.getSiteId()) {
                entity.setSiteId(site.getId());
            }
            service.save(entity);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.domain")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        siteComponent.clear();
        if (!siteComponent.getSite(request.getServerName()).getId().equals(site.getId())) {
            return CommonConstants.TEMPLATE_DONEANDREFRESH;
        } else {
            return CommonConstants.TEMPLATE_DONE;
        }
    }

    /**
     * @param site
     * @param admin
     * @param entity
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("saveConfig")
    @Csrf
    public String saveConfig(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, SysDomain entity,
                             HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(entity.getName())) {
            SysDomain oldEntity = service.getEntity(entity.getName());
            if (null == oldEntity || ControllerUtils.verifyNotEquals("siteId", site.getId(), oldEntity.getSiteId(), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            entity = service.update(entity.getName(), entity, ignoreProperties);
            if (null != entity) {
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("update.domain")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
            siteComponent.clear();
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param name
     * @param domain
     * @param oldName
     * @return view name
     */
    @RequestMapping("verify")
    @ResponseBody
    public boolean verify(String name, String domain, String oldName) {
        if (CommonUtils.notEmpty(name)) {
            if (CommonUtils.notEmpty(oldName) && !name.equals(oldName) && null != service.getEntity(name)
                    || CommonUtils.empty(oldName) && null != service.getEntity(name)) {
                return false;
            }
        }
        if (CommonUtils.notEmpty(domain) && null != service.getEntity(domain)) {
            return false;
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
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String id, HttpServletRequest request,
                         ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", !siteComponent.isMaster(site.getId()), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        SysDomain entity = service.getEntity(id);
        if (null != entity) {
            service.delete(id);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.domain")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        siteComponent.clear();
        return CommonConstants.TEMPLATE_DONE;
    }
}
