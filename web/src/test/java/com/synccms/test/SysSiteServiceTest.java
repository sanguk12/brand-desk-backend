package com.synccms.test;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.synccms.common.constants.CmsVersion;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.tools.CommonUtils;
import com.synccms.entities.cms.CmsContent;
import com.synccms.entities.sys.SysSite;
import com.synccms.logic.service.cms.CmsContentService;
import com.synccms.logic.service.sys.SysSiteService;
import com.synccms.logic.service.tools.SqlService;

import config.spring.ApplicationConfig;

/**
 *
 * SysSiteServiceTest
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class SysSiteServiceTest {
    @Autowired
    private CmsContentService cmsService;
    @Autowired
    private SysSiteService siteService;
    @Autowired
    private SqlService sqlService;

    @BeforeClass
    public static void init() {
        // 설치 프로그램을 입력하지 마십시오
        CmsVersion.setInitialized(true);
        // 데이터 디렉토리 주소,이 디렉토리에는 database.properties가 있어야합니다.
        CommonConstants.CMS_FILEPATH = "D:\\Users\\repository\\SyncCMS\\data\\synccms";
    }


    /**
     *
     */
    @SuppressWarnings("unchecked")
    @Test
    public void queryTest() {
        PageHandler page = siteService.getPage(null, null, null, null, null);
        for (SysSite site : (List<SysSite>) page.getList()) {
            System.out.println(site.getName());
        }
    }

    /**
     *
     */
    @Test
    public void mybatisTest() {
        List<Map<String, Object>> list = sqlService.select("select * from sys_site");
        for (Map<String, Object> map : list) {
            System.out.println(map.get("name"));
        }
    }
}
