const assetsModels = require('../models/assetsModels');

const buyAssets = async(codClient, codAtivo, qteAtivo) => {
  const avalibleAssets = await assetsModels.quantityAsset(codAtivo);

  if (avalibleAssets < qteAtivo) return false;

  await assetsModels.assetClient(codClient, codAtivo, qteAtivo);

  const newQuantity = avalibleAssets - qteAtivo;
  await assetsModels.quantityAsset(newQuantity);

  return {codClient, codAtivo, qteAtivo}
}

module.exports = { buyAssets }