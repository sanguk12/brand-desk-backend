package com.samsung.ds.views.pojo.entity;

import lombok.*;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AdminData {
    private Long id;
    private String username;
    private String nickname;

}
