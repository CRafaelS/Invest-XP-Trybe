const assetsSevices = require('../services/assetsServices')

const getClientAssets = async(req, res) => {
  const { CodCliente } = req.params;
  const clientAssets = await assetsSevices.getClientAssets(CodCliente);
  if(clientAssets[0] === undefined)  return res.status(404).json({
    message: 'unregistered customer'
  });
  return res.status(200).json(clientAssets);
}

const getAsset = async(req, res) => {
  const { at } = req.query;
  const findAssets = await assetsSevices.getAsset();
  const asset = findAssets.filter((ativo) => ativo.CodAtivo.includes(at.toUpperCase()));
  if(asset[0] === undefined) return res.status(404).json({ message: 'unregistered Assets' });
  return res.status(200).json(asset);

}

module.exports = { getClientAssets, getAsset }
