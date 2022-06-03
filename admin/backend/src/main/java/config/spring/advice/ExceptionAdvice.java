package config.spring.advice;

import com.synccms.common.pojo.AjaxResponse;
import com.synccms.exception.AuthorizationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.IOException;

@RestControllerAdvice
public class ExceptionAdvice {
    @ExceptionHandler(AuthorizationException.class)
    public ResponseEntity<AjaxResponse> exception(AuthorizationException e) throws IOException {
        return new ResponseEntity(AjaxResponse.error(e), e.getStatus());
    }
}
