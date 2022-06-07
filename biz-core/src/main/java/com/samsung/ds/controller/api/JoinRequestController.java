package com.samsung.ds.controller.api;

import com.samsung.ds.entities.DsJoinRequest;
import com.samsung.ds.logic.query.JoinRequestQuery;
import com.samsung.ds.logic.service.DsJoinRequestService;
import com.samsung.ds.views.pojo.model.JoinRequestParam;
import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.common.tools.*;
import com.synccms.entities.cms.CmsCategory;
import com.synccms.entities.cms.CmsCategoryAttribute;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.component.template.TemplateComponent;
import com.synccms.logic.service.ServiceUtils;
import com.synccms.logic.service.cms.CmsCategoryAttributeService;
import com.synccms.logic.service.cms.CmsCategoryService;
import com.synccms.logic.service.cms.CmsContentService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysUserService;
import com.synccms.views.pojo.model.CmsCategoryParameters;
import freemarker.template.TemplateException;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.stream.Collectors;

@RestController
@RequestMapping("join")
public class JoinRequestController {
    protected final Log log = LogFactory.getLog(getClass());
    @Autowired
    private DsJoinRequestService service;

    @Autowired
    private SysUserService userService;


    /**
     * @param site
     * @param param
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("request")
    @Csrf
    public AjaxResponse request(
            @RequestAttribute SysSite site,
            @RequestBody JoinRequestParam param,
            HttpServletRequest request,
            ModelMap model) {

        DsJoinRequest entity = param.toEntity();

        String salt = UserPasswordUtils.getSalt();
        String encryptedPassword = UserPasswordUtils.passwordEncode(entity.getPassword(), salt);
        entity.setSalt(salt);
        entity.setPassword(encryptedPassword);
        entity.setStatus(DsJoinRequestService.STATUS_REQUESTED);

        service.save(entity);

        return AjaxResponse.success(entity.getId());

    }



    /**
     * @param site
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("adminList")
    public AjaxResponse adminList(
            @RequestAttribute SysSite site,
            HttpServletRequest request,
            ModelMap model) {

        return AjaxResponse.success(userService.getAdminList(site));
    }

}
