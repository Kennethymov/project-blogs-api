const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const tokenValidation = require('../midle/tokenValidation');
const categoryValidation = require('../midle/categoryValidation');

const categoryRoute = express.Router();

categoryRoute.post('/', tokenValidation, categoryValidation, CategoryController.create);

module.exports = categoryRoute;