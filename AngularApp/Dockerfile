FROM  jojons/teach-app-modules:0.1 AS deps

# FROM node:12.14.0-buster AS deps
# WORKDIR /deps
# COPY ./package.json .
# RUN npm cache clean --force && npm install

# npm install -g npm && npm cache clean --force && npm cache verify &&
# node_module install:
FROM angular/ngcontainer:0.10.0 AS base

EXPOSE 4200

WORKDIR /deps

COPY --from=deps /deps ./

VOLUME /app

WORKDIR /app

ENTRYPOINT sudo ln -sf /deps/node_modules . \
&& sudo cp /deps/package-lock.json . \
&& ./node_modules/@angular/cli/bin/ng serve --host 0.0.0.0 --poll 1
