package com.synccms.logic.service.sys;

import com.samsung.ds.views.pojo.entity.AdminData;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import com.synccms.views.pojo.query.SysUserQuery;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class SysUserService extends BaseSysUserService<SysUser> {
    @Override
    public SysUser.SysUserBuilder getSysUserBuilder() {
        return SysUser.builder();
    }

    public List<AdminData> getAdminList(SysSite site) {
        SysUserQuery query = SysUserQuery.builder().siteId(site.getId()).roleCode("SAMSUNG_MANAGER").build();
        return ((List<SysUser>)getPage(query, null, null).getList())
                .stream().map(u ->
                        AdminData.builder()
                                .id(u.getId())
                                .nickname(u.getNickname())
                                .username(u.getUsername())
                                .build())
                .collect(Collectors.toList());
    }
}
