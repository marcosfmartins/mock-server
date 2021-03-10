FROM node:14-alpine

WORKDIR /app
COPY . /app

RUN npm ci --only=prod

CMD npm run start