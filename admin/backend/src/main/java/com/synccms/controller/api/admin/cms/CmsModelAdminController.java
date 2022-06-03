package com.synccms.controller.api.admin.cms;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.ControllerUtils;
import com.synccms.common.tools.JsonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.component.template.ModelComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.views.pojo.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 *
 * CmsModelController
 *
 */
@RestController
@RequestMapping("cmsModel")
public class CmsModelAdminController {
    @Autowired
    private ModelComponent modelComponent;
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    /**
     * @param site
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("list")
    @ResponseBody
    public List<CmsModelData> list(@RequestAttribute SysSite site,
                                   @SessionAttribute BaseSysUser admin,
                                   HttpServletRequest request,
                                   ModelMap model) {
        return modelComponent.getList(site, null, null, null, null, null).stream().map(m -> new CmsModelData(m)).collect(Collectors.toList());
    }


    /**
     * @param site
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("tree")
    @ResponseBody
    public List<CmsModelData> tree(@RequestAttribute SysSite site,
                                   @SessionAttribute BaseSysUser admin,
                                   HttpServletRequest request,
                                   ModelMap model) {
        return modelComponent.getTree(site);
    }


    /**
     * @param site
     * @param admin
     * @param entityData
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    public String save(@RequestAttribute SysSite site,
                       @SessionAttribute BaseSysUser admin,
                       @RequestBody CmsModelData entityData,
                       @RequestParam String modelId,
                       HttpServletRequest request, ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", null != site.getParentId(), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        modelComponent.clear(site.getId());

        CmsModel entity = entityData.toEntity();
        if (!(CommonUtils.notEmpty(entity.getFieldList()) && entity.getFieldList().contains("content"))) {
            entity.setSearchable(false);
        }
        if (CommonUtils.notEmpty(entity.getExtendList())) {
            entity.getExtendList().sort((e1, e2) -> e1.getSort() - e2.getSort());
        }
        if (CommonUtils.notEmpty(modelId)) {
            Map<String, CmsModel> modelMap = modelComponent.getMap(site);
            modelMap.remove(modelId);
            modelMap.put(entity.getId(), entity);
            List<CmsModel> modelList = modelComponent.getList(site, modelId, null, null, null, null);
            for (CmsModel m : modelList) {
                m.setParentId(entity.getId());
                modelMap.put(m.getId(), m);
            }
            modelComponent.save(site, entity, modelId);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("update.model")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        } else {
            Map<String, CmsModel> modelMap = modelComponent.getMap(site);
            modelMap.put(entity.getId(), entity);
            modelComponent.save(site, entity, null);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.model")
                    .ip(RequestUtils.getIpAddress(request))
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
     * @return view name
     */
    @RequestMapping("{id}")
    @ResponseBody
    public CmsModelData get(@RequestAttribute SysSite site,
                                   @SessionAttribute BaseSysUser admin,
                                   @PathVariable(value = "id") String id) {
        CmsModel model = modelComponent.getMap(site).get(id);
        return new CmsModelData(model);
    }

    /**
     * @param site
     * @param admin
     * @param id
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("delete")
    @Csrf
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String id, HttpServletRequest request,
                         ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", null != site.getParentId(), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        Map<String, CmsModel> modelMap = modelComponent.getMap(site);
        CmsModel entity = modelMap.remove(id);
        if (null != entity) {
            List<CmsModel> modelList = modelComponent.getList(site, entity.getId(), null, null, null, null);
            for (CmsModel m : modelList) {
                m.setParentId(null);
                modelMap.put(m.getId(), m);
            }
            modelComponent.save(site, null, id);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.model")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }
}
