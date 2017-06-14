FROM node

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:8087

RUN npm run build

CMD PORT=$PORT npm run start
