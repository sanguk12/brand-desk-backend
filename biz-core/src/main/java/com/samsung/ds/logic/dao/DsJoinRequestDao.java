package com.samsung.ds.logic.dao;

import com.samsung.ds.entities.DsJoinRequest;
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
     * @param channel
     * @param pageIndex
     * @param pageSize
     * @return results page
     */
    public PageHandler getPage(String channel, Integer pageIndex, Integer pageSize) {
        QueryHandler queryHandler = getQueryHandler("from DsJoinRequest bean");
        queryHandler.order("bean.id desc");
        return getPage(queryHandler, pageIndex, pageSize);
    }

    @Override
    protected DsJoinRequest init(DsJoinRequest entity) {
        return entity;
    }

}
