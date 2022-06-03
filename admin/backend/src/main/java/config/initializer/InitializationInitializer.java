package config.initializer;

import com.synccms.common.constants.CmsVersion;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.database.CmsDataSource;
import com.synccms.common.proxy.UsernamePasswordAuthenticator;
import com.synccms.common.servlet.InstallHttpRequestHandler;
import com.synccms.common.servlet.InstallServlet;
import com.synccms.common.tools.PropertiesLoaderUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.util.IntrospectorCleanupListener;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration.Dynamic;
import java.io.File;
import java.io.IOException;
import java.net.Authenticator;
import java.util.Properties;

/**
 *
 * InstallationInitializer
 *
 */
public class InitializationInitializer implements WebApplicationInitializer {
    protected static final Log log = LogFactory.getLog(InitializationInitializer.class);
    /**
     * 서블릿 매핑 경로 설치
     */
    public final static String INSTALL_SERVLET_MAPPING = "/install/";
    /**
     * 점프 프로세서 설치
     */
    public final static HttpRequestHandler INSTALL_HTTPREQUEST_HANDLER = new InstallHttpRequestHandler(INSTALL_SERVLET_MAPPING);

    @Override
    public void onStartup(ServletContext servletcontext) throws ServletException {
        try {
            Properties config = PropertiesLoaderUtils.loadAllProperties(CommonConstants.CMS_CONFIG_FILE);
            initProxy(config);
            if (null == CommonConstants.CMS_FILEPATH) {
                initFilePath(config.getProperty("cms.filePath"), System.getProperty("user.dir"));
            }
            File file = new File(CommonConstants.CMS_FILEPATH + CommonConstants.INSTALL_LOCK_FILENAME);
            if (file.exists()) {
                String version = StringUtils.trim(FileUtils.readFileToString(file, CommonConstants.DEFAULT_CHARSET_NAME));
                if (CmsVersion.getVersion().equals(version)) {
                    CmsVersion.setInitialized(true);
                    CmsDataSource.initDefaultDataSource();
                    log.info("SyncCMS " + CmsVersion.getVersion() + " will start normally in " + CommonConstants.CMS_FILEPATH);
                } else {
                    createInstallServlet(servletcontext, config, InstallServlet.STEP_CHECKDATABASE, version);
                    log.warn("SyncCMS " + CmsVersion.getVersion() + " installer will start in " + CommonConstants.CMS_FILEPATH
                            + ", please upgrade your database!");
                }
            } else {
                createInstallServlet(servletcontext, config, null, null);
                log.warn("SyncCMS " + CmsVersion.getVersion() + " installer will start in " + CommonConstants.CMS_FILEPATH
                        + ", please configure your database information and initialize the database!");
            }
        } catch (IOException e) {
            throw new ServletException(e);
        }
        servletcontext.addListener(IntrospectorCleanupListener.class);
    }

    /**
     * CMS 경로 변수 확인
     *
     * @param filePath
     * @param defaultPath
     *
     */
    public static void initFilePath(String filePath, String defaultPath) {
        File file = new File(System.getProperty("cms.filePath", filePath));
        try {
            file.mkdirs();
        } catch (Exception e) {
        }
        if (!file.exists()) {
            log.warn("SyncCMS " + CmsVersion.getVersion()
                    + " the cms.filePath parameter is invalid , try to use the temporary directory.");
            file = new File(defaultPath, "data/synccms");
        }
        CommonConstants.CMS_FILEPATH = file.getAbsolutePath();
    }

    private static void createInstallServlet(ServletContext servletcontext, Properties config, String startStep, String version) {
        Dynamic registration = servletcontext.addServlet("install", new InstallServlet(config, startStep, version));
        registration.setLoadOnStartup(1);
        registration.addMapping(new String[] { INSTALL_SERVLET_MAPPING });
    }

    /**
     * 프록시 설정
     *
     * @param config
     * @throws IOException
     */
    private static void initProxy(Properties config) throws IOException {
        if ("true".equalsIgnoreCase(System.getProperty("cms.proxy.enable", config.getProperty("cms.proxy.enable", "false")))) {
            Properties proxyProperties = PropertiesLoaderUtils.loadAllProperties(
                    System.getProperty("cms.proxy.configFilePath", config.getProperty("cms.proxy.configFilePath")));
            for (String key : proxyProperties.stringPropertyNames()) {
                System.setProperty(key, proxyProperties.getProperty(key));
            }
            Authenticator.setDefault(new UsernamePasswordAuthenticator(config.getProperty("cms.proxy.userName"),
                    config.getProperty("cms.proxy.password")));
        }
    }
}
