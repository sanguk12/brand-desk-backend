package com.samsung.ds.views.pojo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.samsung.ds.entities.DsJoinRequestEntity;
import lombok.*;
import org.apache.commons.beanutils.BeanUtils;

@Data
@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class JoinRequestParam {
    private Long id;
    private String email;
    private String password;
    private String salt;
    private String nickname;
    private String company;
    private String dept;
    private String role;
    private String phone;
    private Long staff;
    private Boolean download;

    public DsJoinRequestEntity toEntity()
    {
        DsJoinRequestEntity req = new DsJoinRequestEntity();
        try {
            BeanUtils.copyProperties(req, this);
        } catch (Exception e) {
            //Ignore
        }

        return req;
    }
}
