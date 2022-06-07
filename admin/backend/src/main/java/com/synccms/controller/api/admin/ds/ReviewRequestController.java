package com.synccms.controller.api.admin.ds;

import com.samsung.ds.entities.DsJoinRequestEntity;
import com.samsung.ds.logic.query.JoinRequestQuery;
import com.samsung.ds.logic.service.DsJoinRequestService;
import com.synccms.common.annotation.Csrf;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.pojo.AjaxResponse;
import com.synccms.entities.sys.SysSite;
import com.synccms.logic.service.sys.SysUserService;
import com.synccms.views.entity.DsJoinRequestData;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("join")
public class ReviewRequestController {
    protected final Log log = LogFactory.getLog(getClass());
    @Autowired
    private DsJoinRequestService service;

    @Autowired
    private SysUserService userService;


    /**
     * @param site
     * @param query
     * @param pageIndex
     * @param pageSize
     * @return view name
     */
    @RequestMapping("list")
    public AjaxResponse list(
            @RequestAttribute SysSite site,
            @RequestBody JoinRequestQuery query,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "" + PageHandler.DEFAULT_PAGE_SIZE) Integer pageSize) {

        return AjaxResponse.success(service.getPage(query, pageIndex, pageSize));

    }



    /**
     * @param site
     * @param id
     * @return view name
     */
    @RequestMapping("detail/{id}")
    public AjaxResponse detail(
            @RequestAttribute SysSite site,
            @PathVariable Long id) {
        DsJoinRequestEntity req = service.getEntity(id);

        return AjaxResponse.success(new DsJoinRequestData(req , req.getStaff() == null ? null : userService.getEntity(req .getStaff())));

    }


    /**
     * @param site
     * @param id
     * @return view name
     */
    @RequestMapping("reject/{id}")
    @Csrf
    public AjaxResponse reject(
            @RequestAttribute SysSite site,
            @PathVariable Long id) {
        service.reject(id);
        return AjaxResponse.success(id);

    }


    /**
     * @param site
     * @param id
     * @return view name
     */
    @Csrf
    @RequestMapping("approve/{id}")
    public AjaxResponse approve(
            @RequestAttribute SysSite site,
            @RequestParam("download") Boolean download,
            @PathVariable Long id) {
        return AjaxResponse.success(id);
    }
}
