package config.spring;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.core.MybatisConfiguration;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import com.baomidou.mybatisplus.extension.plugins.pagination.optimize.JsqlParserCountOptimize;
import com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean;
import com.synccms.common.cache.CacheEntityFactory;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.constants.Constants;
import com.synccms.common.database.CmsDataSource;
import com.synccms.common.search.MultiTokenFilterFactory;
import com.synccms.common.search.MultiTokenizerFactory;
import com.synccms.common.tools.AnalyzerDictUtils;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.DictionaryReloader;
import com.synccms.common.tools.PropertiesLoaderUtils;
import com.synccms.logic.component.site.DirectiveComponent;
import com.synccms.logic.component.site.MenuMessageComponent;
import com.synccms.logic.component.site.SiteComponent;
import config.initializer.InitializationInitializer;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.*;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import javax.sql.DataSource;
import java.beans.PropertyVetoException;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

/**
 *
 * ????????? ?????? ?????????
 *
 * Spring Configuration Class
 *
 */
@Configuration
@ComponentScan(
        basePackages = {"com.synccms", "config.spring.advice", "com.samsung.ds"},
        excludeFilters = { @ComponentScan.Filter(value = { Controller.class }) }
)
@MapperScan(basePackages = {"com.synccms.logic.mapper", "com.samsung.ds.logic.mapper"})
@PropertySource({
   "classpath:" + CommonConstants.CMS_CONFIG_FILE,
})
@EnableTransactionManagement
@EnableScheduling
public class ApplicationConfig {
    protected final Log log = LogFactory.getLog(getClass());

    @Autowired(required = false)
    private Environment env;

    private String getDatabaseConfigFile()
    {
        String configFile = CmsDataSource.DATABASE_CONFIG_FILENAME;

        for (Constants.Profile profile : Constants.Profile.values()) {
            if(env.acceptsProfiles(Profiles.of(profile.getValue())))
            {
                configFile  = "/database-" + profile.getValue() + ".properties";
            }
        }

        return configFile;
    }

    /**
     * ????????? ??????
     *
     * @return datasource
     * @throws PropertyVetoException
     */
    @Primary
    @Bean
    public DataSource dataSource() throws PropertyVetoException {
        String configFile = getDatabaseConfigFile();

        CmsDataSource bean = new CmsDataSource(getDirPath(CommonConstants.BLANK) + configFile);
        CmsDataSource.initDefaultDataSource();
        return bean;
    }


    /**
     * Hibernate ???????????? ??????
     *
     * @param sessionFactory
     * @return hibernate transaction manager
     */
    @Bean
    public HibernateTransactionManager transactionManager(SessionFactory sessionFactory) {
        HibernateTransactionManager bean = new HibernateTransactionManager();
        bean.setSessionFactory(sessionFactory);
        return bean;
    }

    /**
     * Mybatis ?????? ?????????
     *
     * @param dataSource
     * @return mybatis session factory
     * @throws IOException
     */
    @Primary
    @Bean
    public FactoryBean mybatisSqlSessionFactoryBean(DataSource dataSource) throws IOException {
        MybatisSqlSessionFactoryBean bean = new MybatisSqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        MybatisConfiguration configuration = new MybatisConfiguration();
        configuration.setCacheEnabled(true);
        configuration.setLazyLoadingEnabled(false);

        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        bean.setMapperLocations(resolver.getResources("classpath*:mapper/**/*Mapper.xml"));
        bean.setConfiguration(configuration);

        {
            PaginationInnerInterceptor paginationInnerInterceptor = new PaginationInnerInterceptor(DbType.MARIADB);

            MybatisPlusInterceptor mybatisPlusInterceptor = new MybatisPlusInterceptor();
            mybatisPlusInterceptor.addInnerInterceptor(paginationInnerInterceptor);

            bean.setPlugins(mybatisPlusInterceptor);
        }

        return bean;
    }



    @Bean
    public JsqlParserCountOptimize countSqlParser() throws IOException {
        JsqlParserCountOptimize jsqlParserCountOptimize = new JsqlParserCountOptimize();
        jsqlParserCountOptimize.setOptimizeJoin(true);

        return jsqlParserCountOptimize;
    }


    /**
     * Hibernate ?????? ????????? ?????????
     *
     * @param dataSource
     * @return hibernate session factory
     * @throws PropertyVetoException
     * @throws IOException
     */
    @Bean
    public FactoryBean<SessionFactory> hibernateSessionFactory(DataSource dataSource) throws PropertyVetoException, IOException {
        LocalSessionFactoryBean bean = new LocalSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setPackagesToScan("com.synccms.entities", "com.samsung.ds.entities");
        Properties properties = null;


        for (Constants.Profile profile : Constants.Profile.values()) {
            if(env.acceptsProfiles(Profiles.of(profile.getValue())))
            {
                properties = PropertiesLoaderUtils.loadAllProperties(env.getProperty("cms.hibernate." + profile.getValue() + ".configFilePath"));
            }
        }

        if(properties == null)
        {
            properties = PropertiesLoaderUtils.loadAllProperties(env.getProperty("cms.hibernate.configFilePath"));
        }

        String cacheConfigUri = "hibernate.javax.cache.uri";
        if (properties.containsKey(cacheConfigUri)) {
            properties.setProperty(cacheConfigUri, getClass().getResource(properties.getProperty(cacheConfigUri)).toString());
        }

        MultiTokenizerFactory.init(env.getProperty("cms.tokenizerFactory"), getMap(env.getProperty("cms.tokenizerFactory.parameters")));

        MultiTokenFilterFactory.init(env.getProperty("cms.tokenFilterFactory"), getMap(env.getProperty("cms.tokenFilterFactory.parameters")));
        bean.setHibernateProperties(properties);
        return bean;
    }

    /**
     * ?????? ?????????
     *
     * @return cache factory
     * @throws IOException
     */
    @Bean
    public CacheEntityFactory cacheEntityFactory() throws IOException {
        String configurationResourceName = null;

        for (Constants.Profile profile : Constants.Profile.values()) {
            if(env.acceptsProfiles(Profiles.of(profile.getValue())))
            {
                configurationResourceName = env.getProperty("cms.cache." + profile.getValue() + ".configFilePath");
                break;
            }
        }

        if(configurationResourceName == null)
        {
            configurationResourceName = env.getProperty("cms.cache.configFilePath");
        }

        CacheEntityFactory bean = new CacheEntityFactory(configurationResourceName);
        return bean;
    }

    /**
     * ?????????
     *
     * @param menuMessageComponent
     *
     * @return message source
     */
    @Bean
    public MessageSource messageSource(MenuMessageComponent menuMessageComponent) {
        ResourceBundleMessageSource bean = new ResourceBundleMessageSource();
        bean.setBasenames(StringUtils.split(env.getProperty("cms.language"), CommonConstants.COMMA_DELIMITED));
        bean.setCacheSeconds(300);
        bean.setUseCodeAsDefaultMessage(true);
        bean.setParentMessageSource(menuMessageComponent);
        return bean;
    }

    /**
     * ?????? ?????? ??????
     *
     * @return directive component
     */
    @Bean
    public DirectiveComponent directiveComponent() {
        DirectiveComponent bean = new DirectiveComponent();
        bean.setDirectiveRemoveRegex(env.getProperty("cms.directiveRemoveRegex"));
        bean.setMethodRemoveRegex(env.getProperty("cms.methodRemoveRegex"));
        bean.setDirectivePrefix(env.getProperty("cms.directivePrefix"));
        return bean;
    }

    /**
     * ????????? ?????? ??????
     *
     * @return site component
     */
    @Bean
    public SiteComponent siteComponent() {
        SiteComponent bean = new SiteComponent();
        bean.setRootPath(getDirPath(CommonConstants.BLANK));

        String webFilePath = env.getProperty("cms.webFilePath");
        if(StringUtils.isNotEmpty(webFilePath))
        {
            bean.setWebFilePath(webFilePath);
        }

        bean.setMasterSiteIds(env.getProperty("cms.masterSiteIds"));
        bean.setDefaultSiteId(Short.parseShort(env.getProperty("cms.defaultSiteId")));
        if ("korean".equalsIgnoreCase(env.getProperty("cms.tokenizerFactory"))) {
            String dictDirPath = getDirPath(AnalyzerDictUtils.DIR_DICT);
            File dictDir = new File(dictDirPath);
            if (dictDir.exists() && dictDir.isDirectory()) {
                DictionaryReloader.reload(dictDirPath);// ????????? ?????? ????????? ??????
            }
            bean.setDictEnable(true);
        }
        return bean;
    }

    /**
     * FreeMarker ?????? ?????????
     *
     * @return freemarker configuration factory
     * @throws IOException
     */
    @Bean
    public FreeMarkerConfigurer freeMarkerConfigurer() throws IOException {
        FreeMarkerConfigurer bean = new FreeMarkerConfigurer();
        bean.setTemplateLoaderPath("classpath:/templates/");
        Properties properties = PropertiesLoaderUtils.loadAllProperties(env.getProperty("cms.freemarker.configFilePath"));
        if (CommonUtils.notEmpty(env.getProperty("cms.defaultLocale"))) {
            properties.put("locale", env.getProperty("cms.defaultLocale"));
        }
        bean.setFreemarkerSettings(properties);
        return bean;
    }

    /**
     *
     * ?????? ?????? ??????
     *
     * @return task scheduler factory
     */
    @Bean
    public SchedulerFactoryBean scheduler() {
        SchedulerFactoryBean bean = new SchedulerFactoryBean();
        Properties properties = new Properties();
        properties.setProperty(SchedulerFactoryBean.PROP_THREAD_COUNT, env.getProperty("cms.task.threadCount"));
        bean.setQuartzProperties(properties);
        return bean;
    }

    /**
     * ?????? ????????? ?????????
     *
     * @return file upload resolver
     * @throws IOException
     */
    @Bean
    public CommonsMultipartResolver multipartResolver() throws IOException {
        CommonsMultipartResolver bean = new CommonsMultipartResolver();
        bean.setDefaultEncoding(CommonConstants.DEFAULT_CHARSET_NAME);
        bean.setMaxUploadSize(Long.parseLong(env.getProperty("cms.multipart.maxUploadSize")) * 1024 * 1024);
        bean.setUploadTempDir(new FileSystemResource(getDirPath("/tmp/")));
        return bean;
    }

    /**
     * RequestBody, ResponseBody??? ???????????? ??? ???????????? json, Jsonp ????????? ?????? ?????????
     *
     * @return json???jsonp message converter , support for
     *         requestbody???responsebody
     */
    @Bean
    public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
        return new MappingJackson2HttpMessageConverter();
    }

    /**
     * @param property
     * @return the map
     */
    private Map<String, String> getMap(String property) {
        Map<String, String> parametersMap = new HashMap<>();
        if (CommonUtils.notEmpty(property)) {
            String[] parameters = StringUtils.split(property, CommonConstants.COMMA_DELIMITED);
            for (String parameter : parameters) {
                String[] values = StringUtils.split(parameter, "=", 2);
                if (values.length == 2) {
                    parametersMap.put(values[0], values[1]);
                } else if (values.length == 1) {
                    parametersMap.put(values[0], null);
                }
            }
        }
        return parametersMap;
    }

    /**
     * @param path
     * @return the cms data path
     */
    private String getDirPath(String path) {
        if (null == CommonConstants.CMS_FILEPATH) {
            InitializationInitializer.initFilePath(env.getProperty("cms.filePath"), System.getProperty("user.dir"));
        }
        File dir = new File(CommonConstants.CMS_FILEPATH + path);
        dir.mkdirs();
        return dir.getAbsolutePath();
    }


}
