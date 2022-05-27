package com.samsung.ds.controller.api;

import com.samsung.ds.logic.service.LoginService;
import com.samsung.ds.pojo.entity.LoginData;
import com.samsung.ds.tools.MessageUtils;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 *
 * LoginController 로그인 로직
 *
 */
@RestController
public class LoginController {
    protected static final Log log = LogFactory.getLog(LoginController.class);
    @Autowired private LoginService loginService;

    /**
     * @param site
     * @param request
     * @param response
     * @param model
     * @return view name
     */
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public AjaxResponse login(
            @RequestAttribute SysSite site,
            @RequestBody LoginData login,
            HttpServletRequest request,
            HttpServletResponse response,
            ModelMap model) {

        try {
            return AjaxResponse.success(loginService.login(
                    site,
                    login.getUsername(),
                    login.getPassword(),
                    login.getRememberMe(),
                    request,
                    response
            ));
        }catch(ResponseStatusException rse)
        {
            return AjaxResponse.error(rse, "error");
        }
    }

    /**
     * @param session
     * @return result
     */
    @RequestMapping("currentUser")
    @ResponseBody
    public AjaxResponse currentUser(HttpSession session, @RequestAttribute SysSite site) {
        return AjaxResponse.success(loginService.currentUser(session, site));
    }

    /**
     * @param site
     * @param userId
     * @param request
     * @param response
     * @return view name
     */
    @RequestMapping(value = "logout", method = RequestMethod.POST)
    public AjaxResponse logout(@RequestAttribute SysSite site, Long userId, HttpServletRequest request, HttpServletResponse response) {
        loginService.logout(site, userId, request, response);
        return AjaxResponse.success();

    }


    /**
     * @param site
     * @param entity
     * @param repassword
     * @param request
     * @param response
     * @param model
     * @return view name
     */
    @RequestMapping(value = "regist", method = RequestMethod.POST)
    public AjaxResponse regist(@RequestAttribute SysSite site, SysUser entity, String repassword,
                           HttpServletRequest request, HttpServletResponse response, ModelMap model) {
        SysUser user =  loginService.regist(
                site,
                entity,
                repassword,
                request,
                response,
                model
        );

        if(user != null)
        {
            return AjaxResponse.success(user.getUsername());
        }else{
            return AjaxResponse.fail(MessageUtils.getMessage((String)model.get(CommonConstants.ERROR), request));
        }
    }
}
