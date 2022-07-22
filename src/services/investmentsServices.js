const investmentsModels = require('../models/investmentsModels');

const buyAssets = async(codClient, codAtivo, qteAtivo) => {
  const [avalibleAssets] = await investmentsModels.quantityAsset(codAtivo);
  const [quantityInvestment] = await investmentsModels.getInvestAsset(codClient, avalibleAssets.idAtivo);
  if (avalibleAssets.qtdeAtivo < qteAtivo) return false;
  if(quantityInvestment) {
    const newQuantityInvestment = quantityInvestment.qtdeAtivo + qteAtivo;
    await investmentsModels.newQuantityInvestment(newQuantityInvestment, avalibleAssets.idAtivo);

    const newQuantity = avalibleAssets.qtdeAtivo - qteAtivo;
    await investmentsModels.newQuantityAsset(newQuantity, avalibleAssets.idAtivo);
    return {codClient, codAtivo, qteAtivo}
  }

  await investmentsModels.assetClient(codClient, avalibleAssets.idAtivo, qteAtivo);

  const newQuantity = avalibleAssets.qtdeAtivo - qteAtivo;
  await investmentsModels.newQuantityAsset(newQuantity, avalibleAssets.idAtivo);

  return {codClient, codAtivo, qteAtivo}
}

const sellAssets = async(codClient, codAtivo, qteAtivo) => {
  const [avalibleAssets] = await investmentsModels.quantityAsset(codAtivo);

  const [quantityInvestment] = await investmentsModels.getInvestAsset(codClient, avalibleAssets.idAtivo);
  if (quantityInvestment.qtdeAtivo < qteAtivo) return false;
  const newQuantityInvestment = quantityInvestment.qtdeAtivo - qteAtivo;
  await investmentsModels.newQuantityInvestment(newQuantityInvestment, avalibleAssets.idAtivo);

  const newQuantity = avalibleAssets.qtdeAtivo + qteAtivo;
  await investmentsModels.newQuantityAsset(newQuantity, avalibleAssets.idAtivo);
  return {codClient, codAtivo, qteAtivo}
}

module.exports = { buyAssets, sellAssets }