const UserService = require('../services/UserService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await UserService.create(displayName, email, password, image);
    return res.status(201).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(409).json({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  const users = await UserService.getAll();
  res.status(200).json(users);
};

module.exports = {
  create,
  getAll,
};