function hola(nombre, callback) {
  console.log('soy asincrona');
  setTimeout(
    () => {
      console.log('hola' + nombre);
      callback(nombre);
    },

    3000
  );
}

function adios(nombre, callback) {
  setTimeout(() => {
    console.log('adios' + nombre);
    callback();
  }, 3000);
}

console.log('inicia proceso');

hola('Javier', function (nombre) {
  adios(nombre, function () {
    console.log('termina el proceso');
  });
});

console.log('finaliza proceso');
