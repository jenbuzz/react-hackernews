FROM node:12 as builder

WORKDIR /react-hackernews

RUN mkdir -p /react-hackernews

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn

COPY ./ /react-hackernews

EXPOSE 8080

CMD ["yarn", "start"]
