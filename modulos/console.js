console.info('algo');
console.error('algo');
console.warn('warn');

//Tablas
const tabla = [
  {
    a: 1,
    b: 2,
  },
  {
    alert: 3,
  },
];

console.table(tabla);

//Hacer grupos de logs
console.group('logs');
console.log('holaa');
console.log('conversar');
console.log('conversar');
console.log('conversar');
console.groupEnd();

function fun1() {
  console.group('funcion1');
  console.log('es de fun1');
  console.log('es de fun1');
  console.log('es de fun1');
  fun2();
  console.groupEnd('funcion1');
}

function fun2() {
  console.group('funcion2');
  console.log('es de fun2');
  console.log('es de fun2');
  console.groupEnd('funcion2');
}

console.log('empezamos');
fun1();

//contador
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
