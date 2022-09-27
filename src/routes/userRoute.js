const express = require('express');
const UserController = require('../controllers/UserController');

const userRoute = express.Router();

userRoute.post('/', UserController.create);

module.exports = userRoute;