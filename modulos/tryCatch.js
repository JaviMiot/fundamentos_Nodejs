function otraFuncion() {
  funError();
}

function funError() {
  return 3 / z;
}

//esta funcion esta en otro Hilo
function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('error en funcion asincrona');
      cb(error);
    }
  });
}

try {
  //otraFuncion();
  seRompeAsincrona(function () {
    console.log('hay error');
  });
} catch (error) {
  console.error(error.message);
}

console.log('al final del programa');
