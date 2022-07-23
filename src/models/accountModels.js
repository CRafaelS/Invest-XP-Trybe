const connections = require('./connections');

const balanceBank = async (CodCliente) => {
  const [newBalace] = await connections.execute(
    `SELECT balance FROM Invest_XP_Trybe.Account 
      WHERE codCliente=? ORDER BY idAccount DESC LIMIT 1;`, [CodCliente]
  )
  return newBalace;
};

const depositOrDraft = async (CodCliente, Valor) => {
  await connections.execute(
    `INSERT INTO Invest_XP_Trybe.Account (balance, codCliente) VALUES (?,?);`, 
    [Valor, CodCliente],
  );
};

module.exports = { balanceBank, depositOrDraft }