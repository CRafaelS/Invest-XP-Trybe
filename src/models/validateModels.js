const connections = require('./connections');

const getClient = async (CodCliente) => {
  const [findClient] = await connections.execute(
    'SELECT * FROM Invest_XP_Trybe.Client WHERE codCliente = ?;', [CodCliente]
  );
  return findClient
}

const getEmail = async (email) => {
  const [findEmail] = await connections.execute(
    'SELECT email FROM Invest_XP_Trybe.Client WHERE email=?;', [email]
  );
  return findEmail
}

module.exports = { getClient, getEmail }