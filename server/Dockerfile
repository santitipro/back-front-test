FROM node:15

WORKDIR /server/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8500

CMD [ "npm", "start" ]