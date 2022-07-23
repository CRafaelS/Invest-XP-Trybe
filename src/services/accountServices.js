const accountModels = require('../models/accountModels');

const deposit = async(CodCliente, Valor) => {
  if(Valor <= 0) return false;
  const [balanceAccount] = await accountModels.balanceBank(CodCliente);
  const newBalace = Number(balanceAccount.balance) + Valor
  await accountModels.depositOrDraft(CodCliente, newBalace);
  return {
    CodCliente,
    Valor,
  };
};

module.exports = { deposit }