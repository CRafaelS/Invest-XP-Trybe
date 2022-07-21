const connections = require('./connections');

const quantityAsset = async (codAtivo) => {
  const [quantity] = await connections.execute(
    'SELECT qtdeAtivo FROM Invest_XP_Trybe.Assets WHERE codAtivo=?', [codAtivo]
  );
  return quantity
}

const  assetClient = async (codClient, codAtivo, qteAtivo) => {
  await connections.execute(
    `INSERT INTO Invest_XP_Trybe.ClientAssets (codCliente, codAtivo, qtdeAtivo)
      VALUES (?,?,?);`, [codClient, codAtivo, qteAtivo],
  );
}

const newQuantityAsset = async (newQuantity, codAtivo) => {
  await connections.execute(
    'UPDATE Invest_XP_Trybe.Assets SET qtdeAtivo = ? WHERE codAtivo=?;',
      [newQuantity, codAtivo],
  );
}

module.exports = { quantityAsset, assetClient, newQuantityAsset };