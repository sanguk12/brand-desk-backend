package com.samsung.ds.views.pojo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.samsung.ds.entities.DsJoinRequest;
import lombok.*;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;

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

    public DsJoinRequest toEntity()
    {
        DsJoinRequest req = new DsJoinRequest();
        try {
            BeanUtils.copyProperties(req, this);
        } catch (Exception e) {
            //Ignore
        }

        return req;
    }
}
