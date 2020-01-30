FROM node:12.14.1

WORKDIR /usr/app
# EXPOSE 3000
COPY ./ ./

RUN yarn install

CMD ["yarn","start"]