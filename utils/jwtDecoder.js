const JWT = require('jsonwebtoken');

module.exports = (body) => {
  if (!body) {
    return new Error('invalid jwtdata');
  }
  const verified = JWT.verify(body.toString('utf8'), process.env.JWT);
  console.log(verified);
  return JWT.verify(body.toString('utf8'), process.env.JWT, {
    algorithm: 'HS256',
  });
};
