const express = require('express');
const UserController = require('../controllers/UserController');
const userValidation = require('../midle/userValidation');
const tokenValidation = require('../midle/tokenValidation');

const userRoute = express.Router();

userRoute.post('/', userValidation, UserController.create);
userRoute.get('/', tokenValidation, UserController.getAll);

module.exports = userRoute;