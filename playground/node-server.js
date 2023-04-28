//This is how to setup a local Node server

const http = require("http"); //CommonJS syntax
//import http from 'http'; //ES6 syntax

const host = 'localhost';
const port = 8000;

// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("My first server!"); //this tell browser to stop loading after above code is executed
// };


const server = http.createServer( (req, res) => {
    
    //Creating a 'route' for specific paths  in Node server
    //NOTE: it's much easier in Express
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html")
        res.write("<h2>Home Page</h2>");
        res.end();
    }
    //Creating a 'route' for specific paths in Node server
    //NOTE: it's much easier in Express
    if(req.url === "/about"){
        res.setHeader("Content-Type", "text/html")
        res.write("<h2>About Page</h2>");
        res.end();
    }
   
    console.log(req.url);
    console.log(req.method);
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


