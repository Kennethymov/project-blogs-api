const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const create = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });
console.log(user);
  if (user) { 
    throw new Error('User already registered');
  }

  await User.create({ displayName, email, password, image });

  const jwtCongig = {
  expiresIn: '7d',
  algorithm: 'HS256',
  };

  const token = jwt.sign({ email }, secret, jwtCongig);

  return token;
};

module.exports = {
  getByEmail,
  create,
};