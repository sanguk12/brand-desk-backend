package com.samsung.ds.logic.query;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReviewRequestQuery {
    private Date createDate[];
    private Long userId;
    private String searchType;
    private Long type1;
    private Long type2;
    private String text;
    private Integer status;

}
