package com.samsung.ds.pojo.result;

import com.samsung.ds.entities.DsJoinRequestEntity;
import com.samsung.ds.entities.DsReviewRequestEntity;
import com.samsung.ds.entities.DsReviewRequestFileEntity;
import com.synccms.common.generator.annotation.GeneratorColumn;
import com.synccms.entities.cms.CmsDictionaryItem;
import com.synccms.entities.sys.SysUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.commons.beanutils.BeanUtils;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;
import java.util.List;

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
    private Date createDate;
    private Date updateDate;

    private String username;
    private String nickname;
    private String  email;

    private String statusValue;
    private String statusText;

    private String type1Value;
    private String type2Value;
    private String type1Text;
    private String type2Text;
    private List<DsReviewRequestFileEntity> files;


    public ReviewRequestData(
            DsReviewRequestEntity entity,
            List<DsReviewRequestFileEntity> files,
            CmsDictionaryItem status,
            CmsDictionaryItem type1,
            CmsDictionaryItem type2,
            SysUser user)
    {
        try {
            BeanUtils.copyProperties(this, entity);
        } catch (Exception e) {
            //Ignore
        }

        if(status != null)
        {
            this.statusValue = status.getValue();
            this.statusText = status.getText();
        }

        if(type1 != null)
        {
            this.type1Value = type1.getValue();
            this.type1Text = type1.getText();
        }
        if(type2 != null)
        {
            this.type2Value = type2.getValue();
            this.type2Text = type2.getText();
        }

        if(user != null)
        {
            this.username = user.getUsername();
            this.nickname = user.getNickname();
            this.email = user.getEmail();
        }
        this.files = files;
    }
}
