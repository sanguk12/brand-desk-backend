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
import com.synccms.views.pojo.entities.CmsPageData;
import com.synccms.views.pojo.entities.CmsPageMetadata;
import com.synccms.views.pojo.entities.CmsPlaceMetadata;
import com.synccms.views.pojo.entities.CmsTemplateData;
import freemarker.template.TemplateException;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * CmsTemplateAdminController
 *
 */
@RestController
@RequestMapping("cmsTemplate")
public class CmsTemplateAdminController {
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
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("list")
    @ResponseBody
    public List<CmsTemplateData> list(@RequestAttribute SysSite site,
                                      @SessionAttribute BaseSysUser admin,
                                      String path,
                                      String orderField,
                                      HttpServletRequest request,
                                      ModelMap model) {
        path = StringUtils.isEmpty(path) ? "/" : path;
        return CmsFileUtils.getFileList(siteComponent.getWebTemplateFilePath(site, path), orderField)
                .stream()
                .map(f -> new CmsTemplateData(f))
                .collect(Collectors.toList());
    }

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
    public String save(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path, String content,
                       HttpServletRequest request, ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", null != site.getParentId(), model)) {
            String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
        }
        if (CommonUtils.notEmpty(path)) {
            try {
                String filePath = siteComponent.getWebTemplateFilePath(site, path);
                CmsPageMetadata metadata = metadataComponent.getTemplateMetadata(filePath);
                content = new String(VerificationUtils.base64Decode(content), CommonConstants.DEFAULT_CHARSET);
                if (CmsFileUtils.createFile(filePath, content)) {
                    logOperateService.save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("save.web.template")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(path)
                            .build()
                    );
                } else {
                    String historyFilePath = siteComponent.getWebTemplateHistoryFilePath(site, path);
                    CmsFileUtils.updateFile(filePath, historyFilePath, content);
                    if (CommonUtils.notEmpty(metadata.getCacheTime()) && 0 < metadata.getCacheTime()) {
                        templateCacheComponent.deleteCachedFile(SiteComponent.getFullTemplatePath(site, path));
                    }
                    logOperateService.save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("update.web.template")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(path)
                            .build()
                    );
                }
                templateComponent.clearTemplateCache();
                cacheComponent.clearViewCache();
                if (CommonUtils.notEmpty(metadata.getPublishPath())) {
                    publish(site, path);
                }
            } catch (IOException | TemplateException e) {
                model.addAttribute(CommonConstants.ERROR, e.getMessage());
                log.error(e.getMessage(), e);
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
            }
        }
        return path;
    }


    /**
     * @param site
     * @param admin
     * @param files
     * @param path
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("doUpload")
    @Csrf
    @ResponseBody
    public String upload(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, MultipartFile[] files, String path,
                         HttpServletRequest request, ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", null != site.getParentId(), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        if (null != files) {
            try {
                for (MultipartFile file : files) {
                    String filePath = path + CommonConstants.SEPARATOR + file.getOriginalFilename();
                    CmsFileUtils.upload(file, siteComponent.getWebTemplateFilePath(site, filePath));
                    CmsPageMetadata metadata = new CmsPageMetadata();
                    metadata.setUseDynamic(true);
                    metadataComponent.updateTemplateMetadata(filePath, metadata);
                    templateComponent.clearTemplateCache();
                    cacheComponent.clearViewCache();
                    logOperateService.save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("upload.web.template")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(filePath)
                            .build()
                    );
                }
            } catch (IOException e) {
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
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path, HttpServletRequest request,
                         ModelMap model) {

        if (ControllerUtils.verifyCustom("noright", null != site.getParentId(), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        if (CommonUtils.notEmpty(path)) {
            String filePath = siteComponent.getWebTemplateFilePath(site, path);
            CmsPageMetadata metadata = metadataComponent.getTemplateMetadata(filePath);
            if (CommonUtils.notEmpty(metadata.getCacheTime()) && metadata.getCacheTime() > 0) {
                templateCacheComponent.deleteCachedFile(SiteComponent.getFullTemplatePath(site, path));
            }
            String backupFilePath = siteComponent.getWebTemplateBackupFilePath(site, path);
            if (ControllerUtils.verifyCustom("notExist.template", !CmsFileUtils.moveFile(filePath, backupFilePath), model)) {
                String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
            }
            metadataComponent.deleteTemplateMetadata(filePath);
            metadataComponent.deleteTemplateData(filePath);
            sysDeptPageService.delete(null, path);
            templateComponent.clearTemplateCache();
            cacheComponent.clearViewCache();
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
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("deletePlace")
    @Csrf
    public String deletePlace(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path,
                              HttpServletRequest request, ModelMap model) {
        if (ControllerUtils.verifyCustom("noright", null != site.getParentId(), model)) {
            return CommonConstants.TEMPLATE_ERROR;
        }
        if (CommonUtils.notEmpty(path)) {
            String filePath = siteComponent.getWebTemplateFilePath(site, TemplateComponent.INCLUDE_DIRECTORY + path);
            String backupFilePath = siteComponent.getWebTemplateBackupFilePath(site, TemplateComponent.INCLUDE_DIRECTORY + path);
            if (ControllerUtils.verifyCustom("notExist.template", !CmsFileUtils.moveFile(filePath, backupFilePath), model)) {
                return CommonConstants.TEMPLATE_ERROR;
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
    @RequestMapping("savePlaceMetaData")
    @Csrf
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
                return CommonConstants.TEMPLATE_ERROR;
            }
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
    public String saveMetadata(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path,
                               @ModelAttribute CmsPageMetadata metadata, String content, HttpServletRequest request, HttpSession session,
                               ModelMap model) {
        if (CommonUtils.notEmpty(path)) {
            if (path.endsWith(CommonConstants.SEPARATOR) || CommonUtils.empty(path)) {
                path += CommonConstants.getDefaultPage();
            }

            String filePath = siteComponent.getWebTemplateFilePath(site, path);
            try {
                CmsFileUtils.createFile(filePath, content);
                metadataComponent.updateTemplateMetadata(filePath, metadata);
                templateComponent.clearTemplateCache();
                cacheComponent.clearViewCache();
                if (CommonUtils.notEmpty(metadata.getPublishPath())) {
                    publish(site, path);
                }
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
    @RequestMapping("publishPlace")
    @Csrf
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
            return CommonConstants.TEMPLATE_ERROR;
        }
    }

    /**
     * @param site
     * @param path
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("publish")
    @Csrf
    @ResponseBody
    public String publish(@RequestAttribute SysSite site, String path, HttpServletRequest request, ModelMap model) {
        try {
            publish(site, path);
            return CommonConstants.TEMPLATE_DONE;
        } catch (IOException | TemplateException e) {
            model.addAttribute(CommonConstants.ERROR, e.getMessage());
            log.error(e.getMessage(), e);
            String message = LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), (String)model.get(CommonConstants.ERROR));
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
        }
    }

    private void publish(SysSite site, String path) throws IOException, TemplateException {
        if (CommonUtils.notEmpty(path)) {
            CmsPageMetadata metadata = metadataComponent.getTemplateMetadata(siteComponent.getWebTemplateFilePath(site, path));
            if (site.isUseStatic() && CommonUtils.notEmpty(metadata.getPublishPath())) {
                String templatePath = SiteComponent.getFullTemplatePath(site, path);
                CmsPageData data = metadataComponent.getTemplateData(siteComponent.getCurrentSiteWebTemplateFilePath(site, path));
                templateComponent.createStaticFile(site, templatePath, metadata.getPublishPath(), null, metadata.getAsMap(data),
                        null);
            }
        }
    }
}
