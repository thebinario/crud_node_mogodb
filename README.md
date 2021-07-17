dependecies application

```
 npm i admin-bro @admin-bro/express express express-formidable
 npm i tslib
 npm i express-session
```

2. install dependecies database

```sh
npm i @admin-bro/mongoose mongoose
```

how to build docker
```sh
docker build -t painel/dockernode .
```

how to start docker
```
docker run -p 3000:3000 -d painel/dockernode
```
