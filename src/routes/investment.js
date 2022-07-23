const express = require('express');
const investmentsController = require('../controller/investmentsController');
const { validateClient } = require('../middleware/client');

const investment = express.Router();

investment.post('/comprar', validateClient, investmentsController.buyAssets);
investment.post('/vender', validateClient, investmentsController.sellAssets);

module.exports = investment;