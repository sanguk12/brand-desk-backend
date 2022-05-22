package com.samsung.ds.advice;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.MethodParameter;
import org.springframework.web.servlet.mvc.method.annotation.SessionAttributeMethodArgumentResolver;

import javax.servlet.ServletException;


public class LoginUserArgumentResolver extends SessionAttributeMethodArgumentResolver
{
    protected static final Log log = LogFactory.getLog(LoginUserArgumentResolver.class);

    @Override
    protected void handleMissingValue(String name, MethodParameter parameter) throws ServletException {
        if(StringUtils.equals(name, "user"))
        {
            throw new AuthorizationException();
        }else{
            super.handleMissingValue(name, parameter);
        }
    }
}
