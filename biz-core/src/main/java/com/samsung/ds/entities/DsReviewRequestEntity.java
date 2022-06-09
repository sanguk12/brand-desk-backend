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
import java.util.Date;

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

    @Column(name = "copy")
    private Long copy;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "title")
    private String title;

    @Column(name = "type1")
    private Long type1;

    @Column(name = "type2")
    private Long type2;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "status", nullable = false)
    @GeneratorColumn(title = "상태")
    private Long status;

    @Column(name = "survey")
    @GeneratorColumn(title = " 만족도")
    private Integer survey;

    @Column(name = "survey_comment")
    @GeneratorColumn(title = "만족도 코멘트")
    private String surveyComment;

    @Column(name = "level")
    @GeneratorColumn(title = "Level")
    private Long level;

    @Column(name = "lettermark")
    @GeneratorColumn(title = "lettermark")
    private Boolean lettermark;

    @Column(name = "color")
    @GeneratorColumn(title = "color")
    private Boolean color;

    @Column(name = "naming")
    @GeneratorColumn(title = "naming")
    private Boolean naming;

    @Column(name = "typography")
    @GeneratorColumn(title = "typography")
    private Boolean typography;

    @Column(name = "imagery")
    @GeneratorColumn(title = "imagery")
    private Boolean imagery;

    @Column(name = "illustration")
    @GeneratorColumn(title = "illustration")
    private Boolean illustration;


    @Column(name = "review_1st")
    @GeneratorColumn(title = "1차 검토자")
    private String review1st;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "review_1st_date")
    @GeneratorColumn(title = "1차 승인일")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date review1stDate;

    @Column(name = "review_comment1_1st")
    @GeneratorColumn(title = "1차 승인 코멘트1")
    private String reviewComment11st;

    @Column(name = "review_comment2_1st")
    @GeneratorColumn(title = "1차 승인 코멘트2")
    private String reviewComment21st;


    @Column(name = "review_2st")
    @GeneratorColumn(title = "2차 검토자")
    private String review2st;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "review_2st_date")
    @GeneratorColumn(title = "1차 승인일")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date review2stDate;

    @Column(name = "review_comment1_2st")
    @GeneratorColumn(title = "2차 승인 코멘트1")
    private String reviewComment12st;

    @Column(name = "review_comment2_2st")
    @GeneratorColumn(title = "2차 승인 코멘트1")
    private String reviewComment22st;
}
