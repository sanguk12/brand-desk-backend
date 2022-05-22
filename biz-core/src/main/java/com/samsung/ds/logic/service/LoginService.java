package com.samsung.ds.logic.service;

import com.synccms.entities.sys.SysSite;
import com.synccms.entities.sys.SysUser;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Service
public interface LoginService {
    String login(
            SysSite site,
            String username,
            String password,
            Boolean rememberMe,
            HttpServletRequest request,
            HttpServletResponse response);

    Map<String, Object> loginStatus(HttpSession session, SysSite site);

    void logout(
            SysSite site,
            Long userId,
            HttpServletRequest request,
            HttpServletResponse response);

    SysUser regist(
            SysSite site,
            SysUser entity,
            String repassword,
            HttpServletRequest request,
            HttpServletResponse response,
            ModelMap model);
}
