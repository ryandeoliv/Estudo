const http = require("node:http");

const main = require("./main.js");

const porta = process.env.PORT || 3000;

const servidor = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(String(main));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8"});
        res.end("Página indisponível");
    }
});

servidor.listen(porta);