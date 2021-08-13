//console.log(global); //muestra los modulos globales
//console.log(setInterval); // -> [Function: setInterval]

let i = 0;

let interval = setInterval(() => {
  if (i === 3) {
    clearInterval(interval); // detiene el intervalo
  }
  console.log(i);
  i++;
}, 100);

setImmediate(() => {
  console.log('hola');
});

console.log(process); // muestra info del proceso
console.log(__dirname); // entrega el directorio
console.log(__filename); // entrega el nombre del archivo

//creat variabls globales
global.miVariable = 'el Valor';
console.log(miVariable);
console.log(URL);
