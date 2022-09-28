const { BlogPost, sequelize, PostCategory, User, Category } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const blogPost = await BlogPost.findOne({ where: { title } });

  if (blogPost) { 
    throw new Error('BlogPost already registered');
  }

  const t = await sequelize.transaction();

  try {
    const newBlogPost = await BlogPost.create({ title, content, userId }, { transaction: t });
    const postCategoriesIds = categoryIds.map((id) => ({ postId: newBlogPost.id, categoryId: id }));
    await PostCategory.bulkCreate(postCategoriesIds, { transaction: t });
    await t.commit();
    console.log(newBlogPost);
    return newBlogPost;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [{
      model: User,
      required: true,
      attributes: ['id', 'displayName', 'email', 'image'],
      as: 'user',
    },
    {
      model: Category,
      required: true,
      attributes: ['id', 'name'],
      as: 'categories',
    }],
  });
  return blogPosts;
};

// const getById = async (id) => {
//   const categories = await BlogPost.findByPk(id, {
//     attributes: { exclude: ['password'] },
//   });
//   return categories;
// };

module.exports = {
  create,
  getAll,
  // getById,
};