const express = require('express');
const assetsController = require('../controller/assetsController');

const assets = express.Router();

assets.get('/:CodCliente', assetsController.getClientAssets);
assets.get('/', assetsController.getAsset);

module.exports = assets;