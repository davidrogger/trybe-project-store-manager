FROM node:16

COPY package*.json ./home/node/app

RUN npm install

COPY . ./home/node/app