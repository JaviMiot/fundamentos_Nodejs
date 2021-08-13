const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

/*
let readbleStream = fs.createReadStream(__dirname + '/input.txt');
readbleStream.setEncoding('UTF8'); // CON ESTO TE PARCEA

readbleStream.on('data', function (chunk) {
  console.log(chunk);
  data += chunk;
});

readbleStream.on('end', function () {
  console.log(data);
});

*/

/*
process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('haces');
*/

const trandform = stream.Transform;

function Mayus() {
  trandform.call(this);
}

util.inherits(Mayus, trandform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();

readbleStream.pipe(Mayus).pipe(process.stdout);
