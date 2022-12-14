const express = require('express');
const UserController = require('../controllers/UserController');
const userValidation = require('../middlewares/userValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const userRoute = express.Router();

userRoute.post('/', userValidation, UserController.create);
userRoute.get('/', tokenValidation, UserController.getAll);
userRoute.get('/:id', tokenValidation, UserController.getById);

module.exports = userRoute;