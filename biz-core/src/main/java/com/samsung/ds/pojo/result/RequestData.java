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
public class RequestData {
    private Long id;
    private String statusCode;
    private String adminStatusCode;
    private String status;
    private String adminStatus;
    private String title;
    private String content;


    private List<RoleInfo> roles;
}
