package com.synccms.entities.sys;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.DynamicUpdate;

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
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class SysUser extends BaseSysUser {
}
