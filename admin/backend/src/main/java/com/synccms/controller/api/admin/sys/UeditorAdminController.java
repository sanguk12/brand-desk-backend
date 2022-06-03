package com.synccms.controller.api.admin.sys;

import com.drew.imaging.FileType;
import com.drew.imaging.FileTypeDetector;
import com.synccms.FileConstants;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.tools.CmsFileUtils;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.common.tools.VerificationUtils;
import com.synccms.entities.log.LogUpload;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogUploadService;
import com.synccms.views.pojo.entities.FileSize;
import com.synccms.views.pojo.entities.UeditorConfig;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.util.*;

/**
 *
 * UeditorAdminController
 *
 */
@RestController
@RequestMapping("ueditor")
public class UeditorAdminController {
    protected final Log log = LogFactory.getLog(getClass());
    @Autowired
    protected LogUploadService logUploadService;
    @Autowired
    protected SiteComponent siteComponent;

    protected static final String ACTION_CONFIG = "config";
    protected static final String ACTION_UPLOAD = "upload";
    protected static final String ACTION_UPLOAD_SCRAW = "uploadScraw";
    protected static final String ACTION_CATCHIMAGE = "catchimage";
    protected static final String ACTION_LISTFILE = "listfile";

    protected static final String FIELD_NAME = "file";
    protected static final String SCRAW_TYPE = ".jpg";



    /**
     * @param request
     * @return view name
     */
    @RequestMapping(params = "action=" + ACTION_CONFIG)
    @ResponseBody
    public UeditorConfig config(HttpServletRequest request) {
        String urlPrefix = siteComponent.getSite(request.getServerName()).getSitePath();
        UeditorConfig config = new UeditorConfig();
        config.setImageActionName(ACTION_UPLOAD);
        config.setSnapscreenActionName(ACTION_UPLOAD);
        config.setScrawlActionName(ACTION_UPLOAD_SCRAW);
        config.setVideoActionName(ACTION_UPLOAD);
        config.setFileActionName(ACTION_UPLOAD);
        config.setCatcherActionName(ACTION_CATCHIMAGE);
        config.setImageManagerActionName(ACTION_LISTFILE);
        config.setFileManagerActionName(ACTION_LISTFILE);
        config.setImageFieldName(FIELD_NAME);
        config.setScrawlFieldName(FIELD_NAME);
        config.setCatcherFieldName(FIELD_NAME);
        config.setVideoFieldName(FIELD_NAME);
        config.setFileFieldName(FIELD_NAME);
        config.setImageUrlPrefix(urlPrefix);
        config.setScrawlUrlPrefix(urlPrefix);
        config.setSnapscreenUrlPrefix(urlPrefix);
        config.setCatcherUrlPrefix(urlPrefix);
        config.setVideoUrlPrefix(urlPrefix);
        config.setFileUrlPrefix(urlPrefix);
        config.setImageManagerUrlPrefix(urlPrefix);
        config.setFileManagerUrlPrefix(urlPrefix);
        config.setImageAllowFiles(FileConstants.IMAGE_ALLOW_FILES);
        config.setCatcherAllowFiles(FileConstants.IMAGE_ALLOW_FILES);
        config.setVideoAllowFiles(FileConstants.VIDEO_ALLOW_FILES);
        config.setFileAllowFiles(FileConstants.ALLOW_FILES);
        config.setImageManagerAllowFiles(FileConstants.IMAGE_ALLOW_FILES);
        config.setFileManagerAllowFiles(FileConstants.ALLOW_FILES);
        return config;
    }

    /**
     * @param site
     * @param admin
     * @param file
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping(params = "action=" + ACTION_UPLOAD)
    @ResponseBody
    public Map<String, Object> upload(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, MultipartFile file,
                                      HttpServletRequest request, ModelMap model) {
        if (null != file && !file.isEmpty()) {
            String originalName = file.getOriginalFilename();
            String suffix = CmsFileUtils.getSuffix(originalName);
            if (true) {
            //if (ArrayUtils.contains(ALLOW_FILES, suffix)) {
                String fileName = CmsFileUtils.getUploadFileName(site, originalName);
                String filePath = siteComponent.getWebFilePath(site, fileName);
                try {
                    CmsFileUtils.upload(file, filePath);
                    FileSize fileSize = CmsFileUtils.getFileSize(filePath, suffix);

                    logUploadService.save( LogUpload.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .originalName(originalName)
                            .fileType(CmsFileUtils.getFileType(suffix))
                            .fileSize(file.getSize())
                            .width(fileSize.getWidth())
                            .height(fileSize.getHeight())
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .filePath(fileName)
                            .build());

                    Map<String, Object> map = getResultMap(true);
                    map.put("size", file.getSize());
                    map.put("title", originalName);
                    map.put("url", fileName);
                    map.put("type", suffix);
                    map.put("original", originalName);
                    return map;
                } catch (IllegalStateException | IOException e) {
                }
            }
        }
        return getResultMap(false);
    }

    /**
     * @param site
     * @param admin
     * @param file
     * @param request
     * @param session
     * @return view name
     */
    @RequestMapping(params = "action=" + ACTION_UPLOAD_SCRAW)
    @ResponseBody
    public Map<String, Object> uploadScraw(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String file,
                                           HttpServletRequest request, HttpSession session) {
        if (CommonUtils.notEmpty(file)) {
            byte[] data = VerificationUtils.base64Decode(file);
            String fileName = CmsFileUtils.getUploadFileName(site, UUID.randomUUID().toString() + "." + SCRAW_TYPE);
            String filePath = siteComponent.getWebFilePath(site, fileName);
            try {
                CmsFileUtils.writeByteArrayToFile(filePath, data);
                FileSize fileSize = CmsFileUtils.getFileSize(filePath, SCRAW_TYPE);
                logUploadService.save( LogUpload.builder()
                        .siteId(site.getId())
                        .userId(admin.getId())
                        .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                        .originalName(CommonConstants.BLANK)
                        .fileType(CmsFileUtils.FILE_TYPE_IMAGE)
                        .fileSize(data.length)
                        .width(fileSize.getWidth())
                        .height(fileSize.getHeight())
                        .ip(RequestUtils.getIpAddress(request))
                        .createDate(CommonUtils.getDate())
                        .filePath(fileName)
                        .build());
                Map<String, Object> map = getResultMap(true);
                map.put("size", data.length);
                map.put("title", fileName);
                map.put("url", fileName);
                map.put("type", SCRAW_TYPE);
                map.put("original", "scraw" + SCRAW_TYPE);
                return map;
            } catch (IllegalStateException | IOException e) {
                log.error(e.getMessage(), e);
                return getResultMap(false);
            }
        }
        return getResultMap(false);
    }

    /**
     * @param site
     * @param admin
     * @param request
     * @param session
     * @return view name
     */
    @RequestMapping(params = "action=" + ACTION_CATCHIMAGE)
    @ResponseBody
    public Map<String, Object> catchimage(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin,
            HttpServletRequest request, HttpSession session) {
        try (CloseableHttpClient httpclient = HttpClients.custom().setDefaultRequestConfig(CommonConstants.defaultRequestConfig)
                .build();) {
            String[] files = request.getParameterValues(FIELD_NAME + "[]");
            if (CommonUtils.notEmpty(files)) {
                List<Map<String, Object>> list = new ArrayList<>();
                for (String image : files) {
                    HttpGet httpget = new HttpGet(image);
                    CloseableHttpResponse response = httpclient.execute(httpget);
                    HttpEntity entity = response.getEntity();
                    if (null != entity) {
                        BufferedInputStream inputStream = new BufferedInputStream(entity.getContent());
                        FileType fileType = FileTypeDetector.detectFileType(inputStream);
                        String suffix = fileType.getCommonExtension();
                        if (CommonUtils.notEmpty(suffix)) {
                            String fileName = CmsFileUtils.getUploadFileName(site, UUID.randomUUID().toString() +  "." + suffix);
                            String filePath = siteComponent.getWebFilePath(site, fileName);
                            CmsFileUtils.copyInputStreamToFile(inputStream, filePath);
                            FileSize fileSize = CmsFileUtils.getFileSize(filePath, suffix);
                            logUploadService.save( LogUpload.builder()
                                    .siteId(site.getId())
                                    .userId(admin.getId())
                                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                                    .originalName(CommonConstants.BLANK)
                                    .fileType(CmsFileUtils.getFileType(suffix))
                                    .fileSize(entity.getContentLength())
                                    .width(fileSize.getWidth())
                                    .height(fileSize.getHeight())
                                    .ip(RequestUtils.getIpAddress(request))
                                    .createDate(CommonUtils.getDate())
                                    .filePath(fileName)
                                    .build());
                            Map<String, Object> map = getResultMap(true);
                            map.put("size", entity.getContentLength());
                            map.put("title", fileName);
                            map.put("url", fileName);
                            map.put("source", image);
                            list.add(map);
                        }

                    }
                    EntityUtils.consume(entity);
                }
                Map<String, Object> map = getResultMap(true);
                map.put("list", list);
                return map;
            }
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return getResultMap(false);
        }
        return getResultMap(false);
    }

    /**
     * @param admin
     * @param start
     * @param request
     * @param session
     * @return view name
     */
    @SuppressWarnings("unchecked")
    @RequestMapping(params = "action=" + ACTION_LISTFILE)
    @ResponseBody
    public Map<String, Object> listfile(@SessionAttribute BaseSysUser admin, Integer start, HttpServletRequest request,
                                        HttpSession session) {
        if (CommonUtils.empty(start)) {
            start = 0;
        }
        PageHandler page = logUploadService.getPage(siteComponent.getSite(request.getServerName()).getId(), admin.getId(), null,
                null, null, null, null, null, start / 20 + 1, 20);

        Map<String, Object> map = getResultMap(true);
        List<Map<String, Object>> list = new ArrayList<>();
        for (LogUpload logUpload : ((List<LogUpload>) page.getList())) {
            Map<String, Object> tempMap = getResultMap(true);
            tempMap.put("url", logUpload.getFilePath());
            list.add(tempMap);
        }
        map.put("list", list);
        map.put("start", start);
        map.put("total", page.getTotalCount());
        return map;
    }

    protected static Map<String, Object> getResultMap(boolean success) {
        Map<String, Object> map = new HashMap<>();
        if (success) {
            map.put("state", "SUCCESS");
        } else {
            map.put("state", "error");
        }
        return map;
    }
}
