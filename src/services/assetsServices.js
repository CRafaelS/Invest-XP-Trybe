const assetsServices = require('../models/assetsModels');

const getClientAssets = async(codCliente) => {
  const getClientAsset = await assetsServices.getClientAssets(codCliente);
  return getClientAsset.map((data) => ({
    CodCliente: data.codCliente,
    CodAtivo: data.codAtivo,
    QtdeAtivo: data.qtdeAtivo,
    Valor: data.price,
  }));
}

module.exports = { getClientAssets }