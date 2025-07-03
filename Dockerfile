FROM node:22.16.0-alpine  AS builder
WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
