package com.synccms.controller.api.admin.ds;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.samsung.ds.entities.DsReviewRequestEntity;
import com.samsung.ds.logic.query.ReviewRequestFileQuery;
import com.samsung.ds.logic.query.ReviewRequestQuery;
import com.samsung.ds.logic.service.DsReviewRequestFileService;
import com.samsung.ds.logic.service.DsReviewRequestService;
import com.samsung.ds.pojo.result.ReviewRequestData;
import com.samsung.ds.views.pojo.model.ReviewRequestParam;
import com.synccms.common.annotation.Csrf;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.entities.cms.CmsDictionary;
import com.synccms.entities.cms.CmsDictionaryItem;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.logic.service.cms.CmsDictionaryItemService;
import com.synccms.logic.service.cms.CmsDictionaryService;
import com.synccms.logic.service.sys.SysUserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("review")
public class ReviewRequestController {
    protected final Log log = LogFactory.getLog(getClass());
    @Autowired private DsReviewRequestService service;
    @Autowired private DsReviewRequestFileService fileService;

    @Autowired private SysUserService userService;
    @Autowired private CmsDictionaryService dictionaryService;
    @Autowired private CmsDictionaryItemService dictionaryItemService;

    /**
     * @param site
     * @param query
     * @param pageIndex
     * @param pageSize
     * @return view name
     */
    @RequestMapping("list")
    public AjaxResponse list(
            @RequestAttribute SysSite site,
            @RequestBody ReviewRequestQuery query,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize) {

        if(query == null)
        {
            query = new ReviewRequestQuery();
        }
        PageHandler page = service.getPage(query, pageIndex, pageSize);
        List<DsReviewRequestEntity> reqList = (List<DsReviewRequestEntity>)page.getList();

        List<Long> userIdList  = reqList.stream().map(r -> r.getUserId()).collect(Collectors.toList());
        List<Long> statusIdList  = reqList.stream().map(r -> r.getStatus()).collect(Collectors.toList());
        List<Long> type1IdList  = reqList.stream().map(r -> r.getType1()).collect(Collectors.toList());
        List<Long> type2IdList  = reqList.stream().map(r -> r.getType2()).collect(Collectors.toList());

        List<SysUser> userList = userService.getEntitys(userIdList.toArray(new Long[0]));
        List<CmsDictionaryItem> statusItemList = dictionaryItemService.getEntitys(statusIdList.toArray(new Long[0]));
        List<CmsDictionaryItem> type1ItemList = dictionaryItemService.getEntitys(type1IdList.toArray(new Long[0]));
        List<CmsDictionaryItem> type2ItemList = dictionaryItemService.getEntitys(type2IdList.toArray(new Long[0]));

        page.setList(reqList.stream().map(r -> new ReviewRequestData(r,
                fileService.getList(ReviewRequestFileQuery.builder().reviewId(r.getId()).step(1).build()),
                null,
                null,
                statusItemList.stream().filter(t -> t.getId().equals(r.getStatus())).findFirst().orElse(null),
                type1ItemList.stream().filter(t -> t.getId().equals(r.getType1())).findFirst().orElse(null),
                type2ItemList.stream().filter(t -> t.getId().equals(r.getType2())).findFirst().orElse(null),
                userList.stream().filter(t -> t.getId().equals(r.getUserId())).findFirst().orElse(null),
                null,
                null
        )).collect(Collectors.toList()));

        return AjaxResponse.success(page);

    }



    /**
     * @param site
     * @param id
     * @return view name
     */
    @RequestMapping("detail/{id}")
    public AjaxResponse detail(
            @RequestAttribute SysSite site,
            @PathVariable Long id) {
        DsReviewRequestEntity req = service.getEntity(id);

        ReviewRequestData data = new ReviewRequestData(req,
                fileService.getList(ReviewRequestFileQuery.builder().reviewId(req.getId()).step(1).build()),
                fileService.getList(ReviewRequestFileQuery.builder().reviewId(req.getId()).step(2).build()),
                fileService.getList(ReviewRequestFileQuery.builder().reviewId(req.getId()).step(3).build()),
                dictionaryItemService.getEntity(req.getStatus()),
                dictionaryItemService.getEntity(req.getType1()),
                dictionaryItemService.getEntity(req.getType2()),
                userService.getEntity(req.getUserId()),
                userService.getEntity(req.getReview1st()),
                userService.getEntity(req.getReview2st())
        );

        return AjaxResponse.success(data);

    }


    /**
     * @param site
     * @param id
     * @return view name
     */
    @RequestMapping("reject/{id}")
    @Csrf
    public AjaxResponse reject(
            @RequestAttribute SysSite site,
            @PathVariable Long id) {
        service.reject(site, id);
        return AjaxResponse.success(id);

    }


    /**
     * @param site
     * @param id
     * @return view name
     */
    @Csrf
    @RequestMapping("accept/{id}")
    public AjaxResponse accept(
            @RequestAttribute SysSite site,
            @SessionAttribute SysUser admin,
            @RequestBody ReviewRequestParam param,
            @PathVariable Long id,
            HttpServletRequest request) throws JsonProcessingException {
        service.accept(request, site, admin, id, param);
        return AjaxResponse.success(id);
    }



    /**
     * @param site
     * @param id
     * @return view name
     */
    @Csrf
    @RequestMapping("1st/{id}")
    public AjaxResponse first(
            @RequestAttribute SysSite site,
            @SessionAttribute SysUser admin,
            @RequestBody ReviewRequestParam param,
            @PathVariable Long id,
            HttpServletRequest request) throws JsonProcessingException {
        service.first(request, site, admin, id, param);
        return AjaxResponse.success(id);
    }


    /**
     * @param site
     * @param id
     * @return view name
     */
    @Csrf
    @RequestMapping("2t/{id}")
    public AjaxResponse second(
            @RequestAttribute SysSite site,
            @SessionAttribute SysUser admin,
            @RequestBody ReviewRequestParam param,
            @PathVariable Long id,
            HttpServletRequest request) throws JsonProcessingException {
        service.second(request, site, admin, id, param);
        return AjaxResponse.success(id);
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


    /**
     * @param site
     * @return view name
     */
    @RequestMapping(value = "statusList")
    public AjaxResponse statusList(
            @RequestAttribute SysSite site,
            @RequestParam(value = "parentData", required = false) Long parentData) {
        CmsDictionary status = dictionaryService.getByCode(site.getId(), "REQUEST_STATUS");

        List<CmsDictionaryItem> list =  dictionaryItemService.getList(site.getId(), status.getId());
        return AjaxResponse.success(list);
    }


    /**
     * @param site
     * @return view name
     */
    @RequestMapping(value = "elementTypeList")
    public AjaxResponse elementTypeList(
            @RequestAttribute SysSite site) {
        CmsDictionary elementType = dictionaryService.getByCode(site.getId(), "ELEMENT_TYPE");
        List<CmsDictionaryItem> list =  dictionaryItemService.getList(site.getId(), elementType.getId());
        return AjaxResponse.success(list);
    }



    /**
     * @param site
     * @return view name
     */
    @RequestMapping(value = "levelList")
    public AjaxResponse levelList(
            @RequestAttribute SysSite site) {
        CmsDictionary level = dictionaryService.getByCode(site.getId(), "REVIEW_LEVEL");
        List<CmsDictionaryItem> list =  dictionaryItemService.getList(site.getId(), level.getId());
        return AjaxResponse.success(list);
    }
}
