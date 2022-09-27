require('dotenv/config');
const jwt = require('jsonwebtoken');
// const UserService = require('../services/UserService');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const tokenValidation = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, secret);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  
  next();
};

module.exports = tokenValidation;