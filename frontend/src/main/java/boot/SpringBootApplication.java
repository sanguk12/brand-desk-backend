package boot;


import com.synccms.common.constants.Constants;
import config.initializer.*;
import org.apache.catalina.connector.Connector;
import org.apache.catalina.valves.AccessLogValve;
import org.apache.catalina.valves.RemoteIpValve;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.web.embedded.jetty.JettyServletWebServerFactory;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.Ssl;
import org.springframework.boot.web.server.WebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.server.AbstractServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Import;

import com.synccms.common.constants.CommonConstants;

import config.spring.CmsConfig;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import org.springframework.http.HttpStatus;

import java.time.Duration;
import java.util.Locale;

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

    /**
     * @return servlet container
     */
    @Bean
    public ServletWebServerFactory servletContainer() {
        String server = System.getProperty("cms.server");
        Integer port = Integer.valueOf(System.getProperty("cms.port", "8080"));
        String keyStore = env.getProperty("cms.keyStore");

        AbstractServletWebServerFactory factory = null;
        if ("jetty".equalsIgnoreCase(server)) {
            factory = new JettyServletWebServerFactory();
        } else if ("undertow".equalsIgnoreCase(server)) {
            factory = new UndertowServletWebServerFactory();
        } else {
            TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
            RemoteIpValve valve = new RemoteIpValve();
            valve.setProtocolHeader("X-Forwarded-Proto");
            tomcat.addEngineValves(valve);

            String ajpEnable = System.getProperty("cms.ajp.enable");
            if( StringUtils.equalsIgnoreCase(ajpEnable, "Y")
                    || StringUtils.equalsIgnoreCase(ajpEnable, "Yes")
                    || StringUtils.equalsIgnoreCase(ajpEnable, "true")) {
                tomcat.addAdditionalTomcatConnectors(createAjpConnector());
            }

            if(StringUtils.isNotEmpty(keyStore)) {

                String keyStorePassword = env.getProperty("cms.keyStorePassword");
                Ssl ssl = new Ssl();
                ssl.setEnabled(true);

                ssl.setKeyStore(keyStore);
                ssl.setKeyStoreType("JKS");
                ssl.setKeyPassword(keyStorePassword);

                tomcat.setSsl(ssl);

                String additionalPort = System.getProperty("cms.additional.port");
                if(StringUtils.isNotEmpty(additionalPort)) {
                    Connector connector = new Connector("org.apache.coyote.http11.Http11NioProtocol");
                    connector.setPort(Integer.valueOf(System.getProperty("cms.additional.port", "80")));

                    connector.setScheme("http");
                    connector.setSecure(false);

                    tomcat.addAdditionalTomcatConnectors(connector);
                }

            }

            if(BooleanUtils.toBoolean(System.getProperty("cms.accessLog.enable"))) {

                String directory = System.getProperty("cms.accessLog.directory");
                if(StringUtils.isEmpty(directory)) directory = "D:/logs/";

                String pattern = System.getProperty("cms.accessLog.pattern");
                if(StringUtils.isEmpty(pattern)) pattern = "%h %A %l %u %t \"%r\" %s %p %S %b \"%{Referer}i\" \"%{User-Agent}i\"";

                final AccessLogValve accessLogValve = new AccessLogValve();
                accessLogValve.setPattern(pattern);
                accessLogValve.setDirectory(directory);
                accessLogValve.setPrefix("localhost_access_log");
                accessLogValve.setRotatable(true);
                accessLogValve.setFileDateFormat("yyyy-MM-dd-HH");
                accessLogValve.setSuffix(".log");
                accessLogValve.setCondition("ignoreLogging");
                tomcat.addContextValves(accessLogValve);
            }

            tomcat.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/error.html"));
            tomcat.addErrorPages(new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/error.html"));

            factory = tomcat;
        }


        factory.setPort(port);
        factory.setContextPath(System.getProperty("cms.contextPath", "/synccms"));
        factory.setDisplayName("SyncCMS");
        factory.setRegisterDefaultServlet(true);

        factory.getSession().setPersistent(true);

        return factory;
    }

    private Connector createAjpConnector() {
        int ajpPort = NumberUtils.toInt(System.getProperty("cms.ajp.port"), 8009);
        Connector ajpConnector = new Connector("AJP/1.3");
        ajpConnector.setPort(ajpPort);
        ajpConnector.setSecure(false);
        ajpConnector.setAllowTrace(false);
        ajpConnector.setScheme("http");
        return ajpConnector;
    }


    /**
     * @return web servlet initializer
     */
    @Bean
    public ServletContextInitializer webInitializer() {
        return servletContext -> new WebInitializer().onStartup(servletContext);
    }


    /**
     * @return api servlet initializer
     */
    @Bean
    public ServletContextInitializer apiInitializer() {
        return servletContext -> new ApiInitializer().onStartup(servletContext);
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
