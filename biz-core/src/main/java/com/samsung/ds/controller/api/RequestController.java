package com.samsung.ds.controller.api;

import com.samsung.ds.views.pojo.model.ReviewRequest;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.common.tools.CmsFileUtils;
import com.synccms.common.tools.ExtendUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.cms.*;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.logic.service.cms.*;
import com.synccms.views.pojo.query.CmsContentQuery;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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
    @Autowired private CmsContentFileService fileService;
    @Autowired private CmsContentAttributeService attributeService;
    @Autowired private CmsCategoryService categoryService;

    @Autowired private CmsDictionaryService dictionaryService;
    @Autowired private CmsDictionaryItemService dictionaryItemService;

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
     * @return view name
     */
    @RequestMapping(value = "write", method = RequestMethod.POST)
    public AjaxResponse write(
            @RequestAttribute SysSite site,
            @SessionAttribute SysUser user,
            @RequestBody ReviewRequest req) {
        CmsCategory cate = categoryService.getEntityByCode(site.getId(), "REQUEST");

        CmsContent entity = new CmsContent();
        entity.setSiteId(site.getId());
        entity.setUserId(user.getId());
        entity.setModelId("REQUEST");
        entity.setTitle(req.getTitle());
        entity.setCategoryId(cate.getId());
        entity.setHasFiles(true);
        entity.setPublishDate(new Date());
        entity.setCheckDate(new Date());
        entity.setSort(0);

        entity.setStatus(CmsContentService.STATUS_NORMAL);

        service.save(entity);

        CmsContentAttribute attribute = new CmsContentAttribute();
        attribute.setContentId(entity.getId());

        Map<String, String> map = new HashMap<>();
        map.put("type", req.getType1() + "," + req.getType2());
        map.put("content", req.getContent());
        map.put("status", req.isTemp() ? "TEMPORARY" : "REQUEST");

        attribute.setData(ExtendUtils.getExtendString(map));

        attributeService.save(attribute);

        for(int i = 0; i < req.getFiles().length; i++)
        {
            String filePath = req.getFiles()[i];
            CmsContentFile file = new CmsContentFile();

            file.setFilePath(filePath);
            file.setFileType(CmsFileUtils.FILE_TYPE_OTHER);
            file.setSort(i);
            file.setUserId(user.getId());
            file.setContentId(entity.getId());

            fileService.save(file);
        }

        return AjaxResponse.success(entity.getId());
    }


    /**
     * @param site
     * @return view name
     */
    @RequestMapping(value = "typeList")
    public AjaxResponse typeList(
            @RequestAttribute SysSite site,
            @RequestParam(value = "parentData", required = false) Long parentData) {
        CmsDictionary dict = dictionaryService.getByCode(site.getId(), "REQUEST_TYPE");
        if(parentData != null)
        {
            dict = dictionaryService.getDictionaryByParent(dict.getId(), parentData, site.getId());
        }
        if(dict != null)
        {
            List<CmsDictionaryItem> list =  dictionaryItemService.getList(site.getId(), dict.getId());
            return AjaxResponse.success(list);
        }
        return AjaxResponse.success(new ArrayList<>());

    }
}
