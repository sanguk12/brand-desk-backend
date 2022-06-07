package com.samsung.ds.logic.query;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class JoinRequestQuery {
    private String text;
    private Integer status;
    private Boolean download;

}
