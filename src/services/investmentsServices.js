const investmentsModels = require('../models/investmentsModels');

const buyAssets = async(codClient, codAtivo, qtdeAtivo) => {
  const [avalibleAssets] = await investmentsModels.quantityAsset(codAtivo);
  const [quantityInvestment] = await investmentsModels.getInvestAsset(codClient, avalibleAssets.idAtivo);
  if (avalibleAssets.qtdeAtivo < qtdeAtivo) return false;
  if(quantityInvestment) {
    const newQuantityInvestment = quantityInvestment.qtdeAtivo + qtdeAtivo;
    await investmentsModels.newQuantityInvestment(newQuantityInvestment, avalibleAssets.idAtivo);

    const newQuantity = avalibleAssets.qtdeAtivo - qtdeAtivo;
    await investmentsModels.newQuantityAsset(newQuantity, avalibleAssets.idAtivo);
    return {codClient, codAtivo, qtdeAtivo}
  }

  await investmentsModels.assetClient(codClient, avalibleAssets.idAtivo, qtdeAtivo);

  const newQuantity = avalibleAssets.qtdeAtivo - qtdeAtivo;
  await investmentsModels.newQuantityAsset(newQuantity, avalibleAssets.idAtivo);

  return {codClient, codAtivo, qtdeAtivo}
}

const sellAssets = async(codClient, codAtivo, qtdeAtivo) => {
  const [avalibleAssets] = await investmentsModels.quantityAsset(codAtivo);

  const [quantityInvestment] = await investmentsModels.getInvestAsset(codClient, avalibleAssets.idAtivo);
  if (quantityInvestment.qtdeAtivo < qtdeAtivo) return false;
  const newQuantityInvestment = quantityInvestment.qtdeAtivo - qtdeAtivo;
  await investmentsModels.newQuantityInvestment(newQuantityInvestment, avalibleAssets.idAtivo);

  const newQuantity = avalibleAssets.qtdeAtivo + qtdeAtivo;
  await investmentsModels.newQuantityAsset(newQuantity, avalibleAssets.idAtivo);
  return {codClient, codAtivo, qtdeAtivo }
}

module.exports = { buyAssets, sellAssets }