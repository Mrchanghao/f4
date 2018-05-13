const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    console.log(request.url);

    if (request.url === '/') {
        fs.readFile('./index.html', 'utf8', (err, file) => {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(file);
        });
    } else if (request.url === '/111') {
        fs.readFile('./111.html', 'utf8', (err, file) => {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(file);
        });
    } else {
        fs.readFile('./404.html', 'utf8', (err, file) => {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(file);
        });
    }
}).listen('8081', () => {
    console.log('server on!!');
});