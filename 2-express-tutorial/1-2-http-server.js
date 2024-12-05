const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.png');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {

    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
        return;
    } else if (url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>about page</h1>');
        res.end();
        return;
    } else if (url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
        return;
    } else if (url === '/logo.png'){
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(homeImage);
        res.end();
        return;
    } else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
        return;
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>PAGE NOT FOUND</h1>');
        res.end();
        return;
    }

})

server.listen(5000);