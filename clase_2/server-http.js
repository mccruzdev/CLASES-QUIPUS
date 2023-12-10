const http = require("http");

const hostname = "127.0.0.1";
const port = "8080"; 

const server = http.createServer((req, res)=>{
    console.log(req);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola mundo desde el lado del servidor ...");
});

server.listen(hostname, port, ()=>{
    console.log("iniciando servidor HTTP en http://"+hostname+":"+port);
})