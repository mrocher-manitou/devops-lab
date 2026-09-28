const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Salut ! C\'est MA propre application qui tourne dans Kubernetes, eh ouais ma gueule.\n');
});

server.listen(8080, () => {
  console.log('Serveur démarré sur le port 8080');
});