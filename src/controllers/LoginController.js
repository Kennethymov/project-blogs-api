require('dotenv/config');
const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await UserService.getByEmail(email);

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const jwtCongig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ email }, secret, jwtCongig);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};