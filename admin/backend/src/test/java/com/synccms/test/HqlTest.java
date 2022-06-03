package com.synccms.test;

import com.synccms.common.constants.CmsVersion;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.logic.service.tools.HqlService;
import config.spring.ApplicationConfig;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * SysSiteServiceTest
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = ApplicationConfig.class)
public class HqlTest {
    @Autowired
    HqlService hqlService;

    @BeforeClass
    public static void init() {
        // 설치 프로그램을 입력하지 마십시오
        CmsVersion.setInitialized(true);
        // 데이터 디렉토리 주소,이 디렉토리에는 database.properties가 있어야합니다.
        CommonConstants.CMS_FILEPATH = "E:\\repository\\SyncCMS\\data\\synccms";
    }

    /**
     *
     */
    @Test
    public void beanTest() {
        Map<String, Object> parameters = new HashMap<>();
        String hql = "select new com.synccms.test.Bean(content.id,content.title,category.name) from CmsContent content,CmsCategory category where content.categoryId=category.id";
        PageHandler page = hqlService.getPage(hql, parameters, 1, 5);
        for (Object o : page.getList()) {
            Bean bean = (Bean) o;
            System.out.println(bean);
        }
    }

    /**
     *
     */
    @Test
    public void mapTest() {
        Map<String, Object> parameters = new HashMap<>();
        String hql = "select new map(content.id as id,content.title as title,category.name as name) from CmsContent content,CmsCategory category where content.categoryId=category.id";
        PageHandler page = hqlService.getPage(hql, parameters, 1, 5);
        for (Object o : page.getList()) {
            @SuppressWarnings("unchecked")
            Map<String, Object> map = (Map<String, Object>) o;
            System.out.println(map);
        }
    }

    /**
     *
     */
    @Test
    public void arrayTest() {
        Map<String, Object> parameters = new HashMap<>();
        String hql = "select content.id ,content.title,category.name from CmsContent content,CmsCategory category where content.categoryId=category.id";
        PageHandler page = hqlService.getPage(hql, parameters, 1, 5);
        for (Object o : page.getList()) {
            Object[] array = (Object[]) o;
            for (Object t : array) {
                System.out.print(t);
                System.out.print(",");
            }
            System.out.println();
        }
    }

    /**
     *
     */
    @Test
    public void listTest() {
        Map<String, Object> parameters = new HashMap<>();
        String hql = "select new list(content.id ,content.title,category.name) from CmsContent content,CmsCategory category where content.categoryId=category.id";
        PageHandler page = hqlService.getPage(hql, parameters, 1, 5);
        for (Object o : page.getList()) {
            @SuppressWarnings("unchecked")
            List<Object> list = (List<Object>) o;
            System.out.println(list);
        }
    }
}

class Bean {
    long id;
    String contentTitlle;
    String categoryName;

    public Bean(long id, String contentTitlle, String categoryName) {
        super();
        this.id = id;
        this.contentTitlle = contentTitlle;
        this.categoryName = categoryName;
    }

    /**
     * @return the id
     */
    public long getId() {
        return id;
    }

    /**
     * @param id
     *            the id to set
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * @return the contentTitlle
     */
    public String getContentTitlle() {
        return contentTitlle;
    }

    /**
     * @param contentTitlle
     *            the contentTitlle to set
     */
    public void setContentTitlle(String contentTitlle) {
        this.contentTitlle = contentTitlle;
    }

    /**
     * @return the categoryName
     */
    public String getCategoryName() {
        return categoryName;
    }

    /**
     * @param categoryName
     *            the categoryName to set
     */
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    /*
     * (non-Javadoc)
     *
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return "Bean [id=" + id + ", contentTitlle=" + contentTitlle + ", categoryName=" + categoryName + "]";
    }
}
