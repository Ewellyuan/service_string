FROM node:10

WORKDIR /home/node/app

COPY . .

CMD ["npm", "start"]