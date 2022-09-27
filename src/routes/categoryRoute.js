const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const tokenValidation = require('../middlewares/tokenValidation');
const categoryValidation = require('../middlewares/categoryValidation');

const categoryRoute = express.Router();

categoryRoute.post('/', tokenValidation, categoryValidation, CategoryController.create);
categoryRoute.get('/', tokenValidation, CategoryController.getAll);

module.exports = categoryRoute;