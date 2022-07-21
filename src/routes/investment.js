const express = require('express');
const assetsController = require('../controller/assetsController')

const investment = express.Router();

investment.post('/comprar', assetsController.buyAssets);

module.exports = investment;