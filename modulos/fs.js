const fs = require('fs');

function read(ruta, cb) {
  fs.readFile(ruta, (error, data) => {
    //leido
    cb(data.toString());
  });
}

function write(url, contenido, cb) {
  fs.writeFile(url, contenido, (error) => {
    if (error) {
      console.error('no he podido escribirlo', error);
    } else {
      console.log('se ha escrito correctamente');
    }
  });
}

function borra(url, cb) {
  fs.unlink(url, cb);
}

//read(__dirname + '/archivo.txt', console.log);
//write(__dirname + '/archivo1.txt', 'Ótro perrito');
borra(__dirname + '/archivo1.txt', console.log);
