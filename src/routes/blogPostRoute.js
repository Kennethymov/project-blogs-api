const express = require('express');
const BlogPostController = require('../controllers/BlogPostController');
const tokenValidation = require('../middlewares/tokenValidation');
const blogPostValidation = require('../middlewares/blogPostValidation');

const blogPostRoute = express.Router();

blogPostRoute.post('/', tokenValidation, blogPostValidation, BlogPostController.create);
blogPostRoute.get('/', tokenValidation, BlogPostController.getAll);
blogPostRoute.get('/:id', tokenValidation, BlogPostController.getById);

module.exports = blogPostRoute;