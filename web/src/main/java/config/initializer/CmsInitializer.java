package config.initializer;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.AbstractContextLoaderInitializer;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;

import com.synccms.common.constants.CommonConstants;

import config.spring.CmsConfig;

/**
 * CMS 초기화
 *
 * Management Initializer
 *
 */
public class CmsInitializer extends AbstractContextLoaderInitializer implements WebApplicationInitializer {

    @Override
    protected WebApplicationContext createRootApplicationContext() {
        AnnotationConfigWebApplicationContext rootAppContext = new AnnotationConfigWebApplicationContext();
        CommonConstants.applicationContext = rootAppContext;
        rootAppContext.register(CmsConfig.class);
        return rootAppContext;
    }
}
