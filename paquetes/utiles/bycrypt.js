const bycrypt = require('bcrypt');

const password = '12345javi';

bycrypt.hash(password, 5, function (err, hash) {
  console.log(hash);
  bycrypt.compare('password', hash, function (err, result) {
    console.log(err);
    console.log(result);
    console.log(bycrypt.getRounds(hash));
  });
});
