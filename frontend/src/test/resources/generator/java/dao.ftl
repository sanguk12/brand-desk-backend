package ${base}.${daoPack};

// Generated ${.now} by com.synccms.common.generator.SourceGenerator
<#include "../include_imports/field_type.ftl">

import org.springframework.stereotype.Repository;

import com.synccms.common.base.BaseDao;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.handler.PageHandler;
import com.synccms.common.handler.QueryHandler;
import com.synccms.common.tools.CommonUtils;
<#include "../include_imports/entity.ftl">

/**
 *
 * ${entityName}${daoSuffix}
 *
 */
@Repository
public class ${entityName}${daoSuffix} extends BaseDao<${entityName}> {

    <#include "../include_condition/comment.ftl">
    public PageHandler getPage(<#include "../include_condition/condition.ftl">) {
        QueryHandler queryHandler = getQueryHandler("from ${entityName} bean");
        <#include "../include_condition/hql.ftl">
        return getPage(queryHandler, pageIndex, pageSize);
    }

    @Override
    protected ${entityName} init(${entityName} entity) {
        <#if createDate?has_content && createDate>
        if (null == entity.getCreateDate()) {
            entity.setCreateDate(CommonUtils.getDate());
        }
        </#if>
        return entity;
    }

}