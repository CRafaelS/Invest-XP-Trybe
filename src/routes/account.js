const express = require('express');
const accountController = require('../controller/accountController');

const account = express.Router();

account.post('/deposito', accountController.newDeposit);

module.exports = account;