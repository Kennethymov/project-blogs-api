const CategoryService = require('../services/CategoryService');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await CategoryService.create(name);
    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
};

// const getAll = async (_req, res) => {
//   const users = await CategoryService.getAll();
//   return res.status(200).json(users);
// };

// const getById = async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   const user = await CategoryService.getById(id);
//   if (!user) {
//     return res.status(404).json({ message: 'User does not exist' });
//   }
//   return res.status(200).json(user);
// };

module.exports = {
  create,
  // getAll,
  // getById,
};