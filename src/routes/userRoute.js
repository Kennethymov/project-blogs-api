const express = require('express');
const UserController = require('../controllers/UserController');
const userValidation = require('../middlewares/userValidation');

const userRoute = express.Router();

userRoute.post('/', userValidation, UserController.create);

module.exports = userRoute;