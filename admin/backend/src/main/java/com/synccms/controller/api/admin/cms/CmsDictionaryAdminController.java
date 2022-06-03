package com.synccms.controller.api.admin.cms;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.JsonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.cms.CmsCategory;
import com.synccms.entities.cms.CmsDictionary;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.cms.CmsDictionaryItemService;
import com.synccms.logic.service.cms.CmsDictionaryService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.views.pojo.entities.CmsCategoryData;
import com.synccms.views.pojo.entities.CmsDictionaryData;
import com.synccms.views.pojo.query.CmsCategoryQuery;
import com.synccms.views.pojo.query.CmsDictionaryQuery;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * CmsDictionaryAdminController
 *
 */
@RestController
@RequestMapping("cmsDictionary")
public class CmsDictionaryAdminController {
    @Autowired protected LogOperateService logOperateService;
    @Autowired protected SiteComponent siteComponent;
    @Autowired private CmsDictionaryService service;
    @Autowired private CmsDictionaryItemService dataService;

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
                            @RequestParam(value = "parentId", required = false) Integer id,
                            @RequestParam(value = "parent", required = false) Boolean parent,
                            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
                            @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize,
                            HttpServletRequest request,
                            ModelMap model) {
        Integer parentId = id;
        if(BooleanUtils.isTrue(parent))
        {
            CmsDictionary dict = service.getEntity(id);
            if(dict != null) {
                parentId = dict.getParentId();
            }
        }
        CmsDictionaryQuery query = CmsDictionaryQuery.builder()
                .parentId(parentId)
                .queryAll(false)
                .build();
        PageHandler handler = service.getPage(query, pageIndex, pageSize);
        List<CmsDictionary> list = (List<CmsDictionary>)handler.getList();

        handler.setList(list.stream().map(d -> new CmsDictionaryData(d)).collect(Collectors.toList()));

        return handler;
    }

    /**
     * @param site
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("detail")
    @ResponseBody
    public CmsDictionaryData detail(@RequestAttribute SysSite site,
                            @SessionAttribute BaseSysUser admin,
                            @RequestParam(value = "id", required = false) Integer id,
                            HttpServletRequest request,
                            ModelMap model) {
        CmsDictionary entity = service.getEntity(id);

        return new CmsDictionaryData(entity, dataService.getList(site.getId(), entity.getId()), null);
    }

    @RequestMapping("child")
    @ResponseBody
    public CmsDictionaryData child(@RequestAttribute SysSite site,
                                    @SessionAttribute BaseSysUser admin,
                                    @RequestParam(value = "parentId", required = false) Integer parentId,
                                   @RequestParam(value = "parentData", required = false) Long parentData,
                                    HttpServletRequest request,
                                    ModelMap model) {
        CmsDictionary entity = service.getDictionaryByParent(parentId,parentData, site.getId());
        return entity == null ? null : new CmsDictionaryData(entity, dataService.getList(site.getId(), entity.getId()), null);
    }


    /**
     * @param site
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("tree")
    @ResponseBody
    public List<CmsDictionaryData> tree(@RequestAttribute SysSite site,
                                        @SessionAttribute BaseSysUser admin,
                                        HttpServletRequest request,
                                        ModelMap model) {
        return service.getTree(site.getId());
    }

    /**
     * @param site
     * @param admin
     * @param data

     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    public AjaxResponse save(
            @RequestAttribute SysSite site,
            @SessionAttribute BaseSysUser admin,
            @RequestBody CmsDictionaryData data,
            HttpServletRequest request,
            ModelMap model) {
        CmsDictionary entity = data.toEntity();
        entity.setSiteId(site.getId());
        if (null != entity && null != entity.getId()) {
            entity = service.update(entity.getId(), entity);
            dataService.update(site.getId(), entity.getId(), data.toItemListEntity());
            logOperateService.save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("update.cmsDictionary")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(JsonUtils.getString(entity))
                            .build()
            );
        } else {
            service.save(entity);
            dataService.save(site.getId(), entity.getId(), data.toItemListEntity());
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("save.cmsDictionary")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(JsonUtils.getString(entity))
                    .build()
            );
        }

        return AjaxResponse.success(entity.getId());
    }


    /**
     * @param site
     * @param code
     * @return view name
     */
    @RequestMapping("verify")
    @ResponseBody
    public boolean verify(@RequestAttribute SysSite site, String code, Integer id) {
        if (CommonUtils.notEmpty(code)) {
            CmsDictionary dictionary = service.getByCode(site.getId(), code);
            if(CommonUtils.notEmpty(id)) {
                CmsDictionary oldCate = service.getEntity(id);
                if(oldCate != null && dictionary != null && !StringUtils.equals(oldCate.getCode(), dictionary.getCode()))
                {
                    return false;
                }
            }else if(dictionary != null){
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
     * @param model
     * @return view name
     */
    @RequestMapping("delete")
    @Csrf
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Integer[] ids,
                         HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            service.delete(ids);
            dataService.delete(site.getId(), ids);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.cmsDictionary")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(StringUtils.join(ids, CommonConstants.COMMA))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

}
