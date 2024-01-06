FROM node:lts-alpine AS build-stage

WORKDIR /app
COPY package*.json ./

RUN npm install -g typescript vue-tsc vite
RUN npm install

COPY . .

RUN npm run build


FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY --from=build-stage /app/dist /app

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["entrypoint.sh"]
CMD [ "http-server", "." ]