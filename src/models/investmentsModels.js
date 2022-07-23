const connections = require('./connections');

const quantityAsset = async (codAtivo) => {
  const [quantity] = await connections.execute(
    'SELECT qtdeAtivo, idAtivo FROM Invest_XP_Trybe.Assets WHERE codAtivo=?', [codAtivo]
  );
  return quantity
}

const assetClient = async (codClient, idAtivo, qteAtivo) => {
  await connections.execute(
    `INSERT INTO Invest_XP_Trybe.ClientAssets (codCliente, idAtivo, qtdeAtivo) 
      VALUES (?,?,?);`, [codClient, idAtivo, qteAtivo],
  );
}

const newQuantityAsset = async (newQuantity, idAtivo) => {
  await connections.execute(
    'UPDATE Invest_XP_Trybe.Assets SET qtdeAtivo = ? WHERE idAtivo = ?;',
      [newQuantity, idAtivo],
  );
}

const getInvestAsset = async (codCliente, idAtivo) => {
  const [isInvestment] = await connections.execute(
    `SELECT qtdeAtivo FROM Invest_XP_Trybe.ClientAssets
      WHERE codCliente = ? AND idAtivo = ?;`, [codCliente, idAtivo],
  );
  return isInvestment
}

const newQuantityInvestment = async (newQuantity, idAtivo) => {
  await connections.execute(
    'UPDATE Invest_XP_Trybe.ClientAssets SET qtdeAtivo = ? WHERE idAtivo = ?;',
      [newQuantity, idAtivo],
  );
}

module.exports = { 
  quantityAsset,
  assetClient,
  newQuantityAsset,
  getInvestAsset,
  newQuantityInvestment
};