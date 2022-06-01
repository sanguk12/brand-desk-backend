# TUS combined with Spring-Boot to realize breakpoint resume

Recently, I have been doing the springboot implementation of file breakpoint resuming, and the TUS plug-in used in the front end, so I organized a Spring Boot plug-in to facilitate development and use.

## rely

```xml

<dependency>
    <groupId>io.github.cha1yi</groupId>
    <artifactId>tus-springboot-starter</artifactId>
    <version>1.0</version>
</dependency>
```

## Java Client 实现

使用场景，当业务需要往一个支持TUS协议的断点续传服务发送文件上传请求时。可以使用如下的方式实现断点续传。

```java
public class TusFileClientTest {
    @Test
    public void executeTest() {
        Assertions.assertDoesNotThrow(() -> {
            final TusFileClient tusFileClient = new TusFileClient();
            final String uploadFilePath = "/Users/wuxuan.chai/Documents/小老鼠已然成精.mp4";
            tusFileClient.execute(new URL("http://localhost:8080/file/v1/upload/"), Paths.get(uploadFilePath));
        });
    }
}
```

## Java Server 实现

使用场景，当需要开发一个支持断点续传的文件服务时，可以实现如下代码，支持TUS客户端传递文件。

添加依赖

```java

@RestController
@RequestMapping("/upload")
@SpringBootApplication
public class TusApplication {

    @Resource
    private TusFileUploadResolver tusFileUploadResolver;

    public static void main(String[] args) {
        SpringApplication.run(TusApplication.class, args);
    }

    /**
     * 上传接口
     * @param request 请求
     * @param response 响应
     */
    @RequestMapping(value = {"/", "/**"}, method = {RequestMethod.POST, RequestMethod.PATCH, RequestMethod.HEAD, RequestMethod.DELETE, RequestMethod.GET})
    public void upload(HttpServletRequest request, HttpServletResponse response) {
        tusFileUploadResolver.upload(request, response);
    }
}
```

相关配置

```properties
server.servlet.context-path=/file/v1
# 上传接口
com.yidan.tus.upload-URI=${server.servlet.context-path}/upload/
# tus的chunk文件存储位置
com.yidan.tus.tus-upload-directory=/Users/wuxuan.chai/Documents/GitHub/springboot-tus-starter/src/test/resources/file/tus
# 文件最终上传的位置
com.yidan.tus.app-upload-directory=/Users/wuxuan.chai/Documents/GitHub/springboot-tus-starter/src/test/resources/file
# 是否开启定时清理tus的lock文件，默认false
com.yidan.tus.enable-clean=true
# 定时周期
com.yidan.tus.expire-time=1MINUTES
```
