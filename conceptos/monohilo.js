console.log('Hola Mundo');

let count = 0;

setInterval(() => {
  console.log(count * 10);

  /* if (count === 5) {
    //* aqui forzamos un error
    var a = 3 + z;
  } */
  count++;
}, 1000);

console.log('segunda instruccion');
