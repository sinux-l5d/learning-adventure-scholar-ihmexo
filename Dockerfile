# build environment
FROM node:16.13.2-alpine as build

WORKDIR /app

ARG REACT_APP_SRVEXO

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY . ./

RUN npm ci --silent
RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]