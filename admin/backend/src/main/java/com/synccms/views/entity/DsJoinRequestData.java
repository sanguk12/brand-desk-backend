package com.synccms.views.entity;

import com.samsung.ds.entities.DsJoinRequestEntity;
import com.synccms.entities.sys.SysUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.beanutils.PropertyUtils;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DsJoinRequestData {
    private Long id;
    private String email;
    private String nickname;
    private String company;
    private String dept;
    private String role;
    private String phone;
    private Long staff;
    private String staffName;
    private Boolean download;
    private int status;

    public DsJoinRequestData(DsJoinRequestEntity entity, SysUser staff)
    {
        try {
            PropertyUtils.copyProperties(this, entity);
        } catch (Exception e) {
            //IGNORE
        }

        if(staff != null) {
            staffName = staff.getUsername() + "(" + staff.getNickname() + ")";
        }

    }
}
