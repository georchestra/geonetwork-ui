FROM nginx:1.21.4-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY dist/apps/datafeeder /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
COPY custom-start.sh /custom-start.sh
EXPOSE 80

ENTRYPOINT ["sh", "/custom-start.sh", "sh", "/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
