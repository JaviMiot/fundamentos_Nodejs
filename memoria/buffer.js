//let buffer = Buffer.alloc(4); //* define el tamaño de memoria
//let buffer = Buffer.from([1, 2, 3, 25]); //* define buffer y con datos
let buffer = Buffer.from('hola'); //* define buffer y con datos

console.log(buffer);
console.log(buffer.toString());

// -- trabajando posicion poscicion

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < abc.length; i++) {
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());
