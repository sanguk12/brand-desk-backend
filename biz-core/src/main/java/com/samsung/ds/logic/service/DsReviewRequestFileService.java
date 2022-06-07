package com.samsung.ds.logic.service;

import com.samsung.ds.entities.DsReviewRequestEntity;
import com.samsung.ds.entities.DsReviewRequestFileEntity;
import com.samsung.ds.logic.dao.DsReviewRequestDao;
import com.samsung.ds.logic.dao.DsReviewRequestFileDao;
import com.samsung.ds.logic.query.ReviewRequestFileQuery;
import com.samsung.ds.logic.query.ReviewRequestQuery;
import com.synccms.common.base.BaseService;
import com.synccms.common.handler.PageHandler;
import com.synccms.entities.sys.SysSite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 *
 * DsReviewRequestService
 *
 */
@Service
@Transactional
public class DsReviewRequestFileService extends BaseService<DsReviewRequestFileEntity> {

    @Autowired
    private DsReviewRequestFileDao dao;


    /**
     * @param query
     * @param pageIndex
     * @param pageSize
     * @return
     */
    @Transactional(readOnly = true)
    public PageHandler getPage(ReviewRequestFileQuery query, Integer pageIndex, Integer pageSize) {
        return dao.getPage(query, pageIndex, pageSize);
    }

    public List<DsReviewRequestFileEntity> getList(ReviewRequestFileQuery query) {
        return (List<DsReviewRequestFileEntity>)dao.getPage(query, null, null).getList();
    }

    /**
     * @param id
     * @return
     */
    public DsReviewRequestFileEntity getEntity(Long id) {
        return getEntity(id, "id");
    }

}
