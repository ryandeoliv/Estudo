const http = require("node:http");

const { execFile } = require("node:child_process");

const porta = process.env.PORT || 3000;

const servidor = http.createServer((req, res) => {
    if (req.url === "/") {
        execFile(process.execPath, ["main.js"], (erro, saida) => {
            if (erro) {
                res.writeHead(500);
                res.end("Página indisponível");
            }
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            res.end(saida);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8"});
        res.end("Página indisponível");
    }
});

servidor.listen(porta);