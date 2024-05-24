FROM node:18.20.3-alpine as build

ENV HOME = /home
ENV APP_HOME = ${HOME}/app/frontend

RUN mkdir -p ${APP_HOME}
WORKDIR ${APP_HOME}

COPY ./flex-cart_web/package.json ${APP_HOME}/package.json
COPY ./flex-cart_web/pnpm-lock.yaml ${APP_HOME}/pnpm-lock.yaml

RUN pnpm install
COPY ./flex-cart_web ${APP_HOME}

RUN pnpm run build


FROM nginx:1.26-alpine-slim

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /home/app/frontend/build /usr/share/nginx/html