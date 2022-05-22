package com.samsung.ds.advice;

import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;


public class CustomRequestMappingHandlerAdapter extends RequestMappingHandlerAdapter {
    @Override
    public void afterPropertiesSet() {
        super.afterPropertiesSet();
        List<HandlerMethodArgumentResolver> argumentResolvers = super.getArgumentResolvers();
        List<HandlerMethodArgumentResolver> newArgumentResolvers = new LinkedList<>();
        newArgumentResolvers.add(new LoginUserArgumentResolver());
        newArgumentResolvers.addAll(argumentResolvers);
        super.setArgumentResolvers(Collections.unmodifiableList(newArgumentResolvers));
    }
}
