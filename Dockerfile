FROM nginx:1.21.4-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY dist/apps/datafeeder /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
