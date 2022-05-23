# Builder
FROM node:14-alpine as build

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --ignore-scripts
COPY . ./
RUN npm run postinstall
RUN npm run build datafeeder -- --base-href='/import/'

# Runner
FROM nginx:1.16.0-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/apps/datafeeder /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
