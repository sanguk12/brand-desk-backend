package boot;


import com.synccms.common.constants.CmsVersion;
import com.synccms.common.constants.CommonConstants;
import config.initializer.AdminInitializer;
import config.initializer.ApiInitializer;
import config.initializer.InitializationInitializer;
import config.initializer.ResourceInitializer;
import config.spring.CmsConfig;
import org.apache.catalina.valves.RemoteIpValve;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.web.embedded.jetty.JettyServletWebServerFactory;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.server.AbstractServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Import;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;

import javax.annotation.PostConstruct;
import java.nio.charset.Charset;


/**
 *
 * SpringBootApplication
 *
 */
@Configuration
@ServletComponentScan
@Import({CmsConfig.class})
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class SpringBootApplication {
    @Autowired(required = false)
    private Environment env;

    /**
     * @param args
     */
    public static void main(String[] args) {
        CommonConstants.applicationContext = SpringApplication.run(SpringBootApplication.class, args);
    }

    @PostConstruct
    public void init()
    {
        CmsVersion.setMaster(StringUtils.equals(System.getProperty("cms.master"), "Y"));
        CmsVersion.setLocal(StringUtils.equals(System.getProperty("cms.local"), "Y"));
    }

    /**
     * @return servlet container
     */
    @Bean
    public ServletWebServerFactory servletContainer() {
        String server = System.getProperty("cms.server");
        Integer port = Integer.valueOf(System.getProperty("cms.port", "8081"));

        String contextPath = System.getProperty("cms.contextPath", "/synccms");

        AbstractServletWebServerFactory factory = null;
        if ("jetty".equalsIgnoreCase(server)) {
            factory = new JettyServletWebServerFactory();
        } else if ("undertow".equalsIgnoreCase(server)) {
            factory = new UndertowServletWebServerFactory();
        } else {
            TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
            tomcat.addConnectorCustomizers(connector -> {
                connector.setProperty("relaxedQueryChars", "/<>[\\]^`{|}");
                connector.setProperty("compression", "on");
                // Add json and xml mime types, as they're not in the mimetype list by default
                connector.setProperty("compressableMimeType", "text/html,text/xml,text/plain,application/json,application/xml");
           });

            RemoteIpValve valve = new RemoteIpValve();
            valve.setProtocolHeader("X-Forwarded-Proto");
            tomcat.addEngineValves(valve);


            tomcat.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, contextPath + "/admin/404.html"));
            tomcat.addErrorPages(new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, contextPath + "/admin/error.html"));
            tomcat.addErrorPages(new ErrorPage(contextPath + "/admin/error.html"));

            tomcat.setUriEncoding(Charset.forName("UTF-8"));

            factory = tomcat;
        }


        factory.setPort(port);
        factory.setContextPath(contextPath);
        factory.setDisplayName("SyncCMS");
        factory.getSession().setPersistent(true);
        factory.setRegisterDefaultServlet(true);

        return factory;
    }


    /**
     * @return api servlet initializer
     */
    @Bean
    public ServletContextInitializer apiInitializer() {
        return servletContext -> new ApiInitializer().onStartup(servletContext);
    }

    /**
     * @return admin servlet initializer
     */
    @Bean
    public ServletContextInitializer adminInitializer() {
        return servletContext -> new AdminInitializer().onStartup(servletContext);
    }


    /**
     * @return install servlet initializer
     */
    @Bean
    public ServletContextInitializer installationInitializer() {
        return servletContext -> new InitializationInitializer().onStartup(servletContext);
    }

    /**
     * @return resource servlet initializer
     */
    @Bean
    public ServletContextInitializer resourceInitializer() {
        return servletContext -> new ResourceInitializer().onStartup(servletContext);
    }
}
