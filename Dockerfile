FROM nginx:1.21.4-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY dist/apps/datafeeder /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
COPY docker/docker-entrypoint.sh /docker-entrypoint.sh
EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
