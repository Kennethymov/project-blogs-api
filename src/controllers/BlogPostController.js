const BlogPostService = require('../services/BlogPostService');
const CategoryService = require('../services/CategoryService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const errosCategories = [];
    await Promise.all(categoryIds.map(async (categoryId) => {
      const category = await CategoryService.getById(categoryId);
      if (!category) { errosCategories.push(categoryId); }
      return categoryId;
    }));

    if (errosCategories.length > 0) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    } 

    const { id: userId } = req.user;
    const newBlogPost = await BlogPostService.create(title, content, categoryIds, userId);
    return res.status(201).json(newBlogPost);
  } catch (err) {
    console.log(err);
    return res.status(409).json({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  const blogPosts = await BlogPostService.getAll();
  return res.status(200).json(blogPosts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const blogPost = await BlogPostService.getById(id);
  if (!blogPost) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(blogPost);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;
  const { userId: userIdPost } = await BlogPostService.getById(id);

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (userId !== userIdPost) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  const updatedBlogPost = await BlogPostService.updateById(id, title, content);
  console.log(updatedBlogPost);
  return res.status(200).json(updatedBlogPost);
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
};