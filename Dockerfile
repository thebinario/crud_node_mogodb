FROM node:alpine

WORKDIR /user/app

COPY package*.json ./
RUN  npm i admin-bro @admin-bro/express express express-formidable
RUN  npm i admin-bro tslib
RUN  npm i express-session
RUN  npm i @admin-bro/mongoose mongoose
RUN  npm i nodemon

COPY . .

EXPOSE 3000 

CMD ["npm", "start"]