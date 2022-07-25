const express = require('express');
const clientController = require('../controller/clientController');
const { validateEmail,validateName, validatePassword } = require('../middleware/client');

const client = express.Router();

client.post('/',validateName, validateEmail, validatePassword, clientController.newClient);

module.exports = client;