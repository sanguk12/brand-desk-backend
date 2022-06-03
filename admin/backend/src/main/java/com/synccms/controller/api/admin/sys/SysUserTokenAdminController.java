package com.synccms.controller.api.admin.sys;

import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.ControllerUtils;
import com.synccms.common.tools.JsonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.entities.sys.SysUserToken;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysUserTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import javax.servlet.http.HttpServletRequest;

/**
 *
 * SysUserTokenAdminController
 *
 */
@RestController
@RequestMapping("sysUserToken")
public class SysUserTokenAdminController {
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    /**
     * @param site
     * @param admin
     * @param authToken
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("delete")
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String authToken,
                         HttpServletRequest request, ModelMap model) {
        SysUserToken entity = service.getEntity(authToken);
        Long userId = admin.getId();
        if (null != entity) {
            if (ControllerUtils.verifyNotEquals("userId", userId, entity.getUserId(), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            service.delete(authToken);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.usertoken")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    @Autowired
    private SysUserTokenService service;

}
