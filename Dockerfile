FROM node:14-alpine

WORKDIR /app
COPY . /app

RUN npm i

CMD npm run start

