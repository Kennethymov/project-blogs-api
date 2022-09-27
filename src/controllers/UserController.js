const UserService = require('../services/UserService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await UserService.create(displayName, email, password, image);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  const users = await UserService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = await UserService.getById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};