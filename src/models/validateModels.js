const connections = require('./connections');

const getClient = async (CodCliente) => {
  const [findClient] = await connections.execute(
    'SELECT * FROM Invest_XP_Trybe.Client WHERE codCliente = ?;', [CodCliente]
  );
  return findClient
}

module.exports = { getClient }