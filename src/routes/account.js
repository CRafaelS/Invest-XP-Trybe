const express = require('express');
const accountController = require('../controller/accountController');
const { validateClient, validateValor } = require('../middleware/client');

const account = express.Router();

account.post('/deposito', validateClient, validateValor, accountController.newDeposit);
account.post('/saque',validateClient, validateValor, accountController.newDraft);
account.get('/:CodCliente', accountController.bankStatement);

module.exports = account;
