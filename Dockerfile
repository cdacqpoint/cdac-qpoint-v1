
FROM node:10

WORKDIR /usr/src/qpoint-apis

COPY package*.json ./

RUN npm install  --quiet

COPY . .

EXPOSE 5000

CMD ["npm", "run","serverstart"]