package com.samsung.ds.controller.api;

import com.samsung.ds.logic.service.LoginService;
import com.samsung.ds.pojo.entity.LoginData;
import com.samsung.ds.tools.MessageUtils;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.entities.cms.CmsCategory;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.logic.service.cms.CmsCategoryService;
import com.synccms.logic.service.cms.CmsContentService;
import com.synccms.views.pojo.query.CmsContentQuery;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * RequestController
 *
 */
@RestController
@RequestMapping("request")
public class RequestController {
    protected static final Log log = LogFactory.getLog(RequestController.class);
    @Autowired private CmsContentService service;
    @Autowired private CmsCategoryService categoryService;


    /**
     * @param site
     * @return view name
     */
    @RequestMapping(value = "list")
    public AjaxResponse list(@RequestAttribute SysSite site,
                             @SessionAttribute SysUser user,
                             @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
                             @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize) {
        CmsCategory cate = categoryService.getEntityByCode(site.getId(), "REQUEST");
        CmsContentQuery query = CmsContentQuery.builder()
                .siteId(site.getId())
                .categoryIds(new Integer[]{cate.getId()})
                .userId(user.getId())
                .disabled(false)
                .build();


        return AjaxResponse.success(service.getPage(query, pageIndex, pageSize));
    }

    /**
     * @param site
     * @param entity
     * @param request
     * @param response
     * @param model
     * @return view name
     */
    @RequestMapping(value = "write", method = RequestMethod.POST)
    public AjaxResponse write(@RequestAttribute SysSite site, SysUser entity,
                           HttpServletRequest request, HttpServletResponse response, ModelMap model) {
        return AjaxResponse.success();
    }
}
