const express = require('express');
const investmentsController = require('../controller/investmentsController')

const investment = express.Router();

investment.post('/comprar', investmentsController.buyAssets);
investment.post('/vender', investmentsController.sellAssets);

module.exports = investment;