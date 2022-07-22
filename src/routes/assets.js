const express = require('express');
const assetsController = require('../controller/assetsController')

const assets = express.Router();

assets.get('/client/:codClient', assetsController.getClientAssets);

module.exports = assets;