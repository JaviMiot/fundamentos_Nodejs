const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);

//console.log(os.constants);

function kbytes(bytes) {
  return bytes / 1024;
}

function Mbytes(bytes) {
  return kbytes(bytes) / 1024;
}

function Gbytes(bytes) {
  return Mbytes(bytes) / 1024;
}

console.log(os.freemem());
console.log(kbytes(os.freemem()));
console.log(Mbytes(os.freemem()));
console.log(Gbytes(os.freemem()));
console.log(Gbytes(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());
