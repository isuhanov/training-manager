FROM node

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

EXPOSE 4200

RUN npm run build

CMD ["npm", "run", "start:dev"]