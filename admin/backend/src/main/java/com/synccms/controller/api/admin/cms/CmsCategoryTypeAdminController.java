package com.synccms.controller.api.admin.cms;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.ControllerUtils;
import com.synccms.common.tools.JsonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.cms.CmsCategoryType;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysExtend;
import com.synccms.entities.sys.SysExtendField;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.cms.CmsCategoryService;
import com.synccms.logic.service.cms.CmsCategoryTypeService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysExtendFieldService;
import com.synccms.logic.service.sys.SysExtendService;
import com.synccms.views.pojo.entities.CmsCategoryTypeData;
import com.synccms.views.pojo.entities.SysExtendData;
import com.synccms.views.pojo.query.CmsCategoryQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * CmsCategoryTypeController
 *
 */
@RestController
@RequestMapping("cmsCategoryType")
public class CmsCategoryTypeAdminController {
    @Autowired
    private CmsCategoryTypeService service;
    @Autowired
    private CmsCategoryService categoryService;
    @Autowired
    private SysExtendService extendService;
    @Autowired
    private SysExtendFieldService extendFieldService;
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
    public PageHandler list(@RequestAttribute SysSite site,
                                          @SessionAttribute BaseSysUser admin,
                                          @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
                                          @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize,
                                          HttpServletRequest request,
                                          ModelMap model) {
        PageHandler handler = service.getPage(site.getId(), pageIndex, pageSize);
        List<CmsCategoryType> list = (List<CmsCategoryType>)handler.getList();
        list.stream().map(ct -> new CmsCategoryTypeData(ct)).collect(Collectors.toList());

        handler.setList(list);

        return handler;
    }


    /**
     * @param site
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("{id}")
    @ResponseBody
    public CmsCategoryTypeData get(@RequestAttribute SysSite site,
                            @SessionAttribute BaseSysUser admin,
                            @PathVariable(value = "id") Integer id,
                            HttpServletRequest request,
                            ModelMap model) {
        CmsCategoryType categoryType  = service.getEntity(id);

        SysExtend extend = extendService.getEntity(categoryType.getExtendId());
        List<SysExtendField> fieldList = extendFieldService.getList(categoryType.getExtendId());

        return new CmsCategoryTypeData(categoryType, new SysExtendData(extend, fieldList));
    }

    /**
     * @param site
     * @param admin
     * @param entityData
     * @param request
     * @param session
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    public String save(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestBody CmsCategoryTypeData entityData,
            HttpServletRequest request, HttpSession session,
            ModelMap model) {
        CmsCategoryType entity = entityData.toEntity();
        if (null != entity.getId()) {
            CmsCategoryType oldEntity = service.getEntity(entity.getId());
            if (null == oldEntity || ControllerUtils.verifyNotEquals("siteId", site.getId(), oldEntity.getSiteId(), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            entity = service.update(entity.getId(), entity);
            if (null != entity) {
                logOperateService.save(
                        LogOperate.builder()
                                .siteId(site.getId())
                                .userId(admin.getId())
                                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                                .operate("update.categoryType")
                                .ip(RequestUtils.getIpAddress(request))
                                .createDate(CommonUtils.getDate())
                                .content(JsonUtils.getString(entity))
                                .build()
                );
            }
        } else {
            entity.setSiteId(site.getId());
            service.save(entity);
            logOperateService.save(
                    LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("save.categoryType")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(JsonUtils.getString(entity))
                            .build()
            );
        }
        if (CommonUtils.notEmpty(entityData.getExtend().getFieldList()) || CommonUtils.notEmpty(entityData.getExtendId())) {
            if (null == extendService.getEntity(entity.getExtendId())) {
                entity = service.updateExtendId(entity.getId(), (Integer) extendService.save(SysExtend.builder().itemType("categoryType").itemId(entity.getId()).build()));
            }
            extendFieldService.update(entity.getExtendId(), entityData.getExtend().toFieldEntityList());// 카테고리 유형 확장 필드 수정 또는 추가
        }
        return CommonConstants.TEMPLATE_DONE;
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
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Integer id, HttpServletRequest request,
                         ModelMap model) {
        CmsCategoryType entity = service.getEntity(id);
        if (null != entity) {
            if (ControllerUtils.verifyNotEquals("siteId", site.getId(), entity.getSiteId(), model)
                    || ControllerUtils.verifyNotGreaterThen("category",
                            categoryService
                                    .getPage(
                                            CmsCategoryQuery.builder()
                                                    .siteId(site.getId())
                                                    .queryAll(true)
                                                    .typeId(id)
                                                    .disabled(false)
                                                    .build(),
                                            null,
                                            null)
                                    .getTotalCount(),
                            1, model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            service.delete(id);
            extendService.delete(entity.getExtendId());
            logOperateService.save(
                    LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("delete.categoryType")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(id.toString())
                            .build()
            );

        }
        return CommonConstants.TEMPLATE_DONE;
    }
}
