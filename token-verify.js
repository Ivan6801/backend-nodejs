const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc0MzM1NzE2Nn0.RfEhNd8u4BxSRqTcVSCYJ-qfOwqD7ED1aiz6BIYnO2Y';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
