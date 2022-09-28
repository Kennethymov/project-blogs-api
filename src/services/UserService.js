const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } }, {
    attributes: { exclude: ['password'] },
  });
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

const getAll = () => {
  const users = User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user;
};

module.exports = {
  getByEmail,
  create,
  getAll,
  getById,
};