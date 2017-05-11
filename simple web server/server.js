const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.end('Hello, World');
});

server.listen(port, hostname, () => {
    console.log(`Serving at ${hostname}:${port}`);
});