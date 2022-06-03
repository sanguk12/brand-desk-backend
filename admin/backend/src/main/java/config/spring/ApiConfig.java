package config.spring;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.deser.std.DateDeserializers;
import com.fasterxml.jackson.databind.ser.std.DateSerializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalTimeSerializer;
import com.synccms.common.handler.FullBeanNameGenerator;
import com.synccms.common.interceptor.AdminContextInterceptor;
import com.synccms.common.interceptor.CorsInterceptor;
import com.synccms.common.interceptor.CsrfInterceptor;
import com.synccms.logic.component.template.TemplateComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * ApiConfig ApiServlet 설정 클래스
 *
 */
@Configuration
@EnableWebMvc
@ComponentScan(
        basePackages = {
                "com.synccms.controller.api.common",
                "com.synccms.controller.api.admin",
        },
        useDefaultFilters = false,
        includeFilters = {
            @ComponentScan.Filter(value = { RestController.class })
        },
        nameGenerator = FullBeanNameGenerator.class)

public class ApiConfig implements WebMvcConfigurer {
    @Autowired
    private CorsInterceptor corsInterceptor;
    @Autowired
    private AdminContextInterceptor adminInterceptor;

    public static final String DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";
    public static final String DATE_FORMAT = "yyyy-MM-dd";
    public static final String TIME_FORMAT = "HH:mm:ss";

    @Bean
    public Jackson2ObjectMapperBuilder jackson2ObjectMapperBuilder() {
        return new Jackson2ObjectMapperBuilder()
                .failOnUnknownProperties(false) // SpringBoot default
                .featuresToDisable(MapperFeature.DEFAULT_VIEW_INCLUSION) // SpringBoot default
                .featuresToEnable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS) // SpringBoot default
                .serializerByType(LocalDateTime.class, new LocalDateTimeSerializer(DateTimeFormatter.ofPattern(DATE_TIME_FORMAT)))
                .serializerByType(LocalDate.class, new LocalDateSerializer(DateTimeFormatter.ofPattern(DATE_FORMAT)))
                .serializerByType(LocalTime.class, new LocalTimeSerializer(DateTimeFormatter.ofPattern(TIME_FORMAT)))
                .deserializerByType(LocalDateTime.class, new LocalDateTimeDeserializer(DateTimeFormatter.ofPattern(DATE_TIME_FORMAT)))
                .deserializerByType(LocalDate.class, new LocalDateDeserializer(DateTimeFormatter.ofPattern(DATE_FORMAT)))
                .deserializerByType(LocalTime.class, new LocalTimeDeserializer(DateTimeFormatter.ofPattern(TIME_FORMAT)))
                .serializerByType(Date.class, new DateSerializer(false, new SimpleDateFormat(DATE_TIME_FORMAT)))
                .deserializerByType(Date.class, new DateDeserializers.DateDeserializer(
                        DateDeserializers.DateDeserializer.instance,
                        new SimpleDateFormat(DATE_TIME_FORMAT), DATE_TIME_FORMAT));
    }

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        WebMvcConfigurer.super.configureMessageConverters(converters);
        ObjectMapper objectMapper = jackson2ObjectMapperBuilder().build();
        converters.add(0, new MappingJackson2HttpMessageConverter(objectMapper));
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
        templateComponent.setAdminContextPath(AdminConfig.ADMIN_CONTEXT_PATH);
        AdminContextInterceptor bean = new AdminContextInterceptor();
        bean.setAdminContextPath(AdminConfig.ADMIN_CONTEXT_PATH);
        bean.setLoginUrl("/login.html");
        bean.setNeedNotLoginUrls(new String[] {
                "/logout",
                "/changeLocale",
                "/login",
                "/api/logout",
                "/api/changeLocale",
                "/api/login" });
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
        registry.addInterceptor(corsInterceptor);
    }
}
