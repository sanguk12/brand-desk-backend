package config.spring;

import java.util.List;
import java.util.Locale;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.core.Ordered;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;

import com.synccms.common.handler.FullBeanNameGenerator;
import com.synccms.common.interceptor.CorsInterceptor;
import com.synccms.common.interceptor.CsrfInterceptor;
import com.synccms.common.interceptor.WebContextInterceptor;
import com.synccms.common.view.DefaultWebFreeMarkerView;
import com.synccms.common.view.WebFreeMarkerView;
import com.synccms.common.view.WebFreeMarkerViewResolver;
import com.synccms.logic.component.cache.CacheComponent;
import com.synccms.logic.component.template.TemplateComponent;

/**
 *
 * WebConfig WebServlet 설정 클래스
 *
 */
@Configuration
@EnableWebMvc
@ComponentScan(
        basePackages = {
                "com.synccms.controller.web",
                "com.samsung.ds.controller.web"

        },
        useDefaultFilters = false,
        includeFilters = {
            @ComponentScan.Filter(value = { Controller.class })
        },
        nameGenerator = FullBeanNameGenerator.class
)
public class WebConfig implements WebMvcConfigurer {
    protected Log log = LogFactory.getLog(getClass());

    @Autowired
    private Environment env;

    @Autowired
    private WebContextInterceptor webInterceptor;

    @Autowired
    private CorsInterceptor corsInterceptor;
    @Autowired
    private CacheComponent cacheComponent;


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/ui/**")
                .addResourceLocations("classpath:/public/")
                .setCachePeriod(20);
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
    }

    @Bean
    public LocaleResolver localeResolver(Environment env) {
        CookieLocaleResolver localeResolver = new CookieLocaleResolver();
        localeResolver.setCookieName("SYNCCMS_LOCALE");
        localeResolver.setCookieMaxAge(30 * 24 * 3600);
        String defaultLocale = env.getProperty("cms.defaultLocale");
        if (!"auto".equalsIgnoreCase(defaultLocale)) {
            localeResolver.setDefaultLocale(Locale.forLanguageTag(defaultLocale));
        }
        return localeResolver;
    }

    /**
     * 레이어 리졸버보기
     *
     * @return default web viewresolver
     */
    @Bean
    public ViewResolver defaultWebViewResolver() {
        FreeMarkerViewResolver bean = new FreeMarkerViewResolver();
        bean.setOrder(1);
        bean.setViewClass(DefaultWebFreeMarkerView.class);
        bean.setPrefix("/web/");
        bean.setContentType("text/html;charset=UTF-8");
        cacheComponent.registerCachingViewResolverList(bean);
        return bean;
    }

    /**
     * 레이어 리졸버보기
     *
     * @param templateComponent
     * @return web viewresolver
     */
    @Bean
    public WebFreeMarkerViewResolver webViewResolver(TemplateComponent templateComponent) {
        WebFreeMarkerViewResolver bean = new WebFreeMarkerViewResolver();
        bean.setOrder(0);
        bean.setConfiguration(templateComponent.getWebConfiguration());
        bean.setViewClass(WebFreeMarkerView.class);
        bean.setContentType("text/html;charset=UTF-8");
        cacheComponent.registerCachingViewResolverList(bean);
        return bean;
    }

    /**
     * 인터셉터
     *
     * @return web servlet interceptor
     */
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
