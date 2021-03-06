package com.samsung.ds.logic.service;

import com.samsung.ds.entities.DsJoinRequestEntity;
import com.samsung.ds.logic.dao.DsJoinRequestDao;
import com.samsung.ds.logic.query.JoinRequestQuery;
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
 * DsJoinRequestService
 *
 */
@Service
@Transactional
public class DsJoinRequestService extends BaseService<DsJoinRequestEntity> {

    public static final int STATUS_REQUESTED = 1;
    public static final int STATUS_APROVED = 2;
    public static final int STATUS_REJECTED = 3;
    @Autowired
    private DsJoinRequestDao dao;


    @Autowired
    private SysUserService userService;

    /**
     * @param query
     * @param pageIndex
     * @param pageSize
     * @return
     */
    @Transactional(readOnly = true)
    public PageHandler getPage(JoinRequestQuery query, Integer pageIndex, Integer pageSize) {
        return dao.getPage(query, pageIndex, pageSize);
    }

    @Transactional
    public void approve(SysSite site, Long id, Boolean download) {
        DsJoinRequestEntity req = getEntity(id);
        req.setStatus(DsJoinRequestService.STATUS_APROVED);
        update(req.getId(), req);

        SysUser user = SysUser.builder()
                .disabled(false)
                .emailVerified(true)
                .isAdmin(false)
                .siteId(site.getId())
                .username(req.getEmail())
                .weakPassword(false)
                .locked(false)

                .build();

        try {
            BeanUtils.copyProperties(user, req);
        } catch (Exception e) {
            //Ignore
        }

        user.setDownload(download);

        userService.save(user);
    }

    @Transactional
    public void reject(Long id) {
        DsJoinRequestEntity req = getEntity(id);
        req.setStatus(DsJoinRequestService.STATUS_REJECTED);
        update(req.getId(), req);
    }

    /**
     * @param id
     * @return
     */
    public DsJoinRequestEntity getEntity(Long id) {
        return getEntity(id, "id");
    }

}
