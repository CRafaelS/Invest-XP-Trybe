const assetsModels = require('../models/assetsModels');

const buyAssets = async(codClient, codAtivo, qteAtivo) => {
  const [avalibleAssets] = await assetsModels.quantityAsset(codAtivo);

  if (avalibleAssets.qtdeAtivo < qteAtivo) return false;

  await assetsModels.assetClient(codClient, codAtivo, qteAtivo);

  const newQuantity = avalibleAssets.qtdeAtivo - qteAtivo;
  await assetsModels.newQuantityAsset(newQuantity, codAtivo);

  return {codClient, codAtivo, qteAtivo}
}

module.exports = { buyAssets }