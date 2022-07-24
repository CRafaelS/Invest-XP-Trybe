const express = require('express');
const clientController = require('../controller/clientController');
const { validateEmail } = require('../middleware/client');

const client = express.Router();

client.post('/',validateEmail, clientController.newClient);

module.exports = client;