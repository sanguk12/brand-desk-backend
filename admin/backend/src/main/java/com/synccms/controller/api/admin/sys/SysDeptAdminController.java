package com.synccms.controller.api.admin.sys;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.base.BaseService;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.common.tools.*;
import com.synccms.entities.cms.CmsCategory;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.*;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.cms.CmsCategoryService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.*;
import com.synccms.views.pojo.entities.CmsCategoryData;
import com.synccms.views.pojo.entities.SysDeptData;
import com.synccms.views.pojo.model.DeptCateParameters;
import com.synccms.views.pojo.query.CmsCategoryQuery;
import com.synccms.views.pojo.query.SysDeptQuery;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * SysDeptAdminController
 *
 */
@RestController
@RequestMapping("sysDept")
public class SysDeptAdminController {

    @Autowired
    private SysDeptService service;
    @Autowired
    private BaseSysUserService userService;
    @Autowired
    private SysRoleUserService roleUserService;
    @Autowired
    private SysDeptCategoryService sysDeptCategoryService;
    @Autowired
    private SysDeptPageService sysDeptPageService;
    @Autowired
    private SysDeptConfigService sysDeptConfigService;
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    @Autowired
    private CmsCategoryService categoryService;
    private String[] ignoreProperties = ArrayUtils.addAll(new String[] { "id", "siteId" }, BaseService.ignoreProperties);

    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("list")
    @ResponseBody
    public PageHandler list(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize,
            HttpServletRequest request,
            ModelMap model) {
        SysDeptQuery query = SysDeptQuery.builder().siteId(site.getId()).build();
        PageHandler page = service.getPage(query, pageIndex, pageSize);
        List<SysDept> deptList =  (List<SysDept>)page.getList();

        List<SysDeptData> deptDataList = deptList.stream().map(r -> new SysDeptData(r, null)).collect(Collectors.toList());
        page.setList(deptDataList);

        return page;
    }

    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("tree")
    @ResponseBody
    public List<SysDeptData> tree(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            HttpServletRequest request,
            ModelMap model) {
        return service.getTree(site.getId(), null);
    }


    /**
     * @param site
     * @param admin
     * @param entity
     * @param categoryIds
     * @param pages
     * @param configs
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    @ResponseBody
    public AjaxResponse save(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestBody SysDept entity,
            @RequestParam(value = "categoryIds[]", required = false) Integer[] categoryIds,
            @RequestParam(value = "pages[]", required = false) String[] pages,
            @RequestParam(value = "configs[]", required = false) String[] configs,
            HttpServletRequest request,
            ModelMap model) {
        if (null != entity.getId()) {
            SysDept oldEntity = service.getEntity(entity.getId());
            if (null == oldEntity || ControllerUtils.verifyNotEquals("siteId", site.getId(), oldEntity.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            entity = service.update(entity.getId(), entity, ignoreProperties);
            if (null != entity) {
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("update.dept")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }
            sysDeptCategoryService.updateDeptCategories(entity.getId(), categoryIds);
            sysDeptPageService.updateDeptPages(entity.getId(), pages);
            sysDeptConfigService.updateDeptConfigs(entity.getId(), configs);
        } else {
            entity.setSiteId(site.getId());
            service.save(entity);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.dept")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
            if (CommonUtils.notEmpty(categoryIds)) {
                List<SysDeptCategory> list = new ArrayList<>();
                for (int categoryId : categoryIds) {
                    list.add(SysDeptCategory.builder().id(SysDeptCategoryId.builder().deptId(entity.getId()).categoryId(categoryId).build()).build());
                }
                sysDeptCategoryService.save(list);
            }
            if (CommonUtils.notEmpty(pages)) {
                List<SysDeptPage> list = new ArrayList<>();
                for (String page : pages) {
                    list.add(SysDeptPage.builder().id(SysDeptPageId.builder().deptId(entity.getId()).page(page).build()).build());
                }
                sysDeptPageService.save(list);
            }
            if (CommonUtils.notEmpty(configs)) {
                List<SysDeptConfig> list = new ArrayList<>();
                for (String config : configs) {
                    list.add(SysDeptConfig.builder().id(SysDeptConfigId.builder().deptId(entity.getId()).config(config).build()).build());
                }
                sysDeptConfigService.save(list);
            }
        }
        return AjaxResponse.success(entity);
    }


    /**
     * @param site
     * @param admin
     * @param deptCateParam
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("saveCategory")
    @Csrf
    @ResponseBody
    public AjaxResponse saveCategory(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestBody DeptCateParameters deptCateParam,
            HttpServletRequest request,
            ModelMap model) {
        if (null != deptCateParam.getDeptId()) {
            SysDept dept = service.getEntity(deptCateParam.getDeptId());
            if (null == dept || ControllerUtils.verifyNotEquals("siteId", site.getId(), dept.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            sysDeptCategoryService.updateDeptCategories(site.getId(), deptCateParam.getDeptId(), deptCateParam.getCateList());
        }

        return AjaxResponse.success();
    }


    /**
     * @param site
     * @param admin
     * @param ownsAllCategory
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("saveOwnAllCategory")
    @Csrf
    @ResponseBody
    public AjaxResponse saveOwnAllCategory(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestParam("deptId") Integer deptId,
            @RequestParam("ownsAllCategory") Boolean ownsAllCategory,
            HttpServletRequest request,
            ModelMap model) {
        if (null != deptId) {
            SysDept dept = service.getEntity(deptId);
            if (null == dept || ControllerUtils.verifyNotEquals("siteId", site.getId(), dept.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                return AjaxResponse.fail(message);
            }
            dept.setOwnsAllCategory(ownsAllCategory);
            service.update(dept.getId(), dept);
        }

        return AjaxResponse.success();
    }

    /**
     * @param site
     * @param admin
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("categoryList")
    @Csrf
    @ResponseBody
    public List<CmsCategoryData> categoryList(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestParam(value = "deptId") Integer deptId,
            @RequestParam(value = "cateId", required = false) Integer cateId,
            @RequestParam(value = "parentCate", required = false) Boolean parentCate,
            HttpServletRequest request,
            ModelMap model) {
        if(BooleanUtils.isTrue(parentCate) && cateId != null)
        {
            CmsCategory cate = categoryService.getEntity(cateId);
            if(cate != null)
            {
                cateId = cate.getParentId();
            }
        }
        CmsCategoryQuery query = CmsCategoryQuery.builder()
                .parentId(cateId)
                .disabled(false)
                .queryAll(false)
                .build();
        List<CmsCategory> cateList = categoryService.getPage(query);
        List<Integer> cateIdList = cateList.stream().map(c -> c.getId()).collect(Collectors.toList());
        List<SysDeptCategory> deptCateIdList = sysDeptCategoryService.list(deptId, cateIdList);

        return cateList.stream().map(cate -> new CmsCategoryData(
                cate, deptCateIdList.stream().filter(c -> c.getId().getCategoryId() == cate.getId()).findFirst().orElse(null))
        ).collect(Collectors.toList());
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
    @ResponseBody
    public AjaxResponse delete(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestParam Integer id,
            HttpServletRequest request,
            ModelMap model) {
        SysDept entity = service.delete(site.getId(), id);
        if (null != entity) {
            sysDeptCategoryService.delete(entity.getId(), null);
            sysDeptPageService.delete(entity.getId(), null);
            sysDeptConfigService.delete(entity.getId(), null);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.dept")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        return AjaxResponse.success(id);
    }

}
