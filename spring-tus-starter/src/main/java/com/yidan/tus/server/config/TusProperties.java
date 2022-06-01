package com.yidan.tus.server.config;

import com.yidan.tus.server.utils.DurationUtils;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;

/**
 * @author Wuxuan.Chai
 * @desc Tus configuration
 * @created 2021/11/18 4:54 AM
 **/
@ConfigurationProperties(prefix = "com.yidan.tus")
public class TusProperties {

    /**
     * Whether to enable the tus-springboot plugin
     */
    private boolean enable = true;

    /**
     * Upload callback address
     */
    private String uploadURI;

    /**
     * tus slice file save location
     */
    private Path tusUploadDirectory;

    /**
     * The save location of the file after the upload is successful
     */
    private Path appUploadDirectory;

    /**
     * Start scheduled cleaning tasks
     */
    private boolean enableClean = false;

    /**
     * Timeout setting
     */
    private Duration expireTime = Duration.ZERO;

    public Duration getExpireTime() {
        return expireTime;
    }

    public void setExpireTime(String expireTime) {
        this.expireTime = DurationUtils.ofString(expireTime);
    }

    public boolean isEnableClean() {
        return enableClean;
    }

    public void setEnableClean(boolean enableClean) {
        this.enableClean = enableClean;
    }

    public String getUploadURI() {
        return uploadURI;
    }

    public void setUploadURI(String uploadURI) {
        this.uploadURI = uploadURI;
    }

    public Path getTusUploadDirectory() {
        return tusUploadDirectory;
    }

    public void setTusUploadDirectory(String tusUploadDirectory) {
        this.tusUploadDirectory = Paths.get(tusUploadDirectory);
    }

    public Path getAppUploadDirectory() {
        return appUploadDirectory;
    }

    public void setAppUploadDirectory(String appUploadDirectory) {
        this.appUploadDirectory = Paths.get(appUploadDirectory);
    }

    public boolean isEnable() {
        return enable;
    }

    public void setEnable(boolean enable) {
        this.enable = enable;
    }

}
