package com.synccms.entities.sys;

import com.synccms.common.generator.annotation.GeneratorColumn;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "sys_user",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = { "username", "site_id" }),
                @UniqueConstraint(columnNames = { "nickname", "site_id" })
        })
@DynamicUpdate
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class SysUser extends BaseSysUser {

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
        @GeneratorColumn(title = "다운로드 권환", condition = true, like = true, or = true, name = "download")
        private Boolean download;
}
