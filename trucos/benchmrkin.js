let suma = 0;

console.time('bucle');
for (let index = 0; index < 1000000000; index++) {
  suma += index;
}
console.timeEnd('bucle');

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('termina asincrona');
      resolve();
    }, 120);
  });
}

console.time('asincrona');
asincrona();
console.timeEnd('asincrona');

console.time('bucle2');
for (let index = 0; index < 1000000000; index++) {
  suma += index;
}
console.timeEnd('bucle2');
