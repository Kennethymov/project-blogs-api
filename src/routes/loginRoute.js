const express = require('express');
const LoginController = require('../controllers/LoginController');

const loginRoute = express.Router();

loginRoute.post('/', LoginController.login);

module.exports = loginRoute;