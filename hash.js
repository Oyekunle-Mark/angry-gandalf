const md5 = require('md5');
const { v4 } = require('uuid');

/**
 * *Returns the hash of a password using the
 * *md5 hashing algorithm
 * @param {any} password
 * @param {number} [rounds=10]
 * @returns {string}
 */
module.exports = (password, rounds = 10) =>
  new Promise((resolve, reject) => {
    if (!password) reject(Error('Provide a value to be hashed'));

    const salt = v4();
    let hash = password;

    for (let i = 0; i < 2 ** rounds; i++) {
      hash = md5(hash + salt);
    }

    resolve(`${rounds}$${salt}$${hash}`);
  });
