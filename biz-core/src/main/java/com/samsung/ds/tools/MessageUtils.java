package com.samsung.ds.tools;

import com.synccms.common.constants.CommonConstants;
import com.synccms.common.tools.LanguagesUtils;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;

public class MessageUtils {
    public static String getMessage(String code, HttpServletRequest request)
    {
        return LanguagesUtils.getMessage(CommonConstants.applicationContext, RequestContextUtils.getLocale(request), code);
    }
}
