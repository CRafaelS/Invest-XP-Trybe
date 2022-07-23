const express = require('express');
const accountController = require('../controller/accountController');

const account = express.Router();

account.post('/deposito', accountController.newDeposit);
account.post('/saque', accountController.newDraft);
account.get('/:CodCliente', accountController.bankStatement);

module.exports = account;
