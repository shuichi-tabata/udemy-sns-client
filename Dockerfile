FROM node:20.18-alpine
WORKDIR /app/
COPY ./package.json /app/
RUN npm install