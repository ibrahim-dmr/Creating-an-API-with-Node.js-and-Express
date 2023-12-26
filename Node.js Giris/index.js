const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const istekHandler = (istek, cevap) => {
    cevap.statusCode = 200;
    cevap.setHeader('Content-Type', 'text/plain');
    cevap.end("Creating an API with Node.js and Express.");
};

const server = http.createServer(istekHandler);

server.listen(port, host, () => {
    console.log(`http://${host}:${port} adresinden gelen istekler dinleniyor...`);
});
