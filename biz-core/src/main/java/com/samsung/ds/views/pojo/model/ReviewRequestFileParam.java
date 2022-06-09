package com.samsung.ds.views.pojo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.samsung.ds.entities.DsReviewRequestFileEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReviewRequestFileParam {
    private Long id;
    private String filePath;
    private Integer sort;
    private Boolean deleted;

    public DsReviewRequestFileEntity toEntity()
    {
        DsReviewRequestFileEntity entity = new DsReviewRequestFileEntity();
        entity.setFilePath(this.filePath);
        entity.setSort(sort);
        entity.setFileType("Other");

        return entity;

    }
}
