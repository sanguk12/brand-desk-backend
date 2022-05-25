package com.synccms.logic.service.sys;

import com.synccms.entities.sys.SysUser;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SysUserService extends BaseSysUserService<SysUser> {
    @Override
    public SysUser.SysUserBuilder getSysUserBuilder() {
        return SysUser.builder();
    }
}
