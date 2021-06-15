FROM node:14 AS deps

MAINTAINER Germán Cáceres <germancaceres18@gmail.com>

RUN mkdir -p /usr/code/meli-ui/server
WORKDIR /usr/code/meli-ui/server

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./src src
COPY ./.eslintrc .eslintrc
COPY ./.huskyrc .huskyrc
COPY ./.prettierrc .prettierrc
COPY ./.prettierignore .prettierignore
COPY ./nodemon.json nodemon.json
COPY ./tsconfig.json tsconfig.json
COPY ./jest.config.js jest.config.js
COPY ./swagger.yaml swagger.yaml


RUN npm install --loglevel info

COPY ./build.sh build.sh
RUN chmod +x build.sh

EXPOSE 8080

