const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: '15d' });
};

module.exports = generateToken;
