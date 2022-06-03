package com.synccms.controller.api.admin.cms;

import com.synccms.FileConstants;
import com.synccms.common.annotation.Csrf;
import com.synccms.common.api.Config;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.*;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.log.LogUpload;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.BeanComponent;
import com.synccms.logic.component.config.SiteAttributeComponent;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.log.LogUploadService;
import com.synccms.views.pojo.entities.FileInfoData;
import com.synccms.views.pojo.entities.FileSize;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.text.Normalizer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * CmsWebFileAdminController
 *
 */
@RestController
@RequestMapping("cmsWebFile")
public class CmsWebFileAdminController {
    protected final Log log = LogFactory.getLog(getClass());
    @Autowired
    protected LogUploadService logUploadService;
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
    public List<FileInfoData> list(@RequestAttribute SysSite site,
                                   @SessionAttribute BaseSysUser admin,
                                   String path,
                                   String order,
                                   HttpServletRequest request,
                                   ModelMap model) {


        Map<String, String> config =  BeanComponent.getConfigComponent().getConfigData(site.getId(), Config.CONFIG_CODE_SITEA_TTRIBUTE);
        String rootPath = config.get(SiteAttributeComponent.FILE_ROOT_PATH);
        if(StringUtils.isEmpty(rootPath)) rootPath = "";

        if(path == null)
        {
            path = rootPath;
        }

        return CmsFileUtils.getFileList(siteComponent.getWebFilePath(site, path), order);
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
    public String save(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path, String content,
                       HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(path)) {
            try {
                String filePath = siteComponent.getWebFilePath(site, path);
                content = new String(VerificationUtils.base64Decode(content), CommonConstants.DEFAULT_CHARSET);
                if (CmsFileUtils.createFile(filePath, content)) {
                    logOperateService.save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("save.web.webfile")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(path)
                            .build());
                } else {
                    String historyFilePath = siteComponent.getWebHistoryFilePath(site, path);
                    CmsFileUtils.updateFile(filePath, historyFilePath, content);
                    logOperateService.save(LogOperate.builder()
                            .siteId(site.getId())
                            .userId(admin.getId())
                            .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                            .operate("update.web.webfile")
                            .ip(RequestUtils.getIpAddress(request))
                            .createDate(CommonUtils.getDate())
                            .content(path)
                            .build());
                }
            } catch (IOException e) {
                model.addAttribute(CommonConstants.ERROR, e.getMessage());
                log.error(e.getMessage(), e);
                return CommonConstants.TEMPLATE_ERROR;
            }
        }
        return CommonConstants.TEMPLATE_DONE;
    }


    public Map<String, Object> doUpload(SysSite site,
                           BaseSysUser admin,
                           MultipartFile[] files,
                           String path,
                           Boolean override,
                           HttpServletRequest request,
                           ModelMap model) {
        Map<String, Object> filesMap = new HashMap<>();
        List<Map<String, String>> filesList = new ArrayList<>();

        filesMap.put("files", filesList);
        filesMap.put("success", true);

        if (null != files) {
            try {
                for (MultipartFile file : files) {
                    Map<String, String> fileMap = new HashMap<>();

                    String fileName = Normalizer.normalize(file.getOriginalFilename(), Normalizer.Form.NFC);
                    String suffix = CmsFileUtils.getSuffix(fileName);
                    if (ArrayUtils.contains(FileConstants.ALLOW_FILES, suffix)) {
                        String filePath = path + (StringUtils.endsWith(path, CommonConstants.SEPARATOR) ? "" : CommonConstants.SEPARATOR) + fileName;
                        String fullFilePath = siteComponent.getWebFilePath(site, filePath);

                        if (null != override && override || !CmsFileUtils.exists(fullFilePath)) {
                            CmsFileUtils.upload(file, fullFilePath);
                            FileSize fileSize = CmsFileUtils.getFileSize(fullFilePath, suffix);
                            logUploadService.save( LogUpload.builder()
                                    .siteId(site.getId())
                                    .userId(admin.getId())
                                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                                    .originalName(fileName)
                                    .fileType(CmsFileUtils.getFileType(CmsFileUtils.getSuffix(fileName)))
                                    .fileSize(file.getSize())
                                    .width(fileSize.getWidth())
                                    .height(fileSize.getHeight())
                                    .ip(RequestUtils.getIpAddress(request))
                                    .createDate(CommonUtils.getDate())
                                    .filePath(filePath)
                                    .build());

                            fileMap.put("fileSize", ""+fileSize.getSize());
                        }

                        fileMap.put("fileName", fileName);
                        fileMap.put("fileType", FilenameUtils.getExtension(fileName));
                        fileMap.put("filePath", filePath);
                        filesList.add(fileMap);
                    }else{
                        filesMap.put("success", false);
                        filesMap.put("message", suffix + " does now allowed to upload");
                        return filesMap;
                    }
                }
            } catch (IOException e) {
                model.addAttribute(CommonConstants.ERROR, e.getMessage());
                log.error(e.getMessage(), e);

                filesMap.put("success", false);
                filesMap.put("message", e.getMessage());
            }

       }
        return filesMap;

    }


    /**
     * @param site
     * @param admin
     * @param file
     * @param path
     * @param override
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("uploadFile")
    @Csrf
    public Map<String, Object> uploadFile(@RequestAttribute SysSite site,
                                          @SessionAttribute BaseSysUser admin,
                                          MultipartFile file, String path,
                                          Boolean override,
                                          HttpServletRequest request,
                                          ModelMap model) {
        Map<String, Object>  filesMap = doUpload(site, admin, new MultipartFile[]{file}, path, override, request, model);
        if((Boolean)filesMap.get("success"))
        {
            Map<String, Object> fileMap = (Map<String, Object>)((List)filesMap.get("files")).get(0);
            fileMap.put("url", "/webfile" + fileMap.get("filePath"));

            return fileMap;
        }else{
            return filesMap;
        }

    }


    /**
     * @param site
     * @param admin
     * @param files
     * @param path
     * @param override
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("uploadFiles")
    @Csrf
    public String uploadFiles(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, MultipartFile[] files, String path,
                              Boolean override, HttpServletRequest request, ModelMap model) {
        Map<String, Object>  filesMap = doUpload(site, admin, files, path, override, request, model);
        if((Boolean)filesMap.get("success"))
        {
            return CommonConstants.TEMPLATE_DONE;
        }else{
            return CommonConstants.TEMPLATE_ERROR;
        }

    }

    /**
     * @param site
     * @param fileNames
     * @param path
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("check")
    @Csrf
    @ResponseBody
    public boolean check(@RequestAttribute SysSite site, @RequestParam("fileNames[]") String[] fileNames, String path,
            HttpServletRequest request, ModelMap model) {
        if (null != fileNames) {
            for (String fileName : fileNames) {
                String filePath = path + CommonConstants.SEPARATOR + fileName;
                if (CmsFileUtils.exists(siteComponent.getWebFilePath(site, filePath))) {
                    return true;
                }
            }
        }
        return false;

    }

    /**
     * @param site
     * @param admin
     * @param paths
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("delete")
    @Csrf
    public String delete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String[] paths,
                         HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(paths)) {
            for (String path : paths) {
                String filePath = siteComponent.getWebFilePath(site, path);
                String backupFilePath = siteComponent.getWebBackupFilePath(site, path);
                if (ControllerUtils.verifyCustom("notExist.webfile", !CmsFileUtils.moveFile(filePath, backupFilePath), model)) {
                    return CommonConstants.TEMPLATE_ERROR;
                }
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.web.webfile")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(StringUtils.join(paths, CommonConstants.COMMA))
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
    @RequestMapping("zip")
    @Csrf
    public String doZip(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path, HttpServletRequest request,
                        ModelMap model) {
        if (CommonUtils.notEmpty(path)) {
            String filePath = siteComponent.getWebFilePath(site, path);
            if (CmsFileUtils.isDirectory(filePath)) {
                try {
                    String zipFileName = null;
                    if (path.endsWith("/") || path.endsWith("\\")) {
                        zipFileName = filePath + "files.zip";
                    } else {
                        zipFileName = filePath + ".zip";
                    }
                    ZipUtils.zip(filePath, zipFileName);
                } catch (IOException e) {
                    model.addAttribute(CommonConstants.ERROR, e.getMessage());
                    log.error(e.getMessage(), e);
                }
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("zip.web.webfile")
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
     * @param encoding
     * @param here
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("unzip")
    @Csrf
    public String doUnzip(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path, String encoding,
                          boolean here, HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(path) && path.toLowerCase().endsWith(".zip")) {
            String filePath = siteComponent.getWebFilePath(site, path);
            if (CmsFileUtils.isFile(filePath)) {
                try {
                    if (here) {
                        ZipUtils.unzipHere(filePath, encoding);
                    } else {
                        ZipUtils.unzip(filePath, filePath.substring(0, filePath.length() - 4), encoding, true);
                    }
                } catch (IOException e) {
                    model.addAttribute(CommonConstants.ERROR, e.getMessage());
                    log.error(e.getMessage(), e);
                }
            }
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("unzip.web.webfile")
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
     * @param fileName
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("createDirectory")
    @Csrf
    public String createDirectory(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, String path, String fileName,
                                  HttpServletRequest request, ModelMap model) {
        if (null != path && CommonUtils.notEmpty(fileName)) {
            path = path + CommonConstants.SEPARATOR + fileName;
            String filePath = siteComponent.getWebFilePath(site, path);
            CmsFileUtils.mkdirs(filePath);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("createDirectory.web.webfile")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(path)
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }
}
