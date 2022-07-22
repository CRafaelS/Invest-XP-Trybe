const assetsSevices = require('../services/assetsServices')

const getClientAssets = async(req, res) => {
  const { codClient } = req.params;
  const clientAssets = await assetsSevices.getClientAssets(codClient);
  res.status(201).json(clientAssets);
}

module.exports = { getClientAssets }
