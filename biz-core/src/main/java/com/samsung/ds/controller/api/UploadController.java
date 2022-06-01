package com.samsung.ds.controller.api;

import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.entities.cms.CmsCategory;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.logic.service.cms.CmsCategoryService;
import com.synccms.logic.service.cms.CmsContentService;
import com.synccms.views.pojo.query.CmsContentQuery;
import com.yidan.tus.server.TusFileUploadResolver;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * UploadController
 *
 */
@RestController
@RequestMapping("/upload")
public class UploadController {
    protected static final Log log = LogFactory.getLog(UploadController.class);
    @Resource
    private TusFileUploadResolver tusFileUploadResolver;

    @RequestMapping(value = {"/", "/**"}, method = {
            RequestMethod.POST,
            RequestMethod.PATCH,
            RequestMethod.HEAD,
            RequestMethod.DELETE,
            RequestMethod.GET})
    public void upload(HttpServletRequest request, HttpServletResponse response) {
        tusFileUploadResolver.upload(request, response);
    }
}
