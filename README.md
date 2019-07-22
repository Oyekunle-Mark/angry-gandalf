# Bcrypt Clone

A custom bcrypt clone.
This library is promise based.

`index.js` exports two methods:

- `hash`: Takes a password and a salt round and returns the md5 hash of the password. Salt round defaults to 10 if no second argument is provided. Resolves to the hashed password.
- `compare`: Takes the password to be checked and the hashed password. Resolves to true if the match is successful and false if not.
