package com.samsung.ds.pojo.result;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@Builder
@RequiredArgsConstructor(staticName = "of")
@AllArgsConstructor
public class UserData {
    private Long id;
    private String token;
    private String nickname;
    private String email;
    private List<RoleInfo> roles;
}
