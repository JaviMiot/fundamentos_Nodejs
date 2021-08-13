const { exec, spawn } = require('child_process');

//corres procesos desde la consola

/*
exec('node modulos/console.js', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});
*/

// permite invocar un proceso nuevo de nodejs

let process = spawn('ls', ['-la']);
console.log(process.pid);
console.log(process.connected);

//* saca los datos del proceso
process.stdout.on('data', function (data) {
  console.log('Esta muerto?');
  console.log(process.killed);
  console.log(data.toString());
});

//* cuando termina el proceso
process.on('exit', function () {
  console.log('el proceso termino');
  console.log('Esta muerto?');
  console.log(process.killed);
});
