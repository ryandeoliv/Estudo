const http = require("node:http");

const fs = require("node:fs");

const porta = process.env.PORT || 3000;

const servidor = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("main.js", (erro, conteudo) => {
            if (erro) {
                res.writeHead(500);
                res.end("Erro ao ler o arquivo");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
            res.end(conteudo);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8"});
        res.end("Página indisponível");
    }
});

servidor.listen(porta);