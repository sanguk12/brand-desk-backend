package com.samsung.ds.logic.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.samsung.ds.entities.DsReviewRequestEntity;
import com.samsung.ds.entities.DsReviewRequestFileEntity;
import com.samsung.ds.logic.dao.DsReviewRequestDao;
import com.samsung.ds.logic.query.ReviewRequestQuery;
import com.samsung.ds.views.pojo.model.ReviewRequestFileParam;
import com.samsung.ds.views.pojo.model.ReviewRequestParam;
import com.synccms.common.base.BaseService;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.common.tools.StringUtil;
import com.synccms.entities.cms.CmsDictionary;
import com.synccms.entities.cms.CmsDictionaryItem;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.logic.service.cms.CmsDictionaryItemService;
import com.synccms.logic.service.cms.CmsDictionaryService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 *
 * DsReviewRequestService
 *
 */
@Service
@Transactional
public class DsReviewRequestService extends BaseService<DsReviewRequestEntity> {
    public static final String REQUEST_STATUS_DICTIONARY = "REQUEST_STATUS";
    public static final String STATUS_REQUESTED = "REQUEST";
    public static final String STATUS_REVIEW = "REVIEW";
    public static final String STATUS_MODIFY_REQUEST = "MODIFY_REQUEST";
    public static final String STATUS_MODIFY_COMPLETED = "MODIFY_COMPLETED";
    public static final String STATUS_APPROVED = "APPROVED";
    public static final String STATUS_REJECTED = "REJECT";
    public static final String STATUS_CANCEL = "CANCEL";
    @Autowired private DsReviewRequestDao dao;
    @Autowired private CmsDictionaryService dictionaryService;
    @Autowired private CmsDictionaryItemService dictionaryItemService;
    @Autowired private DsReviewRequestFileService fileService;
    @Autowired
    protected LogOperateService logOperateService;

    /**
     * @param query
     * @param pageIndex
     * @param pageSize
     * @return
     */
    @Transactional(readOnly = true)
    public PageHandler getPage(ReviewRequestQuery query, Integer pageIndex, Integer pageSize) {
        return dao.getPage(query, pageIndex, pageSize);
    }

    @Transactional
    public void approve(SysSite site, Long id) {
        DsReviewRequestEntity req = getEntity(id);

        CmsDictionary statusDict = dictionaryService.getByCode(site.getId(), REQUEST_STATUS_DICTIONARY);
        CmsDictionaryItem item = dictionaryItemService.getByDictionaryAndDataValue(site.getId(), statusDict.getId(), STATUS_APPROVED);
        req.setStatus(item.getId());
        update(req.getId(), req);
    }

    private CmsDictionaryItem findDictionaryItem(List<CmsDictionaryItem> itemList, String value)
    {
        return itemList.stream().filter(e -> e.getValue().equals(value)).findAny().orElse(null);
    }

    @Transactional
    public void accept(HttpServletRequest request, SysSite site, SysUser admin, Long id, ReviewRequestParam param) throws JsonProcessingException {
        DsReviewRequestEntity req = getEntity(id);

        String orgReq = CommonConstants.objectMapper.writeValueAsString(req);

        CmsDictionary statusDict = dictionaryService.getByCode(site.getId(), REQUEST_STATUS_DICTIONARY);
        CmsDictionaryItem item = dictionaryItemService.getByDictionaryAndDataValue(site.getId(), statusDict.getId(), STATUS_REVIEW);

        req.setStatus(item.getId());
        req.setLevel(param.getLevel());
        req.setType1(param.getType1());
        req.setType2(param.getType2());


        List<CmsDictionaryItem> elementTypeList = dictionaryItemService.getEntitys(param.getElements());
        req.setLettermark(findDictionaryItem(elementTypeList, "Lettermark")!=null);
        req.setColor(findDictionaryItem(elementTypeList, "Color")!=null);
        req.setNaming(findDictionaryItem(elementTypeList, "Naming")!=null);
        req.setTypography(findDictionaryItem(elementTypeList, "Typography")!=null);
        req.setImagery(findDictionaryItem(elementTypeList, "Imagery")!=null);
        req.setIllustration(findDictionaryItem(elementTypeList, "Illustration")!=null);

        String updatedReq = CommonConstants.objectMapper.writeValueAsString(req);
        logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("review.accept")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(orgReq + "=> " + updatedReq)
                        .build());

        update(req.getId(), req);
    }

    @Transactional
    public void first(HttpServletRequest request, SysSite site, SysUser admin, Long id, ReviewRequestParam param) throws JsonProcessingException {
        DsReviewRequestEntity req = getEntity(id);

        String orgReq = CommonConstants.objectMapper.writeValueAsString(req);

        CmsDictionary statusDict = dictionaryService.getByCode(site.getId(), REQUEST_STATUS_DICTIONARY);
        CmsDictionaryItem item = dictionaryItemService.getByDictionaryAndDataValue(site.getId(), statusDict.getId(), param.getStatus1st());

        req.setStatus(item.getId());
        req.setLevel(param.getLevel());
        req.setType1(param.getType1());
        req.setType2(param.getType2());

        List<CmsDictionaryItem> elementTypeList = dictionaryItemService.getEntitys(param.getElements());
        req.setLettermark(findDictionaryItem(elementTypeList, "Lettermark")!=null);
        req.setColor(findDictionaryItem(elementTypeList, "Color")!=null);
        req.setNaming(findDictionaryItem(elementTypeList, "Naming")!=null);
        req.setTypography(findDictionaryItem(elementTypeList, "Typography")!=null);
        req.setImagery(findDictionaryItem(elementTypeList, "Imagery")!=null);
        req.setIllustration(findDictionaryItem(elementTypeList, "Illustration")!=null);


        req.setReviewComment11st(param.getReviewComment11st());
        req.setReviewComment21st(param.getReviewComment21st());

        if(ArrayUtils.isNotEmpty(param.getFiles1st())) {
            for (ReviewRequestFileParam file : param.getFiles1st()) {
                if (BooleanUtils.isTrue(file.getDeleted()) && file.getId() != null) {
                    fileService.delete(file.getId());
                } else if (!BooleanUtils.isTrue(file.getDeleted())) {
                    DsReviewRequestFileEntity fileEntity = file.toEntity();
                    fileEntity.setReviewId(req.getId());
                    fileEntity.setUserId(admin.getId());
                    fileEntity.setStep(2);
                    fileService.save(fileEntity);
                }
            }
        }

        String updatedReq = CommonConstants.objectMapper.writeValueAsString(req);

        String operate = StringUtil.equals(param.getStatus1st(), "FIRST_REVIEW") ? "review.1st_approved" : "review.1st_reject";
        logOperateService.save(LogOperate.builder()
                .siteId(site.getId())
                .userId(admin.getId())
                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                .operate(operate)
                .ip(RequestUtils.getIpAddress(request))
                .createDate(CommonUtils.getDate())
                .content(orgReq + "=> " + updatedReq)
                .build());

        update(req.getId(), req);
    }

    @Transactional
    public void second(HttpServletRequest request, SysSite site, SysUser admin, Long id, ReviewRequestParam param) throws JsonProcessingException {
        DsReviewRequestEntity req = getEntity(id);

        String orgReq = CommonConstants.objectMapper.writeValueAsString(req);

        CmsDictionary statusDict = dictionaryService.getByCode(site.getId(), REQUEST_STATUS_DICTIONARY);
        CmsDictionaryItem item = dictionaryItemService.getByDictionaryAndDataValue(site.getId(), statusDict.getId(), param.getStatus2st());

        req.setStatus(item.getId());
        req.setLevel(param.getLevel());
        req.setType1(param.getType1());
        req.setType2(param.getType2());

        List<CmsDictionaryItem> elementTypeList = dictionaryItemService.getEntitys(param.getElements());
        req.setLettermark(findDictionaryItem(elementTypeList, "Lettermark")!=null);
        req.setColor(findDictionaryItem(elementTypeList, "Color")!=null);
        req.setNaming(findDictionaryItem(elementTypeList, "Naming")!=null);
        req.setTypography(findDictionaryItem(elementTypeList, "Typography")!=null);
        req.setImagery(findDictionaryItem(elementTypeList, "Imagery")!=null);
        req.setIllustration(findDictionaryItem(elementTypeList, "Illustration")!=null);


        req.setReviewComment11st(param.getReviewComment12st());
        req.setReviewComment21st(param.getReviewComment22st());

        if(ArrayUtils.isNotEmpty(param.getFiles2st())) {
            for (ReviewRequestFileParam file : param.getFiles2st()) {
                if (BooleanUtils.isTrue(file.getDeleted()) && file.getId() != null) {
                    fileService.delete(file.getId());
                } else if (!BooleanUtils.isTrue(file.getDeleted())) {
                    DsReviewRequestFileEntity fileEntity = file.toEntity();
                    fileEntity.setReviewId(req.getId());
                    fileEntity.setUserId(admin.getId());
                    fileEntity.setStep(3);
                    fileService.save(fileEntity);
                }
            }
        }

        String updatedReq = CommonConstants.objectMapper.writeValueAsString(req);

        String operate = StringUtil.equals(param.getStatus1st(), "SECOND_REVIEW") ? "review.2st_approved" : "review.2st_reject";
        logOperateService.save(LogOperate.builder()
                .siteId(site.getId())
                .userId(admin.getId())
                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                .operate(operate)
                .ip(RequestUtils.getIpAddress(request))
                .createDate(CommonUtils.getDate())
                .content(orgReq + "=> " + updatedReq)
                .build());

        update(req.getId(), req);
    }

    @Transactional
    public void reject(SysSite site, Long id) {
        DsReviewRequestEntity req = getEntity(id);
        CmsDictionary statusDict = dictionaryService.getByCode(site.getId(), REQUEST_STATUS_DICTIONARY);
        CmsDictionaryItem item = dictionaryItemService.getByDictionaryAndDataValue(site.getId(), statusDict.getId(), STATUS_REJECTED);
        req.setStatus(item.getId());
        update(req.getId(), req);
    }

    /**
     * @param id
     * @return
     */
    public DsReviewRequestEntity getEntity(Long id) {
        return getEntity(id, "id");
    }

}
