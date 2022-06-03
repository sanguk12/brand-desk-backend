package config.spring;

import com.synccms.common.servlet.WebFileHttpRequestHandler;
import com.synccms.logic.component.config.CorsConfigComponent;
import com.synccms.logic.component.site.SiteComponent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.servlet.resource.DefaultServletHttpRequestHandler;

/**
 * CMS 루트 설정 클래스
 *
 * Spring Config Class
 *
 */
@Import({ApplicationConfig.class})
public class CmsConfig {

    /**
     * 리소스 프로세서
     *
     * @return default servlet httprequesthandler
     */
    @Bean
    public HttpRequestHandler defaultServlet() {
        DefaultServletHttpRequestHandler bean = new DefaultServletHttpRequestHandler();
        return bean;
    }

    /**
     * 사이트 정적 자원 프로세서
     *
     * @param siteComponent
     * @return static resource servlet httprequesthandler
     */
    @Bean
    public HttpRequestHandler webfileServlet(SiteComponent siteComponent, CorsConfigComponent corsConfigComponent) {
        WebFileHttpRequestHandler bean = new WebFileHttpRequestHandler(siteComponent, corsConfigComponent, true);
        return bean;
    }
}
