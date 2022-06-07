package com.samsung.ds.logic.service;

import com.samsung.ds.entities.DsReviewRequestEntity;
import com.samsung.ds.logic.dao.DsReviewRequestDao;
import com.samsung.ds.logic.query.ReviewRequestQuery;
import com.synccms.common.base.BaseService;
import com.synccms.common.handler.PageHandler;
import com.synccms.entities.cms.CmsDictionary;
import com.synccms.entities.cms.CmsDictionaryItem;
import com.synccms.entities.sys.SysSite;
import com.synccms.logic.service.cms.CmsDictionaryItemService;
import com.synccms.logic.service.cms.CmsDictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public static final String STATUS_APPROVED = "APPROVED";
    public static final String STATUS_REJECTED = "REJECT";
    @Autowired private DsReviewRequestDao dao;
    @Autowired private CmsDictionaryService dictionaryService;
    @Autowired private CmsDictionaryItemService dictionaryItemService;

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
