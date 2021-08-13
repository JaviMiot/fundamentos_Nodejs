const fs = require('fs/promises');

async function read(path) {
  const data = await fs.readFile(path);
  return data.toString();
}

async function write(path, data) {
  await fs.writeFile(path, data);
}

async function deleteFile(path) {
  await fs.unlink(path);
}

function appendFile(path, data) {
  fs.appendFile(path, data, (error) => {
    if (error) {
      console.error('No se agrego');
    } else {
      console.log('si se agrego');
    }
  });
}

//read(__dirname + '/archivo.txt').then((data) => console.log(data));
//write(__dirname + '/archivo1.txt', 'es un nuevo archivo');
//deleteFile(__dirname + '/archivo1.txt');
appendFile(__dirname + '/archivo.txt', 'es un nuevo archivo');
