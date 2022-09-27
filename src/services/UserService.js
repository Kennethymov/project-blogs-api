const { User } = require('../models');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  getByEmail,
};