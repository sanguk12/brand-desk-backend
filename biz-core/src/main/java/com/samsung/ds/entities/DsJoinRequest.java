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

import javax.persistence.*;

@Entity
@Table(name = "ds_join_request")
@DynamicUpdate
@Data
@SuperBuilder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor
public class DsJoinRequest extends BaseEntity {

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
    @GeneratorColumn(title = "사용자 이름", condition = true, like = true, or = true, name = "name")
    private String nickname;

    @Column(name = "company", nullable = false, length = 50)
    @GeneratorColumn(title = "회사명", condition = true, like = true, or = true, name = "company")
    private String company;

    @Column(name = "dept", nullable = false, length = 50)
    @GeneratorColumn(title = "부서명", condition = true, like = true, or = true, name = "dept")
    private String dept;

    @Column(name = "role", nullable = false, length = 50)
    @GeneratorColumn(title = "관련업무", condition = true, like = true, or = true, name = "role")
    private String role;

    @Column(name = "phone", nullable = false, length = 50)
    @GeneratorColumn(title = "휴대폰 번호", condition = true, like = true, or = true, name = "phone")
    private String phone;

    @Column(name = "staff", nullable = false, length = 50)
    @GeneratorColumn(title = "담당 임직원", condition = true, like = true, or = true, name = "staff")
    private Long staff;

    @Column(name = "download", nullable = false, length = 50)
    @GeneratorColumn(title = "다운로드 권한 요청 여부", condition = true, like = true, or = true, name = "download")
    private Boolean download;
}
