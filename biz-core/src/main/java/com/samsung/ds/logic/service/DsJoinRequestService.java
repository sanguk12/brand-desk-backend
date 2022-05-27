package com.samsung.ds.logic.service;

import com.samsung.ds.entities.DsJoinRequest;
import com.samsung.ds.logic.dao.DsJoinRequestDao;
import com.synccms.common.base.BaseService;
import com.synccms.common.handler.PageHandler;
import com.synccms.entities.sys.SysApp;
import com.synccms.logic.dao.sys.SysAppDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * DsJoinRequestService
 *
 */
@Service
@Transactional
public class DsJoinRequestService extends BaseService<DsJoinRequest> {
    @Autowired
    private DsJoinRequestDao dao;
    /**
     * @param channel
     * @param pageIndex
     * @param pageSize
     * @return
     */
    @Transactional(readOnly = true)
    public PageHandler getPage(String channel, Integer pageIndex, Integer pageSize) {
        return dao.getPage(channel, pageIndex, pageSize);
    }

    /**
     * @param id
     * @return
     */
    public DsJoinRequest getEntity(Long id) {
        return getEntity(id, "id");
    }

}
