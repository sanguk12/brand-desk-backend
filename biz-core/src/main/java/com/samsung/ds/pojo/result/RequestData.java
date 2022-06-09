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
    private Long writer;
    private String nickname;
    private String status;
    private String title;
    private String content;

    private String type1;
    private String type2;
    private String type1Text;
    private String type2Text;

    private String level;
    private String levelText;

    private String elements[];
    private String elementsText[];

    private Long approver1st;
    private String approver1stNickname;
    private String review1stComment1;
    private String review1stComment2;

    private Long approver2nd;
    private String approver2ndstNickname;
    private String review2ndComment1;
    private String review2ndComment2;

    private int survey;
    private String surveyContent;
}
