const md5 = require('md5');

module.exports = (originalPassword, hashedPassword) => {
  const [rounds, salt, hash] = hashedPassword.split('$');
  let result = originalPassword;

  for (let i = 0; i < 2 ** rounds; i++) {
    result = md5(result + salt);
  }

  return result === hash ? true : false;
};
