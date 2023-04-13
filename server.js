// Criando servidor local
const http = require('http');

// PORT para escutar as requisicoes
const PORT = 3000;

// Rotas
const rotas = {
  '/': 'Curso de Node',
  '/livros': 'Entrei na pag de livros',
  '/autores': 'Listagem de autores',
  '/livraria': 'Aqui vai a livraria',
};

// Create Server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(rotas[req.url]);
});

// Lincar a porta com o server
server.listen(PORT, err => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
