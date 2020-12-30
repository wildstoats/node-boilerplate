FROM node:14

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm ci
