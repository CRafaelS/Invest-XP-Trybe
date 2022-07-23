const express = require('express');
const investmentsController = require('../controller/investmentsController');
const { validateClient } = require('../middleware/client');
const { validateAsset } = require('../middleware/assetsValidate');

const investment = express.Router();

investment.post('/comprar', validateClient, validateAsset, investmentsController.buyAssets);
investment.post('/vender', validateClient, validateAsset, investmentsController.sellAssets);

module.exports = investment;