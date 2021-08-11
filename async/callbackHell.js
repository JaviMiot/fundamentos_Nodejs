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

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('bal bla bal');
    callbackHablar();
  }, 3000);
}

function adios(nombre, callback) {
  setTimeout(() => {
    console.log('adios' + nombre);
    callback();
  }, 3000);
}

//* inicia proceso
console.log('inicia proceso');

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

hola('javi', function (nombre) {
  conversacion(nombre, 3, function () {
    console.log('termina callbacks');
  });
});

/* hola('Javier', function (nombre) {
  hablar(function () {
    hablar(function () {
      adios(nombre, function () {
        console.log('termina el proceso');
      });
    });
  });
}); */

console.log('finaliza proceso');
