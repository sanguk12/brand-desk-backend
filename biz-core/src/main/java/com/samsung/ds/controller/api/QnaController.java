package com.samsung.ds.controller.api;

import com.samsung.ds.views.pojo.model.QnaRequest;
import com.synccms.common.annotation.Csrf;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.common.tools.CmsFileUtils;
import com.synccms.common.tools.ExtendUtils;
import com.synccms.entities.cms.*;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.logic.service.cms.*;
import com.synccms.views.pojo.query.CmsCommentQuery;
import com.synccms.views.pojo.query.CmsContentQuery;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 *
 * QnaController
 *
 */
@RestController
@RequestMapping("qna")
public class QnaController {
    protected static final Log log = LogFactory.getLog(QnaController.class);
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
        CmsCategory cate = categoryService.getEntityByCode(site.getId(), "QNA_LIST");
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
     * @return view name
     */
    @RequestMapping(value = "save", method = RequestMethod.POST)
    @Csrf
    public AjaxResponse save(
            @RequestAttribute SysSite site,
            @SessionAttribute SysUser user,
            @RequestBody QnaRequest req) {
        CmsCategory cate = categoryService.getEntityByCode(site.getId(), "QNA_LIST");

        CmsContent entity = new CmsContent();
        entity.setSiteId(site.getId());
        entity.setUserId(user.getId());
        entity.setModelId("QNA");
        entity.setTitle(req.getTitle());
        entity.setCategoryId(cate.getId());
        entity.setHasFiles(false);
        entity.setPublishDate(new Date());
        entity.setCheckDate(new Date());
        entity.setSort(0);

        entity.setStatus(CmsContentService.STATUS_NORMAL);

        service.save(entity);

        CmsContentAttribute attribute = new CmsContentAttribute();
        attribute.setContentId(entity.getId());

        Map<String, String> map = new HashMap<>();
        map.put("CONTENT", req.getContent());
        map.put("HAS_REPLY", "N");

        attribute.setData(ExtendUtils.getExtendString(map));

        attributeService.save(attribute);

        return AjaxResponse.success(entity.getId());
    }


    /**
     * @param site
     * @return view name
     */
    @RequestMapping(value = "reply")
    public AjaxResponse reply(
            @RequestAttribute SysSite site,
            @SessionAttribute SysUser user,
            @RequestParam("id") Long id) {

        CmsCommentQuery query = CmsCommentQuery.builder().siteId(site.getId()).contentId(id).build();
        PageHandler handler = commentService.getPage(query, null, null);
        if(CollectionUtils.isNotEmpty(handler.getList()))
        {
            return AjaxResponse.success(handler.getList().get(0));
        }else {
            return AjaxResponse.success();
        }


    }
}
