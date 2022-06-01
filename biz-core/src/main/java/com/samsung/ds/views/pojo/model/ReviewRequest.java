package com.samsung.ds.views.pojo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReviewRequest {
    private String title;
    private String type1;
    private String type2;
    private String content;
    private String[] files;
    private boolean temp;
}
