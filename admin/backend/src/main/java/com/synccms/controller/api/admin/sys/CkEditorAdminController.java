package com.synccms.controller.api.admin.sys;

import com.synccms.FileConstants;
import com.synccms.common.constants.CommonConstants;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * CkeditorAdminController
 *
 */
@RestController
@RequestMapping("ckeditor")
public class CkEditorAdminController {
    @Autowired
    protected LogUploadService logUploadService;
    @Autowired
    protected SiteComponent siteComponent;

    private static final String RESULT_UPLOADED = "uploaded";
    private static final String RESULT_FILENAME = "fileName";
    private static final String RESULT_URL = "url";

    /**
     * @param site
     * @param admin
     * @param upload
     * @param ckCsrfToken
     * @param csrfToken
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("upload")
    @ResponseBody
    public Map<String, Object> upload(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, MultipartFile upload,
                                      String ckCsrfToken, @CookieValue("ckCsrfToken") String csrfToken, HttpServletRequest request, ModelMap model) {
        Map<String, Object> map = new HashMap<>();
        int uploaded = 0;
        if (null != upload && !upload.isEmpty() && csrfToken.equals(ckCsrfToken)) {
            String originalName = upload.getOriginalFilename();
            String suffix = CmsFileUtils.getSuffix(originalName);
            if (ArrayUtils.contains(FileConstants.ALLOW_FILES, suffix)) {
                String fileName = CmsFileUtils.getUploadFileName(site, originalName);
                String filePath = siteComponent.getWebFilePath(site, fileName);
                try {
                    CmsFileUtils.upload(upload, filePath);
                    FileSize fileSize = CmsFileUtils.getFileSize(filePath, suffix);
                    logUploadService.save( LogUpload.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .originalName(originalName)
                            .fileType(CmsFileUtils.getFileType(CmsFileUtils.getSuffix(originalName)))
                            .fileSize(upload.getSize())
                            .width(fileSize.getWidth())
                            .height(fileSize.getHeight())
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .filePath(fileName)
                            .build());
                    map.put(RESULT_FILENAME, originalName);
                    map.put(RESULT_URL, site.getSitePath() + fileName);
                    uploaded++;
                } catch (IllegalStateException | IOException e) {
                    Map<String, String> messageMap = new HashMap<>();
                    messageMap.put(CommonConstants.MESSAGE, e.getMessage());
                    map.put(CommonConstants.ERROR, messageMap);
                }
            } else {
                Map<String, String> messageMap = new HashMap<>();
                messageMap.put(CommonConstants.MESSAGE, "error");
                map.put(CommonConstants.ERROR, messageMap);
            }
        } else {
            Map<String, String> messageMap = new HashMap<>();
            messageMap.put(CommonConstants.MESSAGE, "no file");
            map.put(CommonConstants.ERROR, messageMap);
        }
        map.put(RESULT_UPLOADED, uploaded);
        return map;
    }
}
