const express = require('express');
const routerActors = require('./routers/routerActors');
const logger = require('./middlewares/logger');
const errorHandling = require('./middlewares/errorHandling');


const server = express();
server.use(express.json());
server.use(logger);
server.use("/actors", routerActors);

server.get('/', (req, res) => {
    res.send("Hello from Express");
});

server.use(errorHandling);

server.listen(5000, () => {
    console.log("http://localhost:5000 adresine yapılan istekler dinleniyor...");
});
