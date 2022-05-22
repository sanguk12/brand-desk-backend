package com.samsung.ds.pojo.entity;

import lombok.*;

@Data
@Builder
@RequiredArgsConstructor(staticName = "of")
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class LoginData {
    private String username;
    private String password;
    private Boolean rememberMe;
}
