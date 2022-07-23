const investmetsSevices = require('../services/investmentsServices')

const buyAssets = async(req, res) => {
  const { CodCliente, codAtivo, qteAtivo } = req.body;
  const newAsset = await investmetsSevices.buyAssets(CodCliente, codAtivo, qteAtivo);
  if (!newAsset) return res.status(409).json({ message: 'quantity is not available' });
  res.status(201).json(newAsset);
}

const sellAssets = async(req, res) => {
  const { CodCliente, codAtivo, qteAtivo } = req.body;
  const soldAsset = await investmetsSevices.sellAssets(CodCliente, codAtivo, qteAtivo);
  if (!soldAsset) return res.status(409).json({ message: 'there is not assets enough' });
  res.status(201).json(soldAsset);
}


module.exports = { buyAssets, sellAssets }

// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status