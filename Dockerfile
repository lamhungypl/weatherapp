FROM node:12.14.1

WORKDIR /usr/app/src
EXPOSE 3000
COPY ./ ./

RUN yarn install

CMD ["/bin/bash"]