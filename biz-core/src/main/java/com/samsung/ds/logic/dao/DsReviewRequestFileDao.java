package com.samsung.ds.logic.dao;

import com.samsung.ds.entities.DsJoinRequestEntity;
import com.samsung.ds.entities.DsReviewRequestFileEntity;
import com.samsung.ds.logic.query.ReviewRequestFileQuery;
import com.samsung.ds.logic.query.ReviewRequestQuery;
import com.synccms.common.base.BaseDao;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.handler.QueryHandler;
import com.synccms.common.tools.CommonUtils;
import org.springframework.stereotype.Repository;

/**
 *
 * SysAppDao
 *
 */
@Repository
public class DsReviewRequestFileDao extends BaseDao<DsReviewRequestFileEntity> {

    /**
     * @param query
     * @param pageIndex
     * @param pageSize
     * @return results page
     */
    public PageHandler getPage(ReviewRequestFileQuery query, Integer pageIndex, Integer pageSize) {
        QueryHandler queryHandler = getQueryHandler("from DsReviewRequestFileEntity bean");
        queryHandler.condition("bean.reviewId = :reviewId").setParameter("reviewId", query.getReviewId());
        if(CommonUtils.notEmpty(query.getStep()))
        {
            queryHandler.condition("bean.step = :step").setParameter("step", query.getStep());
        }
        queryHandler.order("bean.id desc");
        return getPage(queryHandler, pageIndex, pageSize);
    }

    @Override
    protected DsReviewRequestFileEntity init(DsReviewRequestFileEntity entity) {
        return entity;
    }

}
