require('dotenv/config');
const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const tokenValidation = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await UserService.getByEmail(decoded.email);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.user = user;
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  
  next();
};

module.exports = tokenValidation;