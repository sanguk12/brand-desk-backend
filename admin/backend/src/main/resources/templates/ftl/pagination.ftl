<#macro first page>
    <#if (page.pageIndex > 1)>
        <li class="page-item">
            <a class="page-link" data-page-num="1" href="javascript:;"><<</a>
        </li>
    </#if>
</#macro>
<#macro previous page>
    <#if (page.pageIndex > 1)>
        <li class="page-item">
            <a class="page-link" data-page-num="${page.pageIndex-1}" href="javascript:;"><</a>
        </li>
    </#if>
</#macro>

<#macro next page>
    <#if (page.pageIndex < page.totalPage)>
        <li class="page-item">
            <a class="page-link" data-page-num="${page.pageIndex+1}" href="javascript:;">></a>
        </li>
    </#if>
</#macro>

<#macro last page>
    <#if (page.pageIndex < page.totalPage)>
        <li class="page-item ">
            <a class="page-link" data-page-num="${page.totalPage}" href="javascript:;">>></a>
        </li>
    </#if>
</#macro>

<#macro numbers page maxPages = 9>
    <#local pagesBefore = (maxPages / 2)?floor />
    <#local pagesAfter = (maxPages / 2)?floor />
    <#if maxPages % 2 == 0>
        <#local pagesBefore = pagesBefore - 1 />
    </#if>
    <#local pageNumMin = page.pageIndex - pagesBefore />
    <#local pageNumMax = page.pageIndex + pagesAfter />

    <#if (pageNumMin <= 0)>
        <#local pageNumMin = 1 />
    </#if>

    <#if (pageNumMax > page.totalPage)>
        <#local pageNumMax = page.totalPage />
    </#if>

    <#list pageNumMin..pageNumMax as pageNumber>
        <li class="page-item<#if pageNumber == page.pageIndex> active</#if>"><a class="page-link" data-page-num="${pageNumber}" href="javascript:;">${pageNumber}</a></li>
    </#list>
</#macro>
