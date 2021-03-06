FROM node:12.14.1

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package*.json .
# EXPOSE 3000
RUN yarn install
COPY ./ ./
