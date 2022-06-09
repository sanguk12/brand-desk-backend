package com.samsung.ds.logic.dao;

import com.samsung.ds.entities.DsJoinRequestEntity;
import com.samsung.ds.entities.DsReviewRequestEntity;
import com.samsung.ds.logic.query.JoinRequestQuery;
import com.samsung.ds.logic.query.ReviewRequestQuery;
import com.synccms.common.base.BaseDao;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.handler.QueryHandler;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.StringUtil;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.stereotype.Repository;

import java.util.Date;

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
        QueryHandler queryHandler;

        if (CommonUtils.notEmpty(query.getText())) {
            queryHandler = getQueryHandler("select bean from DsReviewRequestEntity bean LEFT OUTER JOIN SysUser su on su.id = bean.userId");
        }else{
            queryHandler = getQueryHandler("from DsReviewRequestEntity bean");
        }
        if (CommonUtils.notEmpty(query.getCreateDate()) && query.getCreateDate().length == 2) {
            Date startDate;
            Date endDate;
             if(query.getCreateDate()[0].before(query.getCreateDate()[1]))
             {
                 startDate = query.getCreateDate()[0];
                 endDate = query.getCreateDate()[1];
             }else {
                 startDate = query.getCreateDate()[1];
                 endDate = query.getCreateDate()[0];
             }
            queryHandler.condition("bean.createDate > :startCreateDate").setParameter("startCreateDate", startDate);
            queryHandler.condition("bean.createDate <= :endCreateDate").setParameter("endCreateDate", endDate);
        }
        if (CommonUtils.notEmpty(query.getText())) {
            if (CommonUtils.notEmpty(query.getSearchType())) {
                queryHandler.condition(
                        "( " +
                        " (lower(bean.title) like lower(:text)) " +
                        " or (lower(su.username) like lower(:text))" +
                        " or (lower(su.email) like lower(:text))" +
                        " or (lower(su.nickname) like lower(:text))" +
                        " )").setParameter("text", like(query.getText())
                );
            } else if (StringUtil.equals(query.getSearchType(), "title")) {
                queryHandler.condition(
                        "( " +
                                " (lower(bean.title) like lower(:text)) " +
                                " )").setParameter("text", like(query.getText())
                );
            } else if (StringUtil.equals(query.getSearchType(), "user")) {
                queryHandler.condition(
                        "( " +
                                " (lower(su.nickname) like lower(:text))" +
                                " )").setParameter("text", like(query.getText())
                );
            } else if (StringUtil.equals(query.getSearchType(), "email")) {
                queryHandler.condition(
                        "( " +
                                " (lower(su.email) like lower(:text))" +
                                " )").setParameter("text", like(query.getText())
                );
            }
        }

        if(CommonUtils.notEmpty(query.getUserId()))
        {
            queryHandler.condition("bean.userId = :userId").setParameter("userId", query.getUserId());
        }

        if(CommonUtils.notEmpty(query.getStatus()))
        {
            queryHandler.condition(" bean.status = :status ").setParameter("status", query.getStatus());
        }

        queryHandler.order("bean.id desc");
        return getPage(queryHandler, pageIndex, pageSize);
    }

    @Override
    protected DsReviewRequestEntity init(DsReviewRequestEntity entity) {
        return entity;
    }

}
