FROM node:8-jessie AS builder

RUN npm install -g @angular/cli@7.0.6

RUN mkdir -p /home/frontend

WORKDIR /home/frontend

COPY . /home/frontend

RUN npm install 

RUN ng build --prod

#Etapa builder concluida

FROM nginx:alpine AS view

WORKDIR /usr/share/nginx/html

COPY --from=builder /home/frontend/dist/my-app .