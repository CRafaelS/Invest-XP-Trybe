const express = require('express');
const clientController = require('../controller/clientController')

const client = express.Router();

client.post('/', clientController.newClient);

module.exports = client;