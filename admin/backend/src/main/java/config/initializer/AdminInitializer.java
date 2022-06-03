package config.initializer;

import com.synccms.common.base.BaseServletInitializer;
import com.synccms.common.servlet.AdminDispatcherServlet;
import config.spring.AdminConfig;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

/**
 * <p>
 * 관리 배경 초기화
 * </p>
 *
 * <p>
 * Admin  Initializer
 * </p>
 *
 */
public class AdminInitializer extends BaseServletInitializer implements WebApplicationInitializer {

    @Override
    protected DispatcherServlet createDispatcherServlet(WebApplicationContext servletAppContext) {
        return new AdminDispatcherServlet(servletAppContext, InitializationInitializer.INSTALL_HTTPREQUEST_HANDLER);
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[] {AdminConfig.class };
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] { AdminConfig.ADMIN_CONTEXT_PATH + "/*" };
    }

}
