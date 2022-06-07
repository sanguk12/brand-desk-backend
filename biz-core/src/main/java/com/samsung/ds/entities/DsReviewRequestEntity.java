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
public class DsReviewRequestEntity extends BaseEntity {

    @Id
    @GeneratedValue(generator = "cmsGenerator")
    @GenericGenerator(name = "cmsGenerator", strategy = CmsUpgrader.IDENTIFIER_GENERATOR)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "copy", length = 50)
    private Long copy;

    @Column(name = "user_id", length = 50)
    private Long userId;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "type1", nullable = false, length = 45)
    private String type1;

    @Column(name = "type2", nullable = false, length = 45)
    private String type2;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "status", nullable = false)
    @GeneratorColumn(title = "상태")
    private Integer status;

    @Column(name = "survey", nullable = false)
    @GeneratorColumn(title = " 만족도")
    private Integer survey;

    @Column(name = "survey_comment", nullable = false, length = 45)
    @GeneratorColumn(title = "만족도 코멘트")
    private String surveyComment;

    @Column(name = "level", nullable = false, length = 45)
    @GeneratorColumn(title = "Level")
    private String level;

    @Column(name = "lettermark", length = 50)
    @GeneratorColumn(title = "lettermark")
    private Boolean lettermark;

    @Column(name = "color", length = 50)
    @GeneratorColumn(title = "color")
    private Boolean color;

    @Column(name = "naming", length = 50)
    @GeneratorColumn(title = "naming")
    private Boolean naming;

    @Column(name = "typography", length = 50)
    @GeneratorColumn(title = "typography")
    private Boolean typography;

    @Column(name = "imagery", length = 50)
    @GeneratorColumn(title = "imagery")
    private Boolean imagery;

    @Column(name = "illustration", length = 50)
    @GeneratorColumn(title = "illustration")
    private Boolean illustration;


    @Column(name = "review_1st", nullable = false, length = 45)
    @GeneratorColumn(title = "1차 검토자")
    private String review1st;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "review_1st_date", nullable = false, length = 19)
    @GeneratorColumn(title = "1차 승인일")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private String review1stDate;

    @Column(name = "review_comment1_1st", nullable = false, length = 45)
    @GeneratorColumn(title = "1차 승인 코멘트1")
    private String reviewComment11st;

    @Column(name = "review_comment1_2st", nullable = false, length = 45)
    @GeneratorColumn(title = "1차 승인 코멘트2")
    private String reviewComment21st;


    @Column(name = "review_2st", nullable = false, length = 45)
    @GeneratorColumn(title = "2차 검토자")
    private String review2st;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "review_2st_date", nullable = false, length = 19)
    @GeneratorColumn(title = "1차 승인일")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private String review2stDate;

    @Column(name = "review_comment1_2st", nullable = false, length = 45)
    @GeneratorColumn(title = "2차 승인 코멘트1")
    private String reviewComment12st;

    @Column(name = "review_comment1_2st", nullable = false, length = 45)
    @GeneratorColumn(title = "2차 승인 코멘트1")
    private String reviewComment22st;
}
