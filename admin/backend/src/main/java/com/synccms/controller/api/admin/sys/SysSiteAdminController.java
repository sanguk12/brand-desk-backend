package com.synccms.controller.api.admin.sys;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.*;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.*;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.cms.CmsContentService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.log.LogUploadService;
import com.synccms.logic.service.sys.*;
import com.synccms.logic.service.tools.SqlService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 *
 * SysSiteAdminController
 *
 */
@RestController
@RequestMapping("sysSite")
public class SysSiteAdminController {
    protected final Log log = LogFactory.getLog(getClass());
    @Autowired
    private SysSiteService service;
    @Autowired
    private SysRoleService roleService;
    @Autowired
    private BaseSysUserService userService;
    @Autowired
    private SysDeptService deptService;
    @Autowired
    private SysRoleUserService roleUserService;
    @Autowired
    private SysDomainService domainService;
    @Autowired
    private CmsContentService contentService;
    @Autowired
    private SqlService sqlService;
    @Autowired
    protected LogUploadService logUploadService;
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    private String[] ignoreProperties = new String[] { "id" };

    /**
     * @param site
     * @param admin
     * @param entity
     * @param domain
     * @param wild
     * @param roleName
     * @param deptName
     * @param username
     * @param password
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    public String save(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, SysSite entity, String domain,
                       Boolean wild, String roleName, String deptName, String username, String password, HttpServletRequest request,
                       ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", !siteComponent.isMaster(site.getId()), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        if (null == entity.getDynamicPath()) {
            entity.setDynamicPath(CommonConstants.SEPARATOR);
        } else if (!entity.getDynamicPath().endsWith(CommonConstants.SEPARATOR)) {
            entity.setDynamicPath(entity.getDynamicPath() + CommonConstants.SEPARATOR);
        }
        if (null == entity.getSitePath()) {
            entity.setSitePath(CommonConstants.SEPARATOR);
        } else if (!entity.getSitePath().endsWith(CommonConstants.SEPARATOR)) {
            entity.setSitePath(entity.getSitePath() + CommonConstants.SEPARATOR);
        }
        if (null != entity.getId()) {
            entity = service.update(entity.getId(), entity, ignoreProperties);
            if (null != entity) {
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("update.site")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
        } else {
            if (ControllerUtils.verifyNotEmpty("username", username, model)
                    || ControllerUtils.verifyNotEmpty("password", password, model)
                    || ControllerUtils.verifyHasExist("domain", domainService.getEntity(domain), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            service.save(entity);
            if (null == wild) {
                wild = false;
            }
            domainService.save(SysDomain.builder().name(domain).siteId(entity.getId()).wild(wild).build());
            SysDept dept = SysDept.builder().siteId(entity.getId()).name(deptName).ownsAllCategory(true).ownsAllPage(true).ownsAllConfig(true).build();
            deptService.save(dept);// 부서 초기화
            SysRole role = SysRole.builder().siteId(entity.getId()).name(roleName).showAllModule(true).ownsAllRight(true).build();
            roleService.save(role);// 역할 초기화
            String salt = UserPasswordUtils.getSalt();

            BaseSysUser user = (BaseSysUser)userService.getSysUserBuilder()
                    .siteId(entity.getId())
                    .username(username)
                    .nickname(username)
                    .password(UserPasswordUtils.passwordEncode(password, salt))
                    .salt(salt)
                    .weakPassword(true)
                    .deptId(dept.getId())
                    .ownsAllContent(true)
                    .roles(role.getId().toString())
                    .emailVerified(false)
                    .isAdmin(true)
                    .disabled(false)
                    .createDate(CommonUtils.getDate())
                    .build();

            userService.save(user);// 사용자 초기화
            roleUserService.save(SysRoleUser.builder().id(SysRoleUserId.builder().roleId(role.getId()).userId(user.getId()).build()).build());// 역할 사용자 매핑 초기화
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.site")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        siteComponent.clear();
        if (!siteComponent.getSite(request.getServerName()).getId().equals(site.getId()) || site.getId().equals(entity.getId())
                && (!site.getSitePath().equals(entity.getSitePath()) || !site.getDynamicPath().equals(entity.getDynamicPath()))) {
            return CommonConstants.TEMPLATE_DONEANDREFRESH;
        } else {
            return CommonConstants.TEMPLATE_DONE;
        }
    }

    /**
     * @param site
     * @param admin
     * @param id
     * @param request
     * @param model
     * @return view name
     */
    @SuppressWarnings("unchecked")
    @RequestMapping("delete")
    @Csrf
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Short id, HttpServletRequest request,
                         ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", !siteComponent.isMaster(site.getId()), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        SysSite entity = service.getEntity(id);
        if (null != entity) {
            service.delete(id);
            String ip = RequestUtils.getIpAddress(request);
            for (SysDomain domain : (List<SysDomain>) domainService.getPage(entity.getId(), null, null, null).getList()) {
                domainService.delete(domain.getName());
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("delete.domain")
                        .ip(ip)
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.site")
                    .ip(ip)
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param sqlcommand
     * @param sqlparameters
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("execSql")
    @Csrf
    public String execSql(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String sqlcommand,
                          String[] sqlparameters, HttpServletRequest request, ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", !siteComponent.isMaster(site.getId()), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        if ("update_url".contains(sqlcommand)) {
            if (null != sqlparameters && 2 == sqlparameters.length) {
                try {
                    String oldurl = sqlparameters[0];
                    String newurl = sqlparameters[1];
                    int i = sqlService.updateContentAttribute(oldurl, newurl);
                    i += sqlService.updateContentRelated(oldurl, newurl);
                    i += sqlService.updatePlace(oldurl, newurl);
                    i += sqlService.updatePlaceAttribute(oldurl, newurl);
                    model.addAttribute("result", i);
                } catch (Exception e) {
                    model.addAttribute("error", e.getMessage());
                }
            }
        }
        model.addAttribute("sqlcommand", sqlcommand);
        model.addAttribute("sqlparameters", sqlparameters);
        logOperateService.save(LogOperate.builder()
                .siteId(site.getId())
                .userId(admin.getId())
                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                .operate("execsql.site")
                .ip(RequestUtils.getIpAddress(request))
                .createDate(CommonUtils.getDate())
                .content(JsonUtils.getString(model))
                .build()
        );

        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("reCreateIndex")
    @Csrf
    public String reCreateIndex(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, HttpServletRequest request,
                                ModelMap model) {
        contentService.reCreateIndex();
        Long userId = admin.getId();
        logOperateService.save(LogOperate.builder()
                .siteId(site.getId())
                .userId(admin.getId())
                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                .operate("reCreateIndex")
                .ip(RequestUtils.getIpAddress(request))
                .createDate(CommonUtils.getDate())
                .content(CommonConstants.BLANK)
                .build()
        );

        return CommonConstants.TEMPLATE_DONE;
    }
}
