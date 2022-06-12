package com.samsung.ds.controller.api;

import com.samsung.ds.views.pojo.model.QnaRequest;
import com.synccms.common.annotation.Csrf;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.common.tools.ExtendUtils;
import com.synccms.entities.cms.CmsCategory;
import com.synccms.entities.cms.CmsContent;
import com.synccms.entities.cms.CmsContentAttribute;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.logic.service.cms.*;
import com.synccms.views.pojo.query.CmsCommentQuery;
import com.synccms.views.pojo.query.CmsContentQuery;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * FaqController
 *
 */
@RestController
@RequestMapping("faq")
public class FaqController {
    protected static final Log log = LogFactory.getLog(FaqController.class);
    @Autowired private CmsContentService service;
    @Autowired private CmsContentFileService fileService;
    @Autowired private CmsContentAttributeService attributeService;
    @Autowired private CmsCategoryService categoryService;

    @Autowired private CmsCommentService commentService;

    /**
     * @param site
     * @return view name
     */
    @RequestMapping(value = "list")
    public AjaxResponse list(@RequestAttribute SysSite site,
                             @SessionAttribute SysUser user,
                             @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
                             @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize) {
        CmsCategory cate = categoryService.getEntityByCode(site.getId(), "FAQ_LIST");
        CmsContentQuery query = CmsContentQuery.builder()
                .siteId(site.getId())
                .categoryIds(new Integer[]{cate.getId()})
                .userId(user.getId())
                .disabled(false)
                .build();


        return AjaxResponse.success(service.getPage(query, pageIndex, pageSize));
    }
}
