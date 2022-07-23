const express = require('express');
const accountController = require('../controller/accountController');
const { validateClient } = require('../middleware/client');

const account = express.Router();

account.post('/deposito', validateClient, accountController.newDeposit);
account.post('/saque',validateClient, accountController.newDraft);
account.get('/:CodCliente', accountController.bankStatement);

module.exports = account;
