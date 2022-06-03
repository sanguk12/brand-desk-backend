package com.synccms.controller.api.admin.sys;

import com.synccms.FileConstants;
import com.synccms.common.annotation.Csrf;
import com.synccms.common.tools.CmsFileUtils;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.log.LogUpload;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogUploadService;
import com.synccms.views.pojo.entities.FileSize;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * FileAdminController
 */
@RestController
@RequestMapping("file")
public class FileAdminController {
    protected final Log log = LogFactory.getLog(getClass());
    @Autowired
    protected LogUploadService logUploadService;
    @Autowired
    protected SiteComponent siteComponent;

    /**
     * @param site
     * @param admin
     * @param file
     * @param field
     * @param originalField
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping(value = "doUpload", method = RequestMethod.POST)
    @Csrf
    @ResponseBody
    public Map<String, Object> upload(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, MultipartFile file,
                                      String field, String originalField, HttpServletRequest request, ModelMap model) {
        Map<String, Object> result = new HashMap<>();
        if (null != file && !file.isEmpty()) {
            String originalName = file.getOriginalFilename();
            String suffix = CmsFileUtils.getSuffix(originalName);
            if (ArrayUtils.contains(FileConstants.ALLOW_FILES, suffix)) {
                String fileName = CmsFileUtils.getUploadFileName(site, originalName);
                String filePath = siteComponent.getWebFilePath(site, fileName);
                try {
                    CmsFileUtils.upload(file, filePath);
                    result.put("field", field);
                    result.put(field, fileName);
                    String fileType = CmsFileUtils.getFileType(suffix);
                    result.put("fileType", fileType);
                    result.put("fileSize", file.getSize());
                    if (CommonUtils.notEmpty(originalField)) {
                        result.put("originalField", originalField);
                        result.put(originalField, originalName);
                    }
                    FileSize fileSize = CmsFileUtils.getFileSize(filePath, suffix);
                    logUploadService.save( LogUpload.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .originalName(originalName)
                            .fileType(fileType)
                            .fileSize(file.getSize())
                            .width(fileSize.getWidth())
                            .height(fileSize.getHeight())
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .filePath(fileName)
                            .build());
                } catch (IllegalStateException | IOException e) {
                    log.error(e.getMessage(), e);
                }
            }
        }
        return result;
    }

    /**
     * @param site
     * @param admin
     * @param files
     * @param field
     * @param originalField
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping(value = "doBatchUpload", method = RequestMethod.POST)
    @Csrf
    @ResponseBody
    public List<Map<String, Object>> batchUpload(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin,
            MultipartFile[] files, String field, String originalField, HttpServletRequest request, ModelMap model) {
        List<Map<String, Object>> resultList = new ArrayList<>();
        if (CommonUtils.notEmpty(files)) {
            for (MultipartFile file : files) {
                Map<String, Object> result = new HashMap<>();
                String originalName = file.getOriginalFilename();
                String suffix = CmsFileUtils.getSuffix(originalName);
                if (ArrayUtils.contains(FileConstants.ALLOW_FILES, suffix)) {
                    String fileName = CmsFileUtils.getUploadFileName(site, originalName);
                    String filePath = siteComponent.getWebFilePath(site, fileName);
                    try {
                        CmsFileUtils.upload(file, filePath);
                        result.put("field", field);
                        result.put(field, fileName);
                        String fileType = CmsFileUtils.getFileType(suffix);
                        result.put("fileType", fileType);
                        result.put("fileSize", file.getSize());
                        if (CommonUtils.notEmpty(originalField)) {
                            result.put("originalField", originalField);
                            result.put(originalField, originalName);
                        }
                        resultList.add(result);
                        FileSize fileSize = CmsFileUtils.getFileSize(filePath, suffix);
                        logUploadService.save( LogUpload.builder()
                                .siteId(site.getId())
                                .userId(admin.getId())
                                .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                                .originalName(originalName)
                                .fileType(fileType)
                                .fileSize(file.getSize())
                                .width(fileSize.getWidth())
                                .height(fileSize.getHeight())
                                .ip(RequestUtils.getIpAddress(request))
                                .createDate(CommonUtils.getDate())
                                .filePath(fileName)
                                .build());
                    } catch (IllegalStateException | IOException e) {
                        log.error(e.getMessage(), e);
                    }
                }
            }
        }
        return resultList;
    }
}
