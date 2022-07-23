const assetsSevices = require('../services/assetsServices')

const getClientAssets = async(req, res) => {
  const { CodCliente } = req.params;
  const clientAssets = await assetsSevices.getClientAssets(CodCliente);
  if(clientAssets[0] === undefined)  return res.status(400).json({
    message: 'unregistered customer'
  });
  return res.status(201).json(clientAssets);
}

const getAsset = async(req, res) => {
  const { at } = req.query;
  const findAssets = await assetsSevices.getAsset();
  const asset = findAssets.filter((ativo) => ativo.CodAtivo.includes(at.toUpperCase()));
  
  return res.status(201).json(asset);

}

module.exports = { getClientAssets, getAsset }
