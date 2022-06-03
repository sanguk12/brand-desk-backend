package config.initializer;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import com.synccms.common.base.BaseServletInitializer;
import com.synccms.common.servlet.WebDispatcherServlet;

import config.spring.WebConfig;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

/**
 *
 * WebInitializer Servlet3.0 엔지니어링 입구
 *
 */
public class WebInitializer extends BaseServletInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        super.onStartup(servletContext);
    }

    @Override
    protected DispatcherServlet createDispatcherServlet(WebApplicationContext servletAppContext) {
        return new WebDispatcherServlet(servletAppContext, InitializationInitializer.INSTALL_HTTPREQUEST_HANDLER);
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[] { WebConfig.class };
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] { "/" };
    }
}
