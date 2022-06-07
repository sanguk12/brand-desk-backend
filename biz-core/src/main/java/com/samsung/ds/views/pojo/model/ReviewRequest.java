package com.samsung.ds.views.pojo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.samsung.ds.entities.DsJoinRequestEntity;
import com.samsung.ds.entities.DsReviewRequestEntity;
import lombok.*;
import org.apache.commons.beanutils.BeanUtils;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReviewRequest {
    private Long id;
    private Long copy;
    private String title;
    private String type1;
    private String type2;
    private String content;

    private String[] files;
    private boolean temp;


    public DsReviewRequestEntity toEntity()
    {
        DsReviewRequestEntity req = new DsReviewRequestEntity();
        try {
            BeanUtils.copyProperties(req, this);
        } catch (Exception e) {
            //Ignore
        }

        return req;
    }
}
