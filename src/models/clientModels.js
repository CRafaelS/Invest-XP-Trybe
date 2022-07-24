const connections = require('./connections');

const createClient = async (name, email, password) => {
  const [clientAccount] = await connections.execute(
    `INSERT INTO Invest_XP_Trybe.Client (name,email,password) VALUES(?, ?, ?);`, 
    [name, email, password],
  );
  return { name, email, codCliente: clientAccount.insertId}
};

const openAccount = async (codCliente) => {
  await connections.execute(
    `INSERT INTO Invest_XP_Trybe.Account (balance, codCliente) VALUES(0, ?);`, 
    [codCliente],
  );
};

module.exports = { createClient, openAccount }