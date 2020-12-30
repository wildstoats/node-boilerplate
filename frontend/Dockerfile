FROM node:14

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /home/node/app

COPY .babelrc package.json package-lock.json webpack.config.js ./

RUN npm ci
