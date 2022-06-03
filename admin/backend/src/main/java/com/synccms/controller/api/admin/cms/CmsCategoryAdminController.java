package com.synccms.controller.api.admin.cms;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.*;
import com.synccms.entities.cms.CmsCategory;
import com.synccms.entities.cms.CmsCategoryAttribute;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.component.template.ModelComponent;
import com.synccms.logic.component.template.TemplateComponent;
import com.synccms.logic.service.cms.*;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.views.pojo.entities.CmsCategoryAttributeData;
import com.synccms.views.pojo.entities.CmsCategoryData;
import com.synccms.views.pojo.entities.CmsModelData;
import com.synccms.views.pojo.query.CmsCategoryQuery;
import freemarker.template.TemplateException;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * CmsCategoryAdminController
 *
 */
@RestController
@RequestMapping("cmsCategory")
public class CmsCategoryAdminController {
    protected final Log log = LogFactory.getLog(getClass());
    @Autowired
    private CmsCategoryService service;

    @Autowired
    private CmsCategoryAttributeService attributeService;

    @Autowired
    private CmsCategoryTypeService typeService;

    @Autowired
    private CmsCategoryModelService categoryModelService;

    @Autowired
    private CmsContentService contentService;


    @Autowired
    private TemplateComponent templateComponent;
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;

    @Autowired
    protected ModelComponent modelComponent;


    /**
     * @param site
     * @param admin
     * @param id
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("list")
    @ResponseBody
    public List<CmsCategoryData> list(@RequestAttribute SysSite site,
                                      @SessionAttribute BaseSysUser admin,
                                      @RequestParam(value = "cateId", required = false) Integer id,
                                      @RequestParam(value = "parentCate", required = false) Boolean parentCate,
                                      HttpServletRequest request,
                                      ModelMap model) {

        Integer parentId = id;
        if(BooleanUtils.isTrue(parentCate))
        {
            CmsCategory cate = service.getEntity(id);
            if(cate != null) {
                parentId = cate.getParentId();
            }
        }
        CmsCategoryQuery query = CmsCategoryQuery.builder()
                .parentId(parentId)
                .disabled(false)
                .queryAll(false)
                .build();
        return service.getPage(query).stream().map(cate -> new CmsCategoryData(
                cate,
                cate.getTypeId() == null ? null : typeService.getEntity(cate.getTypeId()),
                categoryModelService.getList(null, id).stream().map(m -> m.getId().getModelId()).collect(Collectors.toList())
        )).collect(Collectors.toList());
    }

    /**
     * @param site
     * @param admin
     * @param cateId
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("modelList")
    @ResponseBody
    public List<CmsModelData> modelList(@RequestAttribute SysSite site,
                                      @SessionAttribute BaseSysUser admin,
                                      @RequestParam(value = "cateId", required = false) Integer cateId,
                                      HttpServletRequest request,
                                      ModelMap model) {
        return categoryModelService.getList(null, cateId).stream().map(m -> new CmsModelData(modelComponent.getMap(site).get(m.getId().getModelId()) )).collect(Collectors.toList());
    }




    /**
     * @param site
     * @param admin
     * @param id
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("detail")
    @ResponseBody
    public CmsCategoryData detail(@RequestAttribute SysSite site,
                                      @SessionAttribute BaseSysUser admin,
                                      @RequestParam(value = "id", required = false) Integer id,
                                      HttpServletRequest request,
                                      ModelMap model) {
        List<String> modelList = categoryModelService.getList(null, id).stream().map(m -> m.getId().getModelId()).collect(Collectors.toList());

        CmsCategory cate = service.getEntity(id);
        CmsCategoryAttribute attribute = attributeService.getEntity(id);
        return new CmsCategoryData(cate,
                attribute,
                cate.getTypeId() == null ? null : typeService.getEntity(cate.getTypeId()),
                modelList);
    }


    /**
     * @param site
     * @param admin
     * @param cateData
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    @ResponseBody
    public Integer save(@RequestAttribute SysSite site,
                       @SessionAttribute BaseSysUser admin,
                       @RequestBody CmsCategoryData cateData,
                       HttpServletRequest request,
            ModelMap model) {

        CmsCategory entity = cateData.toEntity();

        if (null != entity.getId()) {
            CmsCategory oldEntity = service.getEntity(entity.getId());
            if (null == oldEntity || ControllerUtils.verifyNotEquals("siteId", site.getId(), oldEntity.getSiteId(), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
            }
            entity = service.update(entity.getId(), entity);
            if (null != entity) {
                if (null != oldEntity.getParentId() && !oldEntity.getParentId().equals(entity.getParentId())) {
                    service.generateChildIds(site.getId(), oldEntity.getParentId());
                    service.generateChildIds(site.getId(), entity.getParentId());
                } else if (null != entity.getParentId() && null == oldEntity.getParentId()) {
                    service.generateChildIds(site.getId(), entity.getParentId());
                }
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("update.category")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(JsonUtils.getString(entity))
                        .build()
                );
            }

        } else {
            service.save(site.getId(), entity);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.category")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }
        service.saveModelList(entity.getId(), cateData.getModelList());

        return entity.getId();
    }

    /**
     * @param site
     * @param admin
     * @param attributeData
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("saveAttribute")
    @Csrf
    @ResponseBody
    public Integer saveAttribute(@RequestAttribute SysSite site,
                        @SessionAttribute BaseSysUser admin,
                        @RequestBody CmsCategoryAttributeData attributeData,
                        HttpServletRequest request,
                        ModelMap model) {

        CmsCategoryAttribute entity = attributeData.toEntity();
        CmsCategoryAttribute oldAttribute = attributeService.getEntity(attributeData.getCategoryId());
        if (oldAttribute != null) {
            attributeService.update(entity.getCategoryId(), entity);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("update.categoryAttribute")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        } else {
            attributeService.save(entity);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.categoryAttribute")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }

        return entity.getCategoryId();
    }



    /**
     * @param site
     * @param admin
     * @param ids
     * @param parentId
     * @param request
     * @return view name
     */
    @RequestMapping("move")
    @Csrf
    @ResponseBody
    public int move(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Integer[] ids, Integer parentId,
                    HttpServletRequest request) {
        CmsCategory parent = service.getEntity(parentId);
        if (CommonUtils.notEmpty(ids) && (null == parent || null != parent && site.getId() == parent.getSiteId())) {
            for (Integer id : ids) {
                move(site, id, parentId);
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("move.category")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(new StringBuilder(StringUtils.join(ids, CommonConstants.COMMA)).append(" to ").append(parentId).toString())
                    .build()
            );
            return ids.length;
        }
        return 0;
    }

    /**
     * @param site
     * @param id
     * @param parentId
     */
    private void move(SysSite site, Integer id, Integer parentId) {
        CmsCategory entity = service.getEntity(id);
        if (null != entity && site.getId() == entity.getSiteId()) {
            service.updateParentId(site.getId(), id, parentId);
            service.generateChildIds(site.getId(), entity.getParentId());
            if (null != parentId) {
                service.generateChildIds(site.getId(), parentId);
            }
        }
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param max
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("publish")
    @Csrf
    @ResponseBody
    public int publish(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Integer[] ids, Integer max,
                       HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            try {
                for (Integer id : ids) {
                    publish(site, id, max);
                }
            } catch (IOException | TemplateException e) {
                ControllerUtils.verifyCustom("static", true, model);
                log.error(e.getMessage(), e);
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("static.category")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(new StringBuilder(StringUtils.join(ids, CommonConstants.COMMA)).append(",pageSize:")
                            .append((CommonUtils.empty(max) ? 1 : max)).toString())
                    .build()
            );

            return ids.length;
        }
        return 0;
    }

    /**
     * @param site
     * @param admin
     * @param id
     * @param typeId
     * @param request
     * @return view name
     */
    @RequestMapping("changeType")
    @Csrf
    @ResponseBody
    public boolean changeType(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Integer id, Integer typeId,
                              HttpServletRequest request) {
        if (CommonUtils.notEmpty(id)) {
            service.changeType(id, typeId);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("changeType.category")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(new StringBuilder(id).append(" to ").append(typeId).toString())
                    .build()
            );
        }
        return true;
    }

    /**
     * @param site
     * @param id
     * @param max
     * @throws IOException
     * @throws TemplateException
     */
    private void publish(SysSite site, Integer id, Integer max) throws IOException, TemplateException {
        CmsCategory entity = service.getEntity(id);
        if (null != site && null != entity && site.getId() == entity.getSiteId()) {
            templateComponent.createCategoryFile(site, entity, null, max);
        }
    }

    /**
     * @param site
     * @param request
     * @param code
     * @param id
     * @return view name
     */
    @RequestMapping("verify")
    @ResponseBody
    public boolean verify(@RequestAttribute SysSite site, String code, Integer id) {
        if (CommonUtils.notEmpty(code)) {
            CmsCategory codeCate = service.getEntityByCode(site.getId(), code);
            if(CommonUtils.notEmpty(id)) {
                CmsCategory idCate = service.getEntityByCode(site.getId(), code);
                if(idCate != null && codeCate != null && !StringUtils.equals(idCate.getCode(), codeCate.getCode()))
                {
                    return false;
                }
            }else if(codeCate != null){
                return false;
            }
        }
        return true;
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param request
     * @return view name
     */
    @RequestMapping("delete")
    @Csrf
    @ResponseBody
    public int delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Integer[] ids,
                      HttpServletRequest request) {
        if (CommonUtils.notEmpty(ids)) {
            for (CmsCategory entity : service.delete(site.getId(), ids)) {
                if (entity.isHasStatic()) {
                    String filePath = siteComponent.getWebFilePath(site, entity.getUrl());
                    if (CmsFileUtils.exists(filePath)) {
                        String backupFilePath = siteComponent.getWebBackupFilePath(site, filePath);
                        CmsFileUtils.moveFile(filePath, backupFilePath);
                    }
                }
            }
            contentService.deleteByCategoryIds(site.getId(), ids);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.category")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(StringUtils.join(ids, CommonConstants.COMMA))
                    .build()
            );
            return ids.length;
        }
        return 0;

    }
}
