const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.findOne({ where: { name } });

  if (category) { 
    throw new Error('Category already registered');
  }

  await Category.create({ name });

  const newCategory = await Category.findOne({ where: { name } });

  return newCategory;
};

// const getAll = () => {
//   const categories = Category.findAll({
//     attributes: { exclude: ['password'] },
//   });
//   return categories;
// };

// const getById = async (id) => {
//   const categories = await Category.findByPk(id, {
//     attributes: { exclude: ['password'] },
//   });
//   return categories;
// };

module.exports = {
  create,
  // getAll,
  // getById,
};