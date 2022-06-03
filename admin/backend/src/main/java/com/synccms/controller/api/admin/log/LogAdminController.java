package com.synccms.controller.api.admin.log;

import com.synccms.common.annotation.Csrf;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.RequestUtils;
import com.synccms.entities.log.LogLogin;
import com.synccms.entities.log.LogOperate;
import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.BaseSysUser;
import com.synccms.logic.component.site.SiteComponent;
import com.synccms.logic.service.log.LogLoginService;
import com.synccms.logic.service.log.LogOperateService;
import com.synccms.logic.service.log.LogTaskService;
import com.synccms.logic.service.log.LogUploadService;
import com.synccms.logic.service.sys.BaseSysUserService;
import com.synccms.views.pojo.entities.LogActionData;
import com.synccms.views.pojo.entities.LogLoginData;
import com.synccms.views.pojo.query.LogActionQuery;
import com.synccms.views.pojo.query.LogLoginQuery;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * LogAdminController
 *
 */
@RestController
@RequestMapping("log")
public class LogAdminController {

    @Autowired
    private LogLoginService logLoginService;
    @Autowired
    private LogTaskService logTaskService;
    @Autowired
    private LogUploadService logUploadService;
    @Autowired
    protected LogOperateService logOperateService;

    @Autowired
    protected BaseSysUserService userService;

    @Autowired
    protected SiteComponent siteComponent;


    /**
     * @param site
     * @param admin
     * @param query
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("login")
    @Csrf
    public PageHandler loginList(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin,
                                 LogLoginQuery query,
                                 @RequestParam(value = "page", required = false, defaultValue = "0") Integer pageIndex,
                                 @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize,
                                 HttpServletRequest request, ModelMap model) {

        PageHandler page = logLoginService.getPage(site.getId(), query, pageIndex, pageSize);
        List<LogLogin> logList = ((List<LogLogin>)page.getList());

        List<Long> userIdList = logList.stream().map(r -> r.getUserId()).collect(Collectors.toList());
        List<BaseSysUser> userList = userService.getEntitys(userIdList.toArray(new Long[0]));
        List<LogLoginData> logDataList = logList.stream().map(r -> new LogLoginData(r,
                userList.stream()
                        .filter(u -> u.getId().equals(r.getUserId()))
                        .findAny()
                        .orElse(null)
        )).collect(Collectors.toList());

        page.setList(logDataList);

        return page;
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("logLogin/delete")
    @Csrf
    public String logLoginDelete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids,
                                 HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            logLoginService.delete(site.getId(), ids);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.logLogin")
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
     * @param query
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("action")
    @Csrf
    public PageHandler actionList(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin,
                                 LogActionQuery query,
                                 @RequestParam(value = "page", required = false, defaultValue = "0") Integer pageIndex,
                                 @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize,
                                 HttpServletRequest request, ModelMap model) {
        PageHandler page = logOperateService.getPage(site.getId(), query, pageIndex, pageSize);
        List<LogOperate> logList = ((List<LogOperate>)page.getList());

        List<Long> userIdList = logList.stream().map(r -> r.getUserId()).collect(Collectors.toList());
        List<BaseSysUser> userList = userService.getEntitys(userIdList.toArray(new Long[0]));
        List<LogActionData> logDataList = logList.stream().map(r -> new LogActionData(r,
                userList.stream()
                .filter(u -> u.getId().equals(r.getUserId()))
                .findAny()
                .orElse(null)
        )).collect(Collectors.toList());

        page.setList(logDataList);

        return page;
    }

    /**
     * @param site
     * @param admin
     * @param ids
     * @param request
     * @param model
     * @return view name
     */
    @RequestMapping("logOperate/delete")
    @Csrf
    public String logOperateDelete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids,
                                   HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            logOperateService.delete(site.getId(), ids);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.logOperate")
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
    @RequestMapping("logTask/delete")
    @Csrf
    public String logTaskDelete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids,
                                HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            logTaskService.delete(site.getId(), ids);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.logTask")
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
    @RequestMapping("logUpload/delete")
    @Csrf
    public String logUploadDelete(@RequestAttribute SysSite site, @SessionAttribute BaseSysUser admin, Long[] ids,
                                  HttpServletRequest request, ModelMap model) {
        if (CommonUtils.notEmpty(ids)) {
            logUploadService.delete(site.getId(), ids);
            logOperateService.save(LogOperate.builder()
                    .siteId(site.getId())
                    .userId(admin.getId())
                    .channel(LogLoginService.CHANNEL_WEB_MANAGER)
                    .operate("delete.logUpload")
                    .ip(RequestUtils.getIpAddress(request))
                    .createDate(CommonUtils.getDate())
                    .content(StringUtils.join(ids, CommonConstants.COMMA))
                    .build()
            );
        }
        return CommonConstants.TEMPLATE_DONE;
    }
}
