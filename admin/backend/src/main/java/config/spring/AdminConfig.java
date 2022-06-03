package config.spring;

import com.synccms.common.handler.FullBeanNameGenerator;
import com.synccms.common.interceptor.AdminContextInterceptor;
import com.synccms.common.interceptor.CsrfInterceptor;
import com.synccms.common.view.AdminFreeMarkerView;
import com.synccms.logic.component.cache.CacheComponent;
import com.synccms.logic.component.template.TemplateComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;

import java.util.Locale;

/**
 * AdminServlet 설정 클래스
 *
 * AdminConfig
 *
 */
@Configuration
@EnableWebMvc
@ComponentScan(
        basePackages = {
                "com.synccms.controller.admin"
        },
        useDefaultFilters = false,
        includeFilters = {
            @ComponentScan.Filter(value = { Controller.class })
        },
        nameGenerator = FullBeanNameGenerator.class)
public class AdminConfig implements WebMvcConfigurer {
    /**
     * 관리 컨텍스트 경로 관리 컨텍스트 경로
     */
    public static final String ADMIN_CONTEXT_PATH = "/admin";

    @Autowired
    private CacheComponent cacheComponent;
    @Autowired
    private AdminContextInterceptor adminInterceptor;


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
        localeResolver.setCookieName("cms.locale");
        localeResolver.setCookieMaxAge(30 * 24 * 3600);
        String defaultLocale = env.getProperty("cms.defaultLocale");
        if (!"auto".equalsIgnoreCase(defaultLocale)) {
            localeResolver.setDefaultLocale(Locale.forLanguageTag(defaultLocale));
        }
        return localeResolver;
    }

    /**
     * 뷰 레이어 파서, SpringBoot는 JSP 로딩 경로를 지원하지 않습니다.
     *
     * @return jsp view resolver
     */
    @Bean
    public ViewResolver jspViewResolver() {
        InternalResourceViewResolver bean = new InternalResourceViewResolver();
        bean.setOrder(1);
        bean.setPrefix("/WEB-INF/jsp/");
        bean.setSuffix(".jsp");
        bean.setContentType("text/html;charset=UTF-8");
        cacheComponent.registerCachingViewResolverList(bean);
        return bean;
    }

    /**
     * 레이어 리졸버보기
     *
     * @return FreeMarker view resolver
     */
    @Bean
    public ViewResolver viewResolver() {
        FreeMarkerViewResolver bean = new FreeMarkerViewResolver();
        bean.setOrder(0);
        bean.setViewClass(AdminFreeMarkerView.class);
        bean.setPrefix("/admin/");
        bean.setSuffix(".html");
        bean.setContentType("text/html;charset=UTF-8");
        cacheComponent.registerCachingViewResolverList(bean);
        return bean;
    }

    /**
     * 인터셉터
     *
     * @param templateComponent
     *
     * @return admin servlet interceptor
     */
    @Bean
    public AdminContextInterceptor adminInterceptor(TemplateComponent templateComponent) {
        templateComponent.setAdminContextPath(ADMIN_CONTEXT_PATH);
        AdminContextInterceptor bean = new AdminContextInterceptor();
        bean.setAdminContextPath(ADMIN_CONTEXT_PATH);
        bean.setLoginUrl("/login.html");
        bean.setNeedNotLoginUrls(new String[] { "/logout", "/changeLocale", "/login", "/api/logout", "/api/changeLocale", "/api/login" });
        bean.setNeedNotAuthorizedUrls(new String[] { "/index", "/main", "/menus", "/common/", "/isWeak" });
        return bean;
    }

    @Bean
    public CsrfInterceptor csrfInterceptor() {
        return new CsrfInterceptor(true);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(csrfInterceptor());
        registry.addInterceptor(adminInterceptor);
    }
}
