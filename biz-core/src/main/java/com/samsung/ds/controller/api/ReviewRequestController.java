package com.samsung.ds.controller.api;

import com.samsung.ds.entities.DsReviewRequestEntity;
import com.samsung.ds.entities.DsReviewRequestFileEntity;
import com.samsung.ds.logic.dao.DsReviewRequestFileDao;
import com.samsung.ds.logic.query.ReviewRequestQuery;
import com.samsung.ds.logic.service.DsReviewRequestFileService;
import com.samsung.ds.logic.service.DsReviewRequestService;
import com.samsung.ds.views.pojo.model.ReviewRequest;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.common.tools.CmsFileUtils;
import com.synccms.common.tools.ExtendUtils;
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
 * ReviewRequestController
 *
 */
@RestController
@RequestMapping("review")
public class ReviewRequestController {
    protected static final Log log = LogFactory.getLog(ReviewRequestController.class);
    @Autowired private DsReviewRequestService service;
    @Autowired private DsReviewRequestFileService fileService;

    @Autowired private CmsDictionaryService dictionaryService;
    @Autowired private CmsDictionaryItemService dictionaryItemService;

    /**
     * @param site
     * @return view name
     */
    @RequestMapping(value = "list")
    public AjaxResponse list(@RequestAttribute SysSite site,
                             @SessionAttribute SysUser user,
                             @RequestBody(required = false) ReviewRequestQuery query,
                             @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
                             @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize) {

        if(query == null)
        {
            query = new ReviewRequestQuery();
        }
        query.setUserId(user.getId());
        PageHandler page = service.getPage(query, pageIndex, pageSize);

        return AjaxResponse.success(page);
    }

    /**
     * @param site
     * @return view name
     */
    @RequestMapping(value = "save", method = RequestMethod.POST)
    public AjaxResponse save(
            @RequestAttribute SysSite site,
            @SessionAttribute SysUser user,
            @RequestBody ReviewRequest req) {

        DsReviewRequestEntity entity = req.toEntity();
        entity.setStatus(DsReviewRequestService.STATUS_REQUESTED);
        entity.setUserId(user.getId());

        service.save(entity);

        for(int i = 0; i < req.getFiles().length; i++)
        {
            String filePath = req.getFiles()[i];
            DsReviewRequestFileEntity file = new DsReviewRequestFileEntity();

            file.setFilePath(filePath);
            file.setFileType(CmsFileUtils.FILE_TYPE_OTHER);
            file.setSort(i);
            file.setUserId(user.getId());
            file.setReviewId(entity.getId());

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
