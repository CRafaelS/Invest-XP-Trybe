const assetsModels = require('../models/assetsModels');

const buyAssets = async(codClient, codAtivo, qteAtivo) => {
  const [avalibleAssets] = await assetsModels.quantityAsset(codAtivo);
  const [quantityInvestment] = await assetsModels.getInvestAsset(codClient, avalibleAssets.idAtivo);
  if (avalibleAssets.qtdeAtivo < qteAtivo) return false;
  if(quantityInvestment) {
    const newQuantityInvestment = quantityInvestment.qtdeAtivo + qteAtivo;
    await assetsModels.newQuantityInvestment(newQuantityInvestment, avalibleAssets.idAtivo);

    const newQuantity = avalibleAssets.qtdeAtivo - qteAtivo;
    await assetsModels.newQuantityAsset(newQuantity, avalibleAssets.idAtivo);
    return {codClient, codAtivo, qteAtivo}
  }

  await assetsModels.assetClient(codClient, avalibleAssets.idAtivo, qteAtivo);

  const newQuantity = avalibleAssets.qtdeAtivo - qteAtivo;
  await assetsModels.newQuantityAsset(newQuantity, avalibleAssets.idAtivo);

  return {codClient, codAtivo, qteAtivo}
}

const sellAssets = async(codClient, codAtivo, qteAtivo) => {
  const [avalibleAssets] = await assetsModels.quantityAsset(codAtivo);

  const [quantityInvestment] = await assetsModels.getInvestAsset(codClient, avalibleAssets.idAtivo);
  if (quantityInvestment.qtdeAtivo < qteAtivo) return false;
  const newQuantityInvestment = quantityInvestment.qtdeAtivo - qteAtivo;
  await assetsModels.newQuantityInvestment(newQuantityInvestment, avalibleAssets.idAtivo);

  const newQuantity = avalibleAssets.qtdeAtivo + qteAtivo;
  await assetsModels.newQuantityAsset(newQuantity, avalibleAssets.idAtivo);
  return {codClient, codAtivo, qteAtivo}
}

module.exports = { buyAssets, sellAssets }