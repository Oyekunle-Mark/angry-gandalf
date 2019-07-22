const md5 = require('md5');
const { v4 } = require('uuid');

module.exports = (password, rounds = 10) => {
  const salt = v4();
  let hash = password;

  for (let i = 0; i < 2 ** rounds; i++) {
    hash = md5(hash + salt);
  }

  return `${rounds}$${salt}$${hash}`;
};
