//const process = require('process');

process.on('beforeExit', () => {
  console.log('el proceso va a terminar');
});

/* ejecutado el exit se para el event loop
 */
process.on('exit', () => {
  console.log('el proceso termino');
  setTimeout(() => {
    console.log('esto nunca se va a ver');
  }, 100);
});

setTimeout(() => {
  console.log('esto si se va a ver');
}, 100);

//* evita q se rompa el programa en el caso de
//* que nos e manejo un error
process.on('uncaughtException', (err, origen) => {
  console.log('se nos olvido capturar el error');
  console.log(err.message);
  setTimeout(() => {
    console.log('esto viene de las excepciones');
  });
});

funcionNoExiste();
