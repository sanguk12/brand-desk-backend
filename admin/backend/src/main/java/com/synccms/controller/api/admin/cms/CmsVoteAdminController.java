package com.synccms.controller.api.admin.cms;

// Generated 2020-3-26 11:46:48 by com.synccms.common.generator.SourceGenerator

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.JsonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.cms.CmsVote;
import com.synccms.entities.cms.CmsVoteItem;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.service.cms.CmsVoteItemService;
import com.synccms.logic.service.cms.CmsVoteService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.views.pojo.model.CmsVoteParameters;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 *
 * CmsVoteAdminController
 *
 */
@RestController
@RequestMapping("cmsVote")
public class CmsVoteAdminController {

    private String[] ignoreProperties = new String[] { "id", "siteId", "scores", "createDate", "disabled" };
    private String[] itemIgnoreProperties = new String[] { "id", "voteId", "scores" };

    /**
     * @param site
     * @param admin
     * @param entity
     * @param voteParameters
     * @param request
     * @param model
     * @return operate result
     */
    @RequestMapping("save")
    @Csrf
    public String save(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, CmsVote entity,
                       @ModelAttribute CmsVoteParameters voteParameters, HttpServletRequest request, ModelMap model) {
        if (null != entity.getId()) {
            entity = service.update(entity.getId(), entity, ignoreProperties);
            voteItemService.update(entity.getId(), voteParameters.getItemList(), itemIgnoreProperties);

            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("update.cmsVote")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        } else {
            entity.setSiteId(site.getId());
            service.save(entity);
            for (CmsVoteItem item : voteParameters.getItemList()) {
                item.setVoteId(entity.getId());
            }
            voteItemService.save(voteParameters.getItemList());
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.cmsVote")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param ids
     * @param request
     * @param site
     * @param admin
     * @param _csrf
     * @param model
     * @return operate result
     */
    @RequestMapping("delete")
    @Csrf
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids, String _csrf,
                         HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            for (CmsVote entity : service.delete(site.getId(), ids)) {
                voteItemService.deleteByVoteId(entity.getId());
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.cmsVote")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(StringUtils.join(ids, ','))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    @Autowired
    private CmsVoteService service;
    @Autowired
    private CmsVoteItemService voteItemService;
    @Autowired
    protected LogOperateService logOperateService;
}
