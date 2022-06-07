package com.samsung.ds.pojo.result;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@RequiredArgsConstructor(staticName = "of")
@AllArgsConstructor
public class ReviewRequestData {
    private Long id;
    private Long copy;
    private Long userId;
    private String title;
    private String type1;
    private String type2;
    private String content;
    private Integer status;
    private Integer survey;
    private String surveyComment;
    private String level;

    private Boolean lettermark;
    private Boolean color;
    private Boolean naming;
    private Boolean typography;
    private Boolean imagery;
    private Boolean illustration;

    private String review1st;
    private String review1stDate;
    private String reviewComment11st;
    private String reviewComment21st;
    private String review2st;
    private String review2stDate;
    private String reviewComment12st;
    private String reviewComment22st;
}
