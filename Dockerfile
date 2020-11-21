FROM node:12

WORKDIR /SOAP_Server

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "./src/Server/index.js"]