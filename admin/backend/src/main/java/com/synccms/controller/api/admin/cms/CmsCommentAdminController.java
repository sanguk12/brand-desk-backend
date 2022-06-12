package com.synccms.controller.api.admin.cms;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.handler.RenderHandler;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.ControllerUtils;
import com.synccms.common.tools.JsonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.cms.CmsCategory;
import com.synccms.entities.cms.CmsComment;
import com.synccms.entities.cms.CmsContent;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.component.template.TemplateComponent;
import com.synccms.logic.service.cms.CmsCommentService;
import com.synccms.logic.service.cms.CmsContentService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.views.pojo.entities.CmsCategoryData;
import com.synccms.views.pojo.query.CmsCategoryQuery;
import com.synccms.views.pojo.query.CmsCommentQuery;
import com.synccms.views.pojo.query.CmsContentQuery;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 *
 * CmsCommentAdminController
 *
 */
@RestController
@RequestMapping("cmsComment")
public class CmsCommentAdminController {
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;
    @Autowired
    private CmsContentService contentService;



    /**
     * @param site
     * @param admin
     * @param query
     * @return view name
     */
    @RequestMapping("list")
    @ResponseBody
    public PageHandler list(@RequestAttribute SysSite site,
                            @SessionAttribute BaseSysUser admin,
                            @RequestBody CmsCommentQuery query,
                            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
                            @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize) {
        PageHandler page = service.getPage(query, pageIndex, pageSize);
        return page;
    }


    /**
     * @param site
     * @param admin
     * @param entity
     * @param request
     * @param model
     * @return
     */
    @RequestMapping("save")
    @Csrf
    public String save(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, CmsComment entity,
                       HttpServletRequest request, ModelMap model) {
        if (null != entity.getId()) {
            CmsComment oldEntity = service.getEntity(entity.getId());
            if (null == oldEntity || ControllerUtils.verifyNotEquals("siteId", site.getId(), oldEntity.getSiteId(), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            entity.setUpdateDate(CommonUtils.getDate());
            entity = service.update(entity.getId(), entity, CmsContentService.ignoreProperties);
            logOperateService.save(
                    LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("update.cmsComment")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(JsonUtils.getString(entity))
                            .build()
            );
        } else {
            Date now = CommonUtils.getDate();
            entity.setSiteId(site.getId());
            entity.setUserId(admin.getId());
            entity.setStatus(CmsCommentService.STATUS_NORMAL);
            entity.setCheckUserId(admin.getId());
            entity.setCheckDate(now);
            if (null != entity.getReplyId()) {
                CmsComment reply = service.updateReplies(site.getId(), entity.getReplyId(), 1);
                if (null == reply) {
                    entity.setReplyId(null);
                } else {
                    entity.setContentId(reply.getContentId());
                    if (null == entity.getReplyUserId()) {
                        entity.setReplyUserId(reply.getUserId());
                    }
                }
            }
            if (null != entity.getReplyUserId() && entity.getReplyUserId().equals(admin.getId())) {
                entity.setReplyUserId(null);
            }
            service.save(entity);

            Set<CmsContent> contentSet = new HashSet<>();
            CmsContent content = contentService.updateComments(site.getId(), entity.getContentId(), 1);
            if (null != content && !content.isDisabled()) {
                contentSet.add(content);
            }

            logOperateService.save(
                LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("save.cmsComment")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
            );
        }
        if (CmsCommentService.STATUS_NORMAL == entity.getStatus()) {
            CmsContent content = contentService.getEntity(entity.getContentId());
            if (null != content && !content.isDisabled()) {
                contentService.createContentFile(site, content, null, null);
            }
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("check")
    @Csrf
    public String check(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids, HttpServletRequest request,
                        ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            Set<CmsContent> contentSet = service.check(site.getId(), ids, admin.getId());
            for (CmsContent content : contentSet) {
                contentService.createContentFile(site, content, null, null);// Static 존재 여부
            }
            logOperateService.save(
                    LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("check.cmsComment")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(StringUtils.join(ids, CommonConstants.COMMA))
                            .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("uncheck")
    @Csrf
    public String uncheck(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids, HttpServletRequest request,
                          ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            Set<CmsContent> contentSet = service.uncheck(site.getId(), ids);
            for (CmsContent content : contentSet) {
                contentService.createContentFile(site, content, null, null);// Static 존재 여부
            }
            logOperateService.save(
                    LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("uncheck.cmsComment")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(StringUtils.join(ids, CommonConstants.COMMA))
                            .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param request
     * @param model
     * @return operate result
     */
    @RequestMapping("delete")
    @Csrf
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids, HttpServletRequest request,
                         ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            Set<CmsContent> contentSet = service.delete(site.getId(), ids);
            for (CmsContent content : contentSet) {
                contentService.createContentFile(site, content, null, null);// Static 존재 여부
            }
            logOperateService.save(
                    LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("delete.cmsComment")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(StringUtils.join(ids, CommonConstants.COMMA))
                            .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    @Autowired
    private CmsCommentService service;
}
