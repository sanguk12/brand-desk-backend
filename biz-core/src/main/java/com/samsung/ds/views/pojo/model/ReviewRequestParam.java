package com.samsung.ds.views.pojo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReviewRequestParam {
    private Long level;
    private Long elements[];
    private Long type1;
    private Long type2;

    private String status2st;
    private String status1st;
    private String reviewComment11st;
    private String reviewComment21st;
    private String reviewComment12st;
    private String reviewComment22st;

    private ReviewRequestFileParam[] files1st;
    private ReviewRequestFileParam[] files2st;
}
