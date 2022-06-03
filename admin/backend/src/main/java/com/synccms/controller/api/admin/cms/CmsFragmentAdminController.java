package com.synccms.controller.api.admin.cms;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.*;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.cache.CacheComponent;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.component.template.MetadataComponent;
import com.synccms.logic.component.template.TemplateCacheComponent;
import com.synccms.logic.component.template.TemplateComponent;
import com.synccms.logic.service.cms.CmsPlaceService;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.sys.SysDeptPageService;
import com.synccms.views.pojo.entities.CmsPlaceMetadata;
import freemarker.template.TemplateException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 *
 * CmsFragmentAdminController
 *
 */
@RestController
@RequestMapping("cmsFragment")
public class CmsFragmentAdminController {
    protected final Log log = LogFactory.getLog(getClass());
    @Autowired
    private TemplateComponent templateComponent;
    @Autowired
    private TemplateCacheComponent templateCacheComponent;
    @Autowired
    private CacheComponent cacheComponent;
    @Autowired
    private MetadataComponent metadataComponent;
    @Autowired
    private CmsPlaceService cmsPlaceService;
    @Autowired
    private SysDeptPageService sysDeptPageService;
    @Autowired
    protected LogOperateService logOperateService;
    @Autowired
    protected SiteComponent siteComponent;


    /**
     * @param site
     * @param admin
     * @param path
     * @param content
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("save")
    @Csrf
    @ResponseBody
    public String savePlace(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path, String content,
                            HttpServletRequest request, ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", null != site.getParentId(), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        if (CommonUtils.notEmpty(path)) {
            try {
                String filePath = siteComponent.getWebTemplateFilePath(site, TemplateComponent.INCLUDE_DIRECTORY + path);
                content = new String(VerificationUtils.base64Decode(content), CommonConstants.DEFAULT_CHARSET);
                if (CmsFileUtils.createFile(filePath, content)) {
                    logOperateService.save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("save.place.template")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(path)
                            .build()
                    );
                } else {
                    String historyFilePath = siteComponent.getWebTemplateHistoryFilePath(site,
                            TemplateComponent.INCLUDE_DIRECTORY + path);
                    CmsFileUtils.updateFile(filePath, historyFilePath, content);
                    logOperateService.save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("update.place.template")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(path)
                            .build()
                    );
                }
                templateComponent.clearTemplateCache();
                if (site.isUseSsi()) {
                    CmsPlaceMetadata metadata = metadataComponent.getPlaceMetadata(filePath);
                    templateComponent.staticPlace(site, path, metadata, null);
                }
            } catch (IOException | TemplateException e) {
                model.addAttribute(CommonConstants.ERROR, e.getMessage());
                log.error(e.getMessage(), e);
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
            }
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param path
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("delete")
    @Csrf
    @ResponseBody
    public String deletePlace(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path,
                              HttpServletRequest request, ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", null != site.getParentId(), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        if (CommonUtils.notEmpty(path)) {
            String filePath = siteComponent.getWebTemplateFilePath(site, TemplateComponent.INCLUDE_DIRECTORY + path);
            String backupFilePath = siteComponent.getWebTemplateBackupFilePath(site, TemplateComponent.INCLUDE_DIRECTORY + path);
            if (ControllerUtils.verifyCustom("notExist.template", !CmsFileUtils.moveFile(filePath, backupFilePath), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
            }
            metadataComponent.deletePlaceMetadata(filePath);
            cmsPlaceService.delete(site.getId(), path);
            templateComponent.clearTemplateCache();
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.web.template")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(path)
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }

    /**
     * @param site
     * @param admin
     * @param path
     * @param metadata
     * @param content
     * @param request
     * @param session
     * @param model
     * @return view name
     */
    @RequestMapping("saveMetaData")
    @Csrf
    @ResponseBody
    public String savePlaceMetaData(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path,
                                    @ModelAttribute CmsPlaceMetadata metadata, String content, HttpServletRequest request, HttpSession session,
                                    ModelMap model) {
        if (CommonUtils.notEmpty(path)) {
            String filePath = siteComponent.getWebTemplateFilePath(site, TemplateComponent.INCLUDE_DIRECTORY + path);
            try {
                CmsFileUtils.createFile(filePath, content);
                metadataComponent.updatePlaceMetadata(filePath, metadata);
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("update.template.meta")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(path)
                        .build()
                );

                templateComponent.clearTemplateCache();
                if (site.isUseSsi()) {
                    templateComponent.staticPlace(site, path, metadata, null);
                }
            } catch (IOException | TemplateException e) {
                model.addAttribute(CommonConstants.ERROR, e.getMessage());
                log.error(e.getMessage(), e);
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
            }
        }
        return CommonConstants.TEMPLATE_DONE;
    }


    /**
     * @param site
     * @param admin
     * @param path
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("publish")
    @Csrf
    @ResponseBody
    public String publishPlace(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path,
                               HttpServletRequest request, ModelMap model) {
        try {
            if (CommonUtils.notEmpty(path) && site.isUseSsi()) {
                CmsPlaceMetadata metadata = metadataComponent
                        .getPlaceMetadata(siteComponent.getWebTemplateFilePath(site, TemplateComponent.INCLUDE_DIRECTORY + path));
                templateComponent.staticPlace(site, path, metadata, null);
                logOperateService.save(LogOperate.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .operate("static")
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .content(path)
                        .build()
                );
            }
            return CommonConstants.TEMPLATE_DONE;
        } catch (IOException | TemplateException e) {
            model.addAttribute(CommonConstants.ERROR, e.getMessage());
            log.error(e.getMessage(), e);
            String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
        }
    }


}
