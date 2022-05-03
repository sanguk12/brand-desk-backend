package config.spring;

import java.beans.PropertyVetoException;
import java.io.File;
import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.sql.DataSource;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.core.MybatisConfiguration;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import com.baomidou.mybatisplus.extension.plugins.pagination.optimize.JsqlParserCountOptimize;
import com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean;
import com.synccms.common.constants.Constants;
import com.synccms.common.tools.DictionaryReloader;
import com.synccms.common.tools.PropertiesLoaderUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.text.StrSubstitutor;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.commons.text.StringSubstitutor;
import org.hibernate.SessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.*;
import org.springframework.context.event.EventListener;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.data.transaction.ChainedTransactionManager;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import com.synccms.common.cache.CacheEntityFactory;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.database.CmsDataSource;
import com.synccms.common.search.MultiTokenFilterFactory;
import com.synccms.common.search.MultiTokenizerFactory;
import com.synccms.common.tools.AnalyzerDictUtils;
import com.synccms.common.tools.CommonUtils;
import com.synccms.logic.component.site.DirectiveComponent;
import com.synccms.logic.component.site.MenuMessageComponent;
import com.synccms.logic.component.site.SiteComponent;

import config.initializer.InitializationInitializer;

/**
 *
 * 스프링 설정 클래스
 *
 * Spring Configuration Class
 *
 */
@Configuration
@ComponentScan(
        basePackages = {"com.synccms", "com.skmagic"},
        excludeFilters = { @ComponentScan.Filter(value = { Controller.class }) }
)
@MapperScan(basePackages = {"com.synccms.logic.mapper", "com.skmagic.logic.mapper"})
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
     * 데이터 소스
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
     * 트랜잭션 관리
     *
     * @param sessionFactory
     * @return hibernate transaction manager
     */
    @Bean
    @Primary
    public ChainedTransactionManager transactionManager(SessionFactory sessionFactory, DataSource dataSource) {
        ChainedTransactionManager bean = new ChainedTransactionManager(
                hibernateTransactionManager(sessionFactory),
                mybatisTransactionManager(dataSource)
        );

        return bean;
    }

    /**
     * Hibernate 트랜잭션 관리
     *
     * @param sessionFactory
     * @return hibernate transaction manager
     */
    @Bean
    public HibernateTransactionManager hibernateTransactionManager(SessionFactory sessionFactory) {
        HibernateTransactionManager bean = new HibernateTransactionManager();
        bean.setSessionFactory(sessionFactory);
        return bean;
    }

    @Bean
    public DataSourceTransactionManager mybatisTransactionManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }


    /**
     * Mybatis 세션 팩토리
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


    @Bean("redisProperties")
    public Properties redisProperties(@Qualifier("hibernateProperties") Properties hibernateProperties) throws IOException {
        Properties properties = new Properties();
        String configurationResourceName = (String) hibernateProperties.get("hibernate.redis.configurationResourceName");
        if (null != configurationResourceName) {
            return  PropertiesLoaderUtils.loadAllProperties(configurationResourceName);
        }

        return properties;
    }


    @Bean("hibernateProperties")
    public Properties hibernateProperties() throws IOException {
        Properties properties = null;


        for (Constants.Profile profile : Constants.Profile.values()) {
            if(env.acceptsProfiles(Profiles.of(profile.getValue())))
            {
                properties = PropertiesLoaderUtils.loadAllProperties(env.getProperty("cms.hibernate." + profile.getValue() + ".configFilePath"));
                break;
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

        return properties;

    }


    /**
     * Hibernate 세션 팩토리 클래스
     *
     * @param dataSource
     * @return hibernate session factory
     * @throws PropertyVetoException
     * @throws IOException
     */
    @Bean
    public FactoryBean<SessionFactory> hibernateSessionFactory(
            DataSource dataSource,
            @Qualifier("hibernateProperties") Properties properties
    ) throws PropertyVetoException, IOException {
        LocalSessionFactoryBean bean = new LocalSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setPackagesToScan("com.synccms.entities");

        MultiTokenizerFactory.init(env.getProperty("cms.tokenizerFactory"), getMap(env.getProperty("cms.tokenizerFactory.parameters")));

        MultiTokenFilterFactory.init(env.getProperty("cms.tokenFilterFactory"), getMap(env.getProperty("cms.tokenFilterFactory.parameters")));
        bean.setHibernateProperties(properties);
        return bean;
    }

    /**
     * 캐시 팩토리
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
     * I18N
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
     * 명령 설정 요소
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
     * 사이트 설정 요소
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
                DictionaryReloader.reload(dictDirPath);// 사용자 정의 동의어 사전
            }
            bean.setDictEnable(true);
        }
        return bean;
    }

    /**
     * FreeMarker 설정 팩토리
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
     * 미션 기획 공장
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
     * 파일 업로드 솔루션
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
     * RequestBody, ResponseBody를 지원하는 데 사용되는 json, Jsonp 메시지 변환 어댑터
     *
     * @return json、jsonp message converter , support for
     *         requestbody、responsebody
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
