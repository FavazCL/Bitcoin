FROM node

RUN npm install -g sails

RUN mkdir -p /home/backend

WORKDIR /home/backend

COPY . /home/backend

RUN npm install

CMD [ "sails", "lift", "--prod" ]

