FROM node:10.16-alpine

WORKDIR /conversionMarkdown
ADD . /conversionMarkdown

RUN npm install