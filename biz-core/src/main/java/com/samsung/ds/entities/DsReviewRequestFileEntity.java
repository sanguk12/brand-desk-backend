package com.samsung.ds.entities;

import com.synccms.common.database.CmsUpgrader;
import com.synccms.common.generator.annotation.GeneratorColumn;
import com.synccms.entities.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;

@Entity
@Table(name = "ds_review_request")
@DynamicUpdate
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class DsReviewRequestFileEntity extends BaseEntity {
    @Id
    @GeneratedValue(generator = "cmsGenerator")
    @GenericGenerator(name = "cmsGenerator", strategy = CmsUpgrader.IDENTIFIER_GENERATOR)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "review_id", length = 50)
    private Long reviewId;

    @Column(name = "user_id", length = 50)
    private Long userId;

    @Column(name = "file_path", nullable = false)
    private String filePath;

    @Column(name = "file_type", nullable = false, length = 45)
    private String fileType;

    @Column(name = "file_size", nullable = false, length = 45)
    private Long fileSize;

    @Column(name = "sort", nullable = false, length = 45)
    private Integer sort;

}
