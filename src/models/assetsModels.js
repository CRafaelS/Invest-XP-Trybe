const connections = require('./connections');

const getClientAssets = async (codCliente) => {
  const [clientAsset] = await connections.execute(
    `SELECT c.codCliente, a.codAtivo, c.qtdeAtivo, a.price
      FROM Invest_XP_Trybe.ClientAssets AS c INNER JOIN Invest_XP_Trybe.Assets as a 
      ON c.idAtivo = a.idAtivo WHERE c.codCliente= ?;`, [codCliente]
  );
  return clientAsset
}

const getAsset = async () => {
  const [selectAsset] = await connections.execute(
    'SELECT codAtivo, qtdeAtivo, price FROM Invest_XP_Trybe.Assets;'
  );
  return selectAsset
}

module.exports = { 
  getClientAssets,
  getAsset,
};