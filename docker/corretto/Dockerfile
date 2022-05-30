FROM amazoncorretto:11-alpine

RUN apk update && apk add --no-cache fontconfig ttf-dejavu && rm -rf /var/cache/apk/*

ENTRYPOINT ["java", "-jar"]