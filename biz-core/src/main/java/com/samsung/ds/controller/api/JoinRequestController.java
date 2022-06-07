package com.samsung.ds.controller.api;

import com.samsung.ds.entities.DsJoinRequestEntity;
import com.samsung.ds.logic.service.DsJoinRequestService;
import com.samsung.ds.views.pojo.model.JoinRequestParam;
import com.synccms.common.annotation.Csrf;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.common.tools.*;
import com.synccms.entities.sys.SysSite;
import com.synccms.logic.service.sys.SysUserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

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

        DsJoinRequestEntity entity = param.toEntity();

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
