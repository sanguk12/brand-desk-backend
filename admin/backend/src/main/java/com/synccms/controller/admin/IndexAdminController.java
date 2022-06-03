package com.synccms.controller.admin;

import com.synccms.common.api.Config;
import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.CommonUtils;
import com.synccms.common.tools.ControllerUtils;
import com.synccms.entities.sys.SysSite;
import com.synccms.logic.component.config.ConfigComponent;
import com.synccms.logic.component.config.LoginConfigComponent;
import com.synccms.logic.component.site.SiteComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.support.RequestContextUtils;
import org.springframework.web.servlet.view.UrlBasedViewResolver;
import org.springframework.web.util.UrlPathHelper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 *
 * IndexAdminController는 Controller를 균일하게 배포합니다.
 *
 */
@Controller
public class IndexAdminController {
    private UrlPathHelper urlPathHelper = new UrlPathHelper();
    @Autowired
    protected SiteComponent siteComponent;
    @Autowired
    protected ConfigComponent configComponent;

    /**
     * 페이지 요청의 통합 배포
     *
     * @param request
     * @return view name
     */
    @RequestMapping("/**")
    public String page(HttpServletRequest request) {
        String path = urlPathHelper.getLookupPathForRequest(request);
        if (CommonUtils.notEmpty(path)) {
            if (CommonConstants.SEPARATOR.equals(path) || path.endsWith(CommonConstants.SEPARATOR)) {
                path += CommonConstants.getDefaultPage();
            }
            int index = path.lastIndexOf(CommonConstants.DOT);
            path = path.substring(0 < path.indexOf(CommonConstants.SEPARATOR) ? 0 : 1, -1 < index ? index : path.length());
        }
        return path;
    }

    /**
     * 언어 수정
     * @param site
     * @param lang
     * @param returnUrl
     * @param request
     * @param response
     * @return view name
     */
    @RequestMapping("changeLocale")
    public String changeLocale(@RequestAttribute SysSite site, String lang, String returnUrl, HttpServletRequest request, HttpServletResponse response) {
        if (null != lang) {
            LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
            if (null != localeResolver) {
                localeResolver.setLocale(request, response, StringUtils.parseLocaleString(lang));
            }
        }
        if (CommonUtils.empty(returnUrl)) {
            return CommonConstants.TEMPLATE_DONEANDREFRESH;
        } else {
            Map<String, String> config = configComponent.getConfigData(site.getId(), Config.CONFIG_CODE_SITE);
            String safeReturnUrl = config.get(LoginConfigComponent.CONFIG_RETURN_URL);
            if (ControllerUtils.isUnSafeUrl(returnUrl, site, safeReturnUrl, request)) {
                returnUrl = site.isUseStatic() ? site.getSitePath() : site.getDynamicPath();
            }
            return UrlBasedViewResolver.REDIRECT_URL_PREFIX + returnUrl;
        }
    }
}
