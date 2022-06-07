package com.samsung.ds.logic.dao;

import com.samsung.ds.entities.DsJoinRequest;
import com.samsung.ds.logic.query.JoinRequestQuery;
import com.synccms.common.base.BaseDao;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.handler.QueryHandler;
import com.synccms.common.tools.CommonUtils;
import com.synccms.entities.sys.SysApp;
import org.springframework.stereotype.Repository;

/**
 *
 * SysAppDao
 *
 */
@Repository
public class DsJoinRequestDao extends BaseDao<DsJoinRequest> {

    /**
     * @param query
     * @param pageIndex
     * @param pageSize
     * @return results page
     */
    public PageHandler getPage(JoinRequestQuery query, Integer pageIndex, Integer pageSize) {
        QueryHandler queryHandler = getQueryHandler("from DsJoinRequest bean");

        if (CommonUtils.notEmpty(query.getText())) {
            queryHandler.condition("( (lower(bean.email) like lower(:text)) " +
                    " or (lower(bean.nickname) like lower(:text))" +
                    " or (lower(bean.company) like lower(:text))" +
                    " or (lower(bean.dept) like lower(:text))" +
                    " or (lower(bean.role) like lower(:text))" +
                    " )").setParameter("text", like(query.getText()));
        }


        if(CommonUtils.notEmpty(query.getStatus()))
        {
            queryHandler.condition("bean.status = :status").setParameter("status", query.getStatus());
        }

        if(query.getDownload() != null)
        {
            queryHandler.condition("bean.download = :download").setParameter("download", query.getDownload());
        }
        queryHandler.order("bean.id desc");
        return getPage(queryHandler, pageIndex, pageSize);
    }

    @Override
    protected DsJoinRequest init(DsJoinRequest entity) {
        return entity;
    }

}
