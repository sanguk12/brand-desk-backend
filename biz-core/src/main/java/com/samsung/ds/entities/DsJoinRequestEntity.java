package com.samsung.ds.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.synccms.common.database.CmsUpgrader;
import com.synccms.common.generator.annotation.GeneratorColumn;
import com.synccms.entities.BaseEntity;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.search.engine.backend.types.Searchable;
import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.GenericField;

import javax.persistence.*;

@Entity
@Table(name = "ds_join_request")
@DynamicUpdate
@Data
@SuperBuilder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor
public class DsJoinRequestEntity extends BaseEntity {

    @Id
    @GeneratedValue(generator = "cmsGenerator")
    @GenericGenerator(name = "cmsGenerator", strategy = CmsUpgrader.IDENTIFIER_GENERATOR)
    @Column(name = "id", unique = true, nullable = false)
    @GeneratorColumn(title = "ID")
    private Long id;


    @Column(name = "email", length = 100)
    @GeneratorColumn(title = "이메일", condition = true, like = true, or = true, name = "name")
    private String email;

    @Column(name = "password", nullable = false, length = 128)
    @GeneratorColumn(title = "암호")
    @JsonIgnore
    private String password;

    @Column(name = "salt", length = 20)
    @GeneratorColumn(title = "비밀번호 암호화 키")
    @JsonIgnore
    private String salt;

    @Column(name = "nickname", nullable = false, length = 45)
    @GeneratorColumn(title = "사용자 이름")
    private String nickname;

    @Column(name = "company",  length = 50)
    @GeneratorColumn(title = "회사명")
    private String company;

    @Column(name = "dept",  length = 50)
    @GeneratorColumn(title = "부서명")
    private String dept;

    @Column(name = "role", length = 50)
    @GeneratorColumn(title = "관련업무")
    private String role;

    @Column(name = "phone",  length = 50)
    @GeneratorColumn(title = "휴대폰 번호")
    private String phone;

    @Column(name = "staff", length = 50)
    @GeneratorColumn(title = "담당 임직원")
    private Long staff;

    @Column(name = "download", length = 50)
    @GeneratorColumn(title = "다운로드 권한 요청 여부")
    private Boolean download;

    @Column(name = "status", nullable = false)
    @GeneratorColumn(title = "상태")
    @GenericField(sortable= Sortable.YES, searchable = Searchable.YES)
    private int status;
}
