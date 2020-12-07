FROM node:10-alpine

# Dependecies
RUN apk upgrade --update && apk add --no-cache python2 python2-dev gcc freetype-dev musl-dev libpng-dev g++ lapack-dev

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g ts-node
RUN npm install

COPY . .

CMD [ "npm", “run”, "start:dev" ]
