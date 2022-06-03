package com.synccms.controller.api.admin.sys;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.ControllerUtils;
import com.synccms.common.tools.JsonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysApp;
import com.synccms.entities.sys.SysAppToken;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysAppService;
import com.synccms.logic.service.sys.SysAppTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.UUID;

/**
 *
 * SysAppTokenAdminController
 *
 */
@RestController
@RequestMapping("sysAppToken")
public class SysAppTokenAdminController {
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    /**
     * @param site
     * @param admin
     * @param id
     * @param expiryDate
     * @param request
     * @param session
     * @param model
     * @return view name
     */
    @RequestMapping("issue")
    @Csrf
    public String issue(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Integer id,
                        @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") Date expiryDate, HttpServletRequest request, HttpSession session,
                        ModelMap model) {
        SysApp entity = appService.getEntity(id);
        if (null != entity) {
            if (ControllerUtils.verifyNotEquals("siteId", site.getId(), entity.getSiteId(), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            Date now = CommonUtils.getDate();
            service.save(SysAppToken.builder().authToken (UUID.randomUUID().toString()).appId(entity.getId()).createDate(now).expiryDate(expiryDate).build());

            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("issue.apptoken")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(entity.getId().toString())
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param authToken
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("delete")
    @Csrf
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String authToken,
                         HttpServletRequest request, ModelMap model) {
        SysAppToken entity = service.getEntity(authToken);
        Long userId = admin.getId();
        if (null != entity) {
            SysApp app = appService.getEntity(entity.getAppId());
            if (null != app) {
                if (ControllerUtils.verifyNotEquals("siteId", site.getId(), app.getSiteId(), model)) {
                    return CommonConstants.TEMPLATE_ERROR;
                }
                service.delete(authToken);
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("delete.apptoken")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    @Autowired
    private SysAppTokenService service;

    @Autowired
    private SysAppService appService;

}
