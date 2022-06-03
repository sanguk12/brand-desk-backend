package com.synccms.controller.api.admin.cms;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.tools.*;
import com.synccms.common.view.ExcelView;
import com.synccms.entities.cms.*;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysDept;
import com.synccms.entities.sys.SysDeptCategoryId;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.component.template.ModelComponent;
import com.synccms.logic.component.template.TemplateComponent;
import com.synccms.logic.service.cms.CmsCategoryModelService;
import com.synccms.logic.service.cms.CmsCategoryService;
import com.synccms.logic.service.cms.CmsContentRelatedService;
import com.synccms.logic.service.cms.CmsContentService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysDeptCategoryService;
import com.synccms.logic.service.sys.SysDeptService;
import com.synccms.logic.service.sys.BaseSysUserService;
import com.synccms.views.pojo.entities.CmsCategoryData;
import com.synccms.views.pojo.entities.CmsContentData;
import com.synccms.views.pojo.entities.CmsModel;
import com.synccms.views.pojo.model.CmsContentDataParameters;
import com.synccms.views.pojo.query.CmsContentQuery;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.text.DateFormat;
import java.util.*;
import java.util.stream.Collectors;

/**
 *
 * CmsContentController
 *
 */
@RestController
@RequestMapping("cmsContent")
public class CmsContentAdminController {
    @Autowired
    private CmsContentService service;
    @Autowired
    private BaseSysUserService sysUserService;
    @Autowired
    private SysDeptCategoryService sysDeptCategoryService;
    @Autowired
    private SysDeptService sysDeptService;
    @Autowired
    private CmsContentRelatedService cmsContentRelatedService;
    @Autowired
    private CmsCategoryModelService categoryModelService;
    @Autowired
    private ModelComponent modelComponent;
    @Autowired
    private CmsCategoryService categoryService;
    @Autowired
    private TemplateComponent templateComponent;
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    @RequestMapping("list")
    @ResponseBody
    public PageHandler list(@RequestAttribute SysSite site,
                            @SessionAttribute BaseSysUser admin,
                            @RequestBody CmsContentQuery query,
                            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
                            @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize,
                            HttpServletRequest request,
                            ModelMap model) {

        PageHandler page = service.getPage(query,
                pageIndex,
                pageSize
        );
        @SuppressWarnings("unchecked")
        List<CmsContent> list = (List<CmsContent>) page.getList();
        page.setList(
                list.stream().map(c -> new CmsContentData(c,
                        new CmsCategoryData(categoryService.getEntity(c.getCategoryId())))
                ).collect(Collectors.toList())
        );


        return page;

    }



    /**
     * 콘텐츠 저장
     *
     * @param site
     * @param admin
     * @param contentParam
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    public String save(@RequestAttribute SysSite site,
                       @SessionAttribute BaseSysUser admin,
                       @RequestBody CmsContentDataParameters contentParam,
                       HttpServletRequest request,
                       ModelMap model) {

        service.adminSave(site,
                admin,
                contentParam,
                RequestUtils.getIpAddress(request),
                model);

        return model.get(CommonConstants.ERROR) != null ? CommonConstants.TEMPLATE_ERROR : CommonConstants.TEMPLATE_DONE;

    }


    /**
     * @param site
     * @param admin
     * @param ids
     * @param request
     * @return view name
     */
    @RequestMapping("check")
    @Csrf
    public String check(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids, HttpServletRequest request) {
        return checkOrUncheck(site, admin, false, ids, request);
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param request
     * @return view name
     */
    @RequestMapping("reject")
    @Csrf
    public String reject(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids,
                         HttpServletRequest request) {
        if (CommonUtils.notEmpty(ids)) {
            service.reject(site.getId(), admin, ids);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("reject.cmsComment")
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
     * @return view name
     */
    @RequestMapping("uncheck")
    @Csrf
    public String uncheck(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids,
                          HttpServletRequest request) {
        return checkOrUncheck(site, admin, true, ids, request);
    }

    private String checkOrUncheck(SysSite site, BaseSysUser admin, boolean uncheck, Long[] ids, HttpServletRequest request) {
        if (CommonUtils.notEmpty(ids)) {
            List<CmsContent> entityList;
            if (uncheck) {
                entityList = service.uncheck(site.getId(), admin, ids);
            } else {
                entityList = service.check(site.getId(), admin, ids);
            }
            Set<Integer> categoryIdSet = new HashSet<>();
            Set<Long> parentIdSet = new HashSet<>();
            for (CmsContent entity : entityList) {
                if (null != entity && site.getId() == entity.getSiteId()) {
                    if (CommonUtils.notEmpty(entity.getParentId())) {
                        parentIdSet.add(entity.getParentId());
                    }
                    publish(site, entity, admin);
                    categoryIdSet.add(entity.getCategoryId());
                }
            }
            for (CmsContent parent : service.getEntitys(parentIdSet.toArray(new Long[parentIdSet.size()]))) {
                publish(site, parent, admin);
            }
            for (CmsCategory category : categoryService.getEntitys(categoryIdSet.toArray(new Integer[categoryIdSet.size()]))) {
                templateComponent.createCategoryFile(site, category, null, null);
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate(uncheck ? "uncheck.content" : "check.content")
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
    @RequestMapping("refresh")
    @Csrf
    public String refresh(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids, HttpServletRequest request,
                          ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            Set<Integer> categoryIdSet = new HashSet<>();
            for (CmsContent entity : service.refresh(site.getId(), admin, ids)) {
                categoryIdSet.add(entity.getCategoryId());
            }
            if (!categoryIdSet.isEmpty()) {
                Integer[] categoryIds = categoryIdSet.toArray(new Integer[categoryIdSet.size()]);
                for (CmsCategory entity : categoryService.getEntitys(categoryIds)) {
                    templateComponent.createCategoryFile(site, entity, null, null);
                }
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("refresh.content")
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
     * @param entity
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("related")
    @Csrf
    public String related(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, CmsContentRelated entity,
                          HttpServletRequest request, ModelMap model) {
        CmsContent content = service.getEntity(entity.getContentId());
        CmsContent related = service.getEntity(entity.getRelatedContentId());
        if (null != content && null != related) {
            if (null == entity || ControllerUtils.verifyNotEquals("siteId", site.getId(), content.getSiteId(), model)
                    || ControllerUtils.verifyNotEquals("siteId", site.getId(), related.getSiteId(), model)
                    || ControllerUtils.verifyCustom("noright",
                            !(admin.isOwnsAllContent() || content.getUserId() == admin.getId()), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            if (CommonUtils.empty(entity.getTitle())) {
                entity.setTitle(entity.getTitle());
            }
            if (CommonUtils.empty(entity.getDescription())) {
                entity.setDescription(entity.getDescription());
            }
            entity.setUserId(admin.getId());
            cmsContentRelatedService.save(entity);
            publish(site, content, admin);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("related.content")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(related))
                    .build()
            );
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
    @RequestMapping("unrelated")
    @Csrf
    public String unrelated(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long id, HttpServletRequest request,
                            ModelMap model) {
        CmsContentRelated entity = cmsContentRelatedService.getEntity(id);
        if (null != entity) {
            if (null == entity || ControllerUtils.verifyCustom("noright",
                    !(admin.isOwnsAllContent() || entity.getUserId() == admin.getId()), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            CmsContent content = service.getEntity(entity.getContentId());
            if (null == content || site.getId() == content.getSiteId()) {
                cmsContentRelatedService.delete(id);
                publish(site, content, admin);
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("unrelated.content")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param categoryId
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("move")
    @Csrf
    public String move(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids, Integer categoryId,
                       HttpServletRequest request, ModelMap model) {
        SysDept dept = sysDeptService.getEntity(admin.getDeptId());
        CmsCategory category = categoryService.getEntity(categoryId);
        if (ControllerUtils.verifyNotEquals("siteId", site.getId(), category.getSiteId(), model)
                || ControllerUtils.verifyNotEmpty("deptId", admin.getDeptId(), model)
                || ControllerUtils.verifyNotEmpty("deptId", dept, model)
                || ControllerUtils.verifyCustom("noright", !(dept.isOwnsAllCategory()
                        || null != sysDeptCategoryService.getEntity(SysDeptCategoryId.builder().deptId (admin.getDeptId()).categoryId(category.getId()).build())),
                        model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        if (CommonUtils.notEmpty(ids) && null != category && site.getId() == category.getSiteId()) {
            StringBuilder sb = new StringBuilder();
            Set<Integer> categoryIdSet = new HashSet<>();
            for (CmsContent entity : service.getEntitys(ids)) {
                if (null != entity && entity.getCategoryId() != categoryId && site.getId() == entity.getSiteId()
                        && null == entity.getParentId() && (admin.isOwnsAllContent() || entity.getUserId() == admin.getId())
                        && move(site, entity, categoryId)) {
                    categoryIdSet.add(entity.getCategoryId());
                } else {
                    sb.append(entity.getId()).append(CommonConstants.COMMA_DELIMITED);
                }
            }
            if (!categoryIdSet.isEmpty()) {
                categoryIdSet.add(categoryId);
                Integer[] categoryIds = categoryIdSet.toArray(new Integer[categoryIdSet.size()]);
                for (CmsCategory entity : categoryService.getEntitys(categoryIds)) {
                    templateComponent.createCategoryFile(site, entity, null, null);
                }
            }
            if (sb.length() > 0) {
                sb.setLength(sb.length() - 1);
                model.addAttribute("message", LanguagesUtils.getMessage(CommonConstants.applicationContext,
                        RequestContextUtils.getLocale(request), "message.content_move_fail", sb.toString()));
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("move.content")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(new StringBuilder(StringUtils.join(ids, CommonConstants.COMMA)).append(" to ").append(category.getId())
                            .append(":").append(category.getName()).toString())
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param entity
     * @param categoryId
     */
    private boolean move(SysSite site, CmsContent entity, Integer categoryId) {
        CmsCategoryModel categoryModel = categoryModelService.getEntity(CmsCategoryModelId.builder().categoryId(categoryId).modelId(entity.getModelId()).build());
        if (null != categoryModel) {
            entity = service.updateCategoryId(entity.getSiteId(), entity.getId(), categoryId);
            service.createContentFile(site, entity, null, categoryModel);
            return true;
        }
        return false;
    }

    /**
     * @param site
     * @param admin
     * @param id
     * @param modelId
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("changeModel")
    @Csrf
    public String changeModel(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long id, String modelId,
                              HttpServletRequest request, ModelMap model) {
        SysDept dept = sysDeptService.getEntity(admin.getDeptId());
        CmsContent content = service.getEntity(id);
        if (null != content && CommonUtils.notEmpty(modelId)) {
            if (ControllerUtils.verifyNotEmpty("deptId", admin.getDeptId(), model)
                    || ControllerUtils.verifyNotEmpty("deptId", dept, model)
                    || ControllerUtils.verifyCustom("noright",
                            !(dept.isOwnsAllCategory() || null != sysDeptCategoryService
                                    .getEntity(SysDeptCategoryId.builder().deptId(admin.getDeptId()).categoryId(content.getCategoryId()).build())),
                            model)
                    || ControllerUtils.verifyCustom("noright",
                            !(admin.isOwnsAllContent() || content.getUserId() == admin.getId()), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            service.changeModel(id, modelId);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("changeModel.content")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(new StringBuilder().append(id).append(" to ").append(modelId).toString())
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param id
     * @param sort
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("sort")
    @Csrf
    public String sort(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            Long id, int sort,
            HttpServletRequest request,
            ModelMap model
    ) {
        SysDept dept = sysDeptService.getEntity(admin.getDeptId());
        CmsContent content = service.getEntity(id);
        if (null != content) {
            if (ControllerUtils.verifyNotEmpty("deptId", admin.getDeptId(), model)
                    || ControllerUtils.verifyNotEmpty("deptId", dept, model)
                    || ControllerUtils.verifyCustom("noright",
                            !(dept.isOwnsAllCategory() || null != sysDeptCategoryService
                                    .getEntity(SysDeptCategoryId.builder().deptId(admin.getDeptId()).categoryId(content.getCategoryId()).build())),
                            model)
                    || ControllerUtils.verifyCustom("noright",
                            !(admin.isOwnsAllContent() || content.getUserId() == admin.getId()), model)) {
                return CommonConstants.TEMPLATE_ERROR;
            }
            CmsContent entity = service.sort(site.getId(), id, sort);
            CmsCategory category = categoryService.getEntity(entity.getCategoryId());
            if (null != category) {
                templateComponent.createCategoryFile(site, category, null, null);
            }
            logOperateService
                    .save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("sort.content")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(new StringBuilder().append(entity.getId())
                                    .append(":").append(entity.getTitle()).append(" to ").append(sort).toString())
                            .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }



    /**
     * @param site
     * @param admin
     * @param ids
     * @param sorts
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("sortAll")
    @Csrf
    public String sortAll(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            Long[] ids, int[] sorts,
            HttpServletRequest request,
            ModelMap model
    ) {
        SysDept dept = sysDeptService.getEntity(admin.getDeptId());
        for(int i = 0; i < ids.length; i++)
        {
            Long id = ids[i];
            int sort = sorts[i];
            CmsContent content = service.getEntity(id);
            if (null != content) {
                if (ControllerUtils.verifyNotEmpty("deptId", admin.getDeptId(), model)
                        || ControllerUtils.verifyNotEmpty("deptId", dept, model)
                        || ControllerUtils.verifyCustom("noright",
                        !(dept.isOwnsAllCategory() || null != sysDeptCategoryService
                                .getEntity(SysDeptCategoryId.builder().deptId(admin.getDeptId()).categoryId(content.getCategoryId()).build())),
                        model)
                        || ControllerUtils.verifyCustom("noright",
                        !(admin.isOwnsAllContent() || content.getUserId() == admin.getId()), model)) {
                    return CommonConstants.TEMPLATE_ERROR;
                }
                CmsContent entity = service.sort(site.getId(), id, sort);
                CmsCategory category = categoryService.getEntity(entity.getCategoryId());
                if (null != category) {
                    templateComponent.createCategoryFile(site, category, null, null);
                }
                logOperateService
                        .save(LogOperate.builder()
                                .siteId(site.getId())
                                .userId(admin.getId())
                                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                                .operate("sort.content")
                                .ip(RequestUtils.getIpAddress(request))
                                .createDate(CommonUtils.getDate())
                                .content(new StringBuilder().append(entity.getId())
                                        .append(":").append(entity.getTitle()).append(" to ").append(sort).toString())
                                .build()
                        );
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
    @RequestMapping("publish")
    @Csrf
    public String publish(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            Long[] ids,
            HttpServletRequest request,
            ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            for (CmsContent entity : service.getEntitys(ids)) {
                if (!publish(site, entity, admin)) {
                    ControllerUtils.verifyCustom("static", true, model);
                    return CommonConstants.TEMPLATE_ERROR;
                }
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("static.content")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(StringUtils.join(ids, CommonConstants.COMMA))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    private boolean publish(SysSite site, CmsContent entity, BaseSysUser admin) {
        CmsCategoryModel categoryModel = categoryModelService
                .getEntity(CmsCategoryModelId.builder().categoryId(entity.getCategoryId()).modelId(entity.getModelId()).build());
        if (null != categoryModel && (admin.isOwnsAllContent() || entity.getUserId() == admin.getId())
                && (!entity.isOnlyUrl() || null != entity.getQuoteContentId())) {
            return service.createContentFile(site, entity, null, categoryModel);
        }
        return false;
    }

    /**
     * @param site
     * @param queryEntity
     * @param orderField
     * @param orderType
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("export")
    @Csrf
    public ExcelView export(@RequestAttribute SysSite site, CmsContentQuery queryEntity, String orderField, String orderType,
            HttpServletRequest request, ModelMap model) {
        queryEntity.setSiteId(site.getId());
        queryEntity.setDisabled(false);
        queryEntity.setEmptyParent(true);
        queryEntity.setOrderField(StringUtils.isEmpty(orderField) ? null : new String[]{orderField});
        queryEntity.setOrderType(StringUtils.isEmpty(orderType) ? null : new String[] {orderType});
        LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
        PageHandler page = service.getPage(queryEntity, 1, PageHandler.MAX_PAGE_SIZE);
        @SuppressWarnings("unchecked")
        List<CmsContent> entityList = (List<CmsContent>) page.getList();
        Map<String, List<Serializable>> pksMap = new HashMap<>();
        for (CmsContent entity : entityList) {
            List<Serializable> userIds = pksMap.get("userIds");
            if (null == userIds) {
                userIds = new ArrayList<>();
                pksMap.put("userIds", userIds);
            }
            userIds.add(entity.getUserId());
            userIds.add(entity.getCheckUserId());
            List<Serializable> categoryIds = pksMap.get("categoryIds");
            if (null == categoryIds) {
                categoryIds = new ArrayList<>();
                pksMap.put("categoryIds", categoryIds);
            }
            categoryIds.add(entity.getCategoryId());
            List<Serializable> modelIds = pksMap.get("modelIds");
            if (null == modelIds) {
                modelIds = new ArrayList<>();
                pksMap.put("modelIds", modelIds);
            }
            modelIds.add(entity.getModelId());
        }
        Map<Long, BaseSysUser> userMap = new HashMap<>();
        if (null != pksMap.get("userIds")) {
            List<Serializable> userIds = pksMap.get("userIds");
            List<BaseSysUser> entitys = sysUserService.getEntitys(userIds.toArray(new Serializable[userIds.size()]));
            for (BaseSysUser entity : entitys) {
                userMap.put(entity.getId(), entity);
            }
        }
        Map<Integer, CmsCategory> categoryMap = new HashMap<>();
        if (null != pksMap.get("categoryIds")) {
            List<Serializable> categoryIds = pksMap.get("categoryIds");
            List<CmsCategory> entitys = categoryService.getEntitys(categoryIds.toArray(new Serializable[categoryIds.size()]));
            for (CmsCategory entity : entitys) {
                categoryMap.put(entity.getId(), entity);
            }
        }

        Map<String, CmsModel> modelMap = modelComponent.getMap(site);
        DateFormat dateFormat = DateFormatUtils.getDateFormat(DateFormatUtils.FULL_DATE_FORMAT_STRING);

        ExcelView view = new ExcelView(workbook -> {
            Sheet sheet = workbook.createSheet(
                    LanguagesUtils.getMessage(CommonConstants.applicationContext, request.getLocale(), "page.content"));
            int i = 0, j = 0;
            Row row = sheet.createRow(i++);

            Locale locale = request.getLocale();
            if (null != localeResolver) {
                locale = localeResolver.resolveLocale(request);
            }
            row.createCell(j++).setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.id"));
            row.createCell(j++).setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.title"));
            row.createCell(j++).setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.url"));
            row.createCell(j++).setCellValue(
                    LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.content.publisher"));
            row.createCell(j++)
                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.category"));
            row.createCell(j++).setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.model"));
            row.createCell(j++)
                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.content.score"));
            row.createCell(j++)
                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.content.comments"));
            row.createCell(j++)
                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.clicks"));
            row.createCell(j++)
                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.publish_date"));
            row.createCell(j++)
                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.create_date"));
            row.createCell(j++).setCellValue(
                    LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.content.top_level"));
            row.createCell(j++)
                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.status"));
            row.createCell(j++)
                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.inspector"));

            BaseSysUser user;
            CmsCategory category;
            CmsModel cmsModel;
            for (CmsContent entity : entityList) {
                row = sheet.createRow(i++);
                j = 0;
                row.createCell(j++).setCellValue(entity.getId().toString());
                row.createCell(j++).setCellValue(entity.getTitle());
                row.createCell(j++).setCellValue(entity.getUrl());
                user = userMap.get(entity.getUserId());
                row.createCell(j++).setCellValue(null == user ? null : user.getNickname());
                category = categoryMap.get(entity.getCategoryId());
                row.createCell(j++).setCellValue(null == category ? null : category.getName());
                cmsModel = modelMap.get(entity.getModelId());
                row.createCell(j++).setCellValue(null == cmsModel ? null : cmsModel.getName());
                row.createCell(j++).setCellValue(String.valueOf(entity.getScores()));
                row.createCell(j++).setCellValue(String.valueOf(entity.getComments()));
                row.createCell(j++).setCellValue(String.valueOf(entity.getClicks()));
                row.createCell(j++).setCellValue(dateFormat.format(entity.getPublishDate()));
                row.createCell(j++).setCellValue(dateFormat.format(entity.getCreateDate()));
                row.createCell(j++).setCellValue(String.valueOf(entity.getSort()));
                row.createCell(j++).setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale,
                        "page.status.content." + entity.getStatus()));
                user = userMap.get(entity.getCheckUserId());
                row.createCell(j++).setCellValue(null == user ? null : user.getNickname());
            }
        });
        return view;
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("delete")
    @Csrf
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids, HttpServletRequest request,
                         ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            Set<Integer> categoryIdSet = new HashSet<>();
            for (CmsContent entity : service.delete(site.getId(), admin, ids)) {
                categoryIdSet.add(entity.getCategoryId());
                if (entity.isHasStatic()) {
                    String filePath = siteComponent.getWebFilePath(site, entity.getUrl());
                    if (CmsFileUtils.exists(filePath)) {
                        String backupFilePath = siteComponent.getWebBackupFilePath(site, filePath);
                        CmsFileUtils.moveFile(filePath, backupFilePath);
                    }
                }
            }
            if (!categoryIdSet.isEmpty()) {
                Integer[] categoryIds = categoryIdSet.toArray(new Integer[categoryIdSet.size()]);
                for (CmsCategory entity : categoryService.getEntitys(categoryIds)) {
                    templateComponent.createCategoryFile(site, entity, null, null);
                }
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.content")
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
     * @return view name
     */
    @RequestMapping("recycle")
    @Csrf
    public String recycle(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids,
                          HttpServletRequest request) {
        if (CommonUtils.notEmpty(ids)) {
            Set<Integer> categoryIdSet = new HashSet<>();
            for (CmsContent entity : service.recycle(site.getId(), ids)) {
                categoryIdSet.add(entity.getCategoryId());
                service.createContentFile(site, entity, null, null);
            }
            if (!categoryIdSet.isEmpty()) {
                Integer[] categoryIds = categoryIdSet.toArray(new Integer[categoryIdSet.size()]);
                for (CmsCategory entity : categoryService.getEntitys(categoryIds)) {
                    templateComponent.createCategoryFile(site, entity, null, null);
                }
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("recycle.content")
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
     * @return view name
     */
    @RequestMapping("realDelete")
    @Csrf
    public String realDelete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids,
                             HttpServletRequest request) {
        if (CommonUtils.notEmpty(ids)) {
            service.realDelete(site.getId(), ids);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("realDelete.content")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(StringUtils.join(ids, CommonConstants.COMMA))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

}
