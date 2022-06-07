package com.samsung.ds.logic.service;

import com.samsung.ds.entities.DsJoinRequestEntity;
import com.samsung.ds.entities.DsReviewRequestEntity;
import com.samsung.ds.logic.dao.DsJoinRequestDao;
import com.samsung.ds.logic.dao.DsReviewRequestDao;
import com.samsung.ds.logic.query.JoinRequestQuery;
import com.samsung.ds.logic.query.ReviewRequestQuery;
import com.synccms.common.base.BaseService;
import com.synccms.common.handler.PageHandler;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.logic.service.sys.SysUserService;
import org.apache.commons.beanutils.BeanUtils;
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

    public static final int STATUS_REQUESTED = 1;
    public static final int STATUS_APROVED = 2;
    public static final int STATUS_REJECTED = 3;
    @Autowired
    private DsReviewRequestDao dao;


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
    public void approve(SysSite site, Long id, Boolean download) {
        DsReviewRequestEntity req = getEntity(id);
        req.setStatus(DsReviewRequestService.STATUS_APROVED);
        update(req.getId(), req);
    }

    @Transactional
    public void reject(Long id) {
        DsReviewRequestEntity req = getEntity(id);
        req.setStatus(DsReviewRequestService.STATUS_REJECTED);
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
