function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error, null);
    }
  }, 1000);
}

asincrona((error, data) => {
  if (error) {
    console.error(error.message);
    //throw err;
    return false;
  }

  console.log('todo ha hido bien');
});
