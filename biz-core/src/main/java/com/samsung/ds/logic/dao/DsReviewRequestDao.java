package com.samsung.ds.logic.dao;

import com.samsung.ds.entities.DsJoinRequestEntity;
import com.samsung.ds.entities.DsReviewRequestEntity;
import com.samsung.ds.logic.query.JoinRequestQuery;
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
public class DsReviewRequestDao extends BaseDao<DsReviewRequestEntity> {

    /**
     * @param query
     * @param pageIndex
     * @param pageSize
     * @return results page
     */
    public PageHandler getPage(ReviewRequestQuery query, Integer pageIndex, Integer pageSize) {
        QueryHandler queryHandler = getQueryHandler("from DsReviewRequestEntity bean");

        if (CommonUtils.notEmpty(query.getText())) {
            queryHandler.condition("( (lower(bean.title) like lower(:text)) " +
                    " or (lower(bean.content) like lower(:text))" +
                    " )").setParameter("text", like(query.getText()));
        }

        if(CommonUtils.notEmpty(query.getUserId()))
        {
            queryHandler.condition("bean.userId = :userId").setParameter("userId", query.getUserId());
        }

        if(CommonUtils.notEmpty(query.getStatus()))
        {
            queryHandler.condition("bean.status = :status").setParameter("status", query.getStatus());
        }

        queryHandler.order("bean.id desc");
        return getPage(queryHandler, pageIndex, pageSize);
    }

    @Override
    protected DsReviewRequestEntity init(DsReviewRequestEntity entity) {
        return entity;
    }

}
