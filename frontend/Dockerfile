FROM adoptopenjdk:15-jdk-hotspot
ADD target/synccms-web.war /opt/synccms.war
ENV PORT 8080
ENV CONTEXTPATH ""
ENV FILEPATH  "/data/synccms"
VOLUME $FILEPATH
ENTRYPOINT java -jar -Dcms.port=$PORT -Dcms.contextPath=$CONTEXTPATH -Dcms.filePath=$FILEPATH /opt/synccms.war > /var/log/synccms.log
EXPOSE $PORT
