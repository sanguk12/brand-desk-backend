package config.spring;

import com.synccms.common.interceptor.CsrfInterceptor;
import com.synccms.common.interceptor.WebContextInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.config.annotation.*;

import com.synccms.common.handler.FullBeanNameGenerator;
import com.synccms.common.interceptor.CorsInterceptor;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

/**
 *
 * ApiConfig ApiServlet 설정 클래스
 *
 */
@Configuration
@ComponentScan(
        basePackages = {
                "com.synccms.controller.api"
        },
        useDefaultFilters = false,
        includeFilters = {
            @ComponentScan.Filter(value = { Controller.class })
        },
        nameGenerator = FullBeanNameGenerator.class)
public class ApiConfig extends WebMvcConfigurationSupport {
    @Autowired
    private CorsInterceptor corsInterceptor;

    @Autowired
    private WebContextInterceptor webInterceptor;


    @Bean
    public WebContextInterceptor webInterceptor() {
        return new WebContextInterceptor();
    }

    @Bean
    public CsrfInterceptor csrfInterceptor() {
        return new CsrfInterceptor(false);
    }



    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(csrfInterceptor());
        registry.addInterceptor(webInterceptor);
        registry.addInterceptor(corsInterceptor);
    }

}
