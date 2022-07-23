const assetsSevices = require('../services/assetsServices')

const getClientAssets = async(req, res) => {
  const { codClient } = req.params;
  const clientAssets = await assetsSevices.getClientAssets(codClient);
  res.status(201).json(clientAssets);
}

const getAsset = async(req, res) => {
  const { at } = req.query;
  const findAssets = await assetsSevices.getAsset();
  const asset = findAssets.filter((ativo) => ativo.CodAtivo.includes(at.toUpperCase()));
  
  res.status(201).json(asset);

}

module.exports = { getClientAssets, getAsset }
