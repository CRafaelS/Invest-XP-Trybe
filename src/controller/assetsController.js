const assetsSevices = require('../services/assetsServices')

const buyAssets = async(req, res) => {
  const { codClient, codAtivo, qteAtivo } = req.body;
  const newAsset = await assetsSevices.buyAssets(codClient, codAtivo, qteAtivo);
  if (!newAsset) return res.status(409).json({ message: 'quantity is not available' });
  res.status(201).json(newAsset);
}

const sellAssets = async(req, res) => {
  const { codClient, codAtivo, qteAtivo } = req.body;
  const soldAsset = await assetsSevices.sellAssets(codClient, codAtivo, qteAtivo);
  if (!soldAsset) return res.status(409).json({ message: 'there is not assets enough' });
  res.status(201).json(soldAsset);
}


module.exports = { buyAssets, sellAssets }

// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status