const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTczNjE4NTkzNn0.brmhRQ3RUzrgo1RXClUFJAYtew_hXIt_OQnbSy6H-Zc';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
