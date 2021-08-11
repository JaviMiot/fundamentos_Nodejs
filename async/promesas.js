function hola(nombre) {
  return new Promise(function (resolve, reject) {
    console.log('soy asincrona');
    setTimeout(() => {
      console.log('hola ' + nombre);
      resolve(nombre);
    }, 3000);
  });
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('bal bla bal');
      resolve(nombre);
    }, 3000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('adios ' + nombre);
      resolve(nombre);
    }, 3000);
  });
}

hola('Javier')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => console.log('termona proceso'));
