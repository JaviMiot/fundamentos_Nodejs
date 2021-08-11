async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    console.log('soy asincrona');
    setTimeout(() => {
      console.log('hola ' + nombre);
      resolve(nombre);
    }, 3000);
  });
}

async function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('bal bla bal');
      resolve(nombre);
    }, 3000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('adios ' + nombre);
      resolve(nombre);
    }, 3000);
  });
}

async function main(nombre) {
  let nombreData = await hola(nombre);
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombreData);
}

console.log('inicia proceso');
main('javier');
