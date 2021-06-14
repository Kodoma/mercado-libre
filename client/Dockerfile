FROM node:14 AS deps

MAINTAINER Germán Cáceres <germancaceres18@gmail.com>

RUN npm install jest --global

RUN mkdir -p /usr/code/meli-ui/client
WORKDIR /usr/code/meli-ui/client

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./.babelrc .babelrc
COPY ./next.config.cjs next.config.cjs
COPY ./next-env.d.ts next-env.d.ts
COPY ./jest.config.js jest.config.js
COPY ./tsconfig.json tsconfig.json
COPY ./.eslintrc.js .eslintrc.js
COPY ./pages pages
COPY public public
COPY ./src src
COPY ./config config
COPY ./setupTests.js setupTests.js
COPY ./custom.d.ts custom.d.ts
COPY ./postcss.config.js postcss.config.js
COPY ./.prettierrc .prettierrc
COPY ./.prettierignore .prettierignore

RUN npm install --loglevel info

COPY ./build.sh build.sh
RUN chmod +x build.sh

EXPOSE 3000
