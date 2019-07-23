const md5 = require('md5');

module.exports = (originalPassword, hashedPassword) =>
  new Promise((resolve, reject) => {
    if (!originalPassword || !hashedPassword)
      reject(
        Error('Expects two inputs. Original password and hashed password.'),
      );

    const [rounds, salt, hash] = hashedPassword.split('$');
    let result = originalPassword;

    for (let i = 0; i < 2 ** rounds; i++) {
      result = md5(result + salt);
    }

    resolve(result === hash);
  });
