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
    private Long type1;
    private Long type2;
    private String content;
    private Long status;
    private Integer survey;
    private String surveyComment;
    private Long level;

    private Boolean lettermark;
    private Boolean color;
    private Boolean naming;
    private Boolean typography;
    private Boolean imagery;
    private Boolean illustration;

    private Long review1st;
    private Date review1stDate;
    private String reviewComment11st;
    private String reviewComment21st;
    private Long review2st;
    private Date review2stDate;
    private String reviewComment12st;
    private String reviewComment22st;
    private Date createDate;
    private Date updateDate;

    private String username;
    private String nickname;
    private String email;

    private String statusValue;
    private String statusText;

    private String type1Value;
    private String type2Value;
    private String type1Text;
    private String type2Text;

    private String username1st;
    private String nickname1st;
    private String email1st;

    private String username2st;
    private String nickname2st;
    private String email2st;

    private List<DsReviewRequestFileEntity> files;

    private List<DsReviewRequestFileEntity> files1st;
    private List<DsReviewRequestFileEntity> files2st;


    public ReviewRequestData(
            DsReviewRequestEntity entity,
            List<DsReviewRequestFileEntity> files,
            List<DsReviewRequestFileEntity> files1st,
            List<DsReviewRequestFileEntity> files2st,
            CmsDictionaryItem status,
            CmsDictionaryItem type1,
            CmsDictionaryItem type2,
            SysUser user,
            SysUser first,
            SysUser second
            )
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

        if(first != null)
        {
            this.username1st = first.getUsername();
            this.nickname1st = first.getNickname();
            this.email1st = first.getEmail();
        }

        if(second != null)
        {
            this.username2st = second.getUsername();
            this.nickname2st = second.getNickname();
            this.email2st = second.getEmail();
        }
        this.files = files;
    }

}
