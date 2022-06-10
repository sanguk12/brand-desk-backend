FROM registry-group.basicit.co.kr/nginx:stable-alpine

WORKDIR /app

COPY dist/. .

COPY ./nginx.conf /etc/nginx/nginx.conf
