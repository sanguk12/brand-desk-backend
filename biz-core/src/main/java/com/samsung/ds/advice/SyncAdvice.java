package com.samsung.ds.advice;

import com.synccms.common.pojo.AjaxResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.NoHandlerFoundException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestControllerAdvice
public class SyncAdvice {
    protected final Log log = LogFactory.getLog(getClass());

    @ExceptionHandler(NoHandlerFoundException.class)
    protected AjaxResponse handleNoHandlerFoundException(NoHandlerFoundException e,
                                                         HttpServletRequest request) {
        log.error(e.getMessage(), e);
        return AjaxResponse.fail(HttpStatus.NOT_FOUND, "NOT_FOUND");
    }
    @ExceptionHandler(AuthorizationException.class)
    public AjaxResponse exception(AuthorizationException e, HttpServletRequest req,  HttpServletResponse res) throws IOException {
        log.error(e.getMessage(), e);
        return AjaxResponse.fail(HttpStatus.UNAUTHORIZED, "UNAUTHORIZED");
    }


    @ExceptionHandler(ResponseStatusException.class)
    public AjaxResponse exception(ResponseStatusException e, HttpServletRequest req,  HttpServletResponse res) throws IOException {
        log.error(e.getMessage(), e);
        return AjaxResponse.error(e);
    }

    @ExceptionHandler(Exception.class)
    public AjaxResponse exception(Exception e, HttpServletRequest req,  HttpServletResponse res) throws IOException {
        log.error(e.getMessage(), e);
        return AjaxResponse.fail(HttpStatus.INTERNAL_SERVER_ERROR, "Failed. Please try it later.");
    }
}
