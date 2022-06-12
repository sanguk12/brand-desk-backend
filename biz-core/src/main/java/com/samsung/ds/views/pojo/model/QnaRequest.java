package com.samsung.ds.views.pojo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.samsung.ds.entities.DsReviewRequestEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.beanutils.BeanUtils;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class QnaRequest {
    private Long id;
    private String title;
    private String content;
}
