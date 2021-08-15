const http = require('http');

http.createServer(router).listen(4000);

function router(req, res) {
  console.log('nueva peticion');
  console.log(req.url);
  switch (req.url) {
    case '/hola':
      res.write('hola que tal');
      res.end();
      break;

    default:
      res.write('error 404');
      res.end();
      break;
  }
  //* escribe respuesta al usuario
  /*res.writeHead(201, { contentType: 'text/plain' });
  res.write('hola ya se usar http');
  res.end();*/
}
