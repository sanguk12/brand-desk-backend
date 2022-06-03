package com.synccms.controller.api.admin.sys;

// Generated 2016-7-16 11:54:16 by com.synccms.common.source.SourceGenerator

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.*;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.*;
import com.synccms.logic.component.config.ConfigComponent;
import com.synccms.logic.component.config.CorsConfigComponent;
import com.synccms.logic.component.site.EmailComponent;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysConfigDataService;
import com.synccms.logic.service.sys.SysDeptConfigService;
import com.synccms.logic.service.sys.SysDeptService;
import com.synccms.views.pojo.model.SysConfigParameters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 *
 * SysConfigDataAdminController
 *
 */
@RestController
@RequestMapping("sysConfigData")
public class SysConfigDataAdminController {
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    private String[] ignoreProperties = new String[] { "id" };

    /**
     * @param site
     * @param admin
     * @param entity
     * @param sysConfigParameters
     * @param request
     * @param session
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    public String save(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, SysConfigData entity,
                       @ModelAttribute SysConfigParameters sysConfigParameters, HttpServletRequest request, HttpSession session,
                       ModelMap model) {
        if (null != entity.getId()) {
            SysDept dept = sysDeptService.getEntity(admin.getDeptId());
            if (ControllerUtils.verifyNotEmpty("deptId", admin.getDeptId(), model)
                    || ControllerUtils.verifyNotEmpty("deptId", dept, model)
                    || ControllerUtils
                            .verifyCustom("noright",
                                    !(dept.isOwnsAllConfig() || null != sysDeptConfigService
                                            .getEntity(SysDeptConfigId.builder().deptId (admin.getDeptId()).config(entity.getId().getCode()).build())),
                                    model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            entity.getId().setSiteId(site.getId());
            SysConfigData oldEntity = service.getEntity(entity.getId());
            if (null != oldEntity
                    && ControllerUtils.verifyNotEquals("siteId", site.getId(), oldEntity.getId().getSiteId(), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            Map<String, String> map = ExtendUtils.getExtentDataMap(sysConfigParameters.getExtendDataList(),
                    configComponent.getFieldList(site, entity.getId().getCode(), null, RequestContextUtils.getLocale(request)));
            entity.setData(ExtendUtils.getExtendString(map));
            if (null != oldEntity) {
                entity = service.update(oldEntity.getId(), entity, ignoreProperties);
                if (null != entity) {
                    logOperateService.save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("update.configData")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(JsonUtils.getString(entity))
                            .build()
                    );
                }
            } else {
                entity.getId().setSiteId(site.getId());
                service.save(entity);
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("save.configData")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
            configComponent.removeCache(site.getId(), entity.getId().getCode());
            if (emailComponent.getCode(site).equals(entity.getId().getCode())) {
                emailComponent.clear(site.getId());
            } else if (corsConfigComponent.getCode(site).equals(entity.getId().getCode())) {
                corsConfigComponent.clear(site.getId());
            }

        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param code
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("delete")
    @Csrf
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String code, HttpServletRequest request,
                         ModelMap model) {
        SysDept dept = sysDeptService.getEntity(admin.getDeptId());
        if (ControllerUtils.verifyNotEmpty("deptId", admin.getDeptId(), model)
                || ControllerUtils.verifyNotEmpty("deptId", dept, model)
                || ControllerUtils
                        .verifyCustom("noright",
                                !(dept.isOwnsAllConfig()
                                        || null != sysDeptConfigService.getEntity(SysDeptConfigId.builder().deptId(admin.getDeptId()).config(code).build())),
                                model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        SysConfigData entity = service.getEntity(SysConfigDataId.builder().siteId(site.getId()).code(code).build());
        if (null != entity) {
            service.delete(entity.getId());
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.configData")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
            configComponent.removeCache(site.getId(), entity.getId().getCode());
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    @Autowired
    private SysDeptConfigService sysDeptConfigService;
    @Autowired
    private SysDeptService sysDeptService;
    @Autowired
    private ConfigComponent configComponent;
    @Autowired
    private CorsConfigComponent corsConfigComponent;
    @Autowired
    private EmailComponent emailComponent;
    @Autowired
    private SysConfigDataService service;
}
