FROM node:7.8.0-alpine

ENV SHELL /bin/sh
ARG APP_VERSION
ENV APP_VERSION ${APP_VERSION}
RUN cd /tmp \
    && apk add --no-cache --update openssl \
    && wget "https://github.com/ringohub/freshness/archive/v${APP_VERSION}.zip" \
    && unzip -q v${APP_VERSION}.zip -d / \
    && mv /freshness-${APP_VERSION} /freshness \
  && cd /freshness \
    && yarn --prod --no-progress \
#    && npm run build \
    && apk del openssl unzip

EXPOSE 3000
WORKDIR /freshness
CMD ["npm", "run", "dev"]
