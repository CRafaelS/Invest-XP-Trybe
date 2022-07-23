const accountModels = require('../models/accountModels');

const deposit = async(CodCliente, Valor) => {
  if(Valor <= 0) return false;
  const [balanceAccount] = await accountModels.balanceBank(CodCliente);
  const newBalace = Number(balanceAccount.balance) + Valor;
  await accountModels.depositOrDraft(CodCliente, newBalace);
  return {
    CodCliente,
    Valor,
  };
};

const draft = async(CodCliente, Valor) => {
  const [balanceAccount] = await accountModels.balanceBank(CodCliente);
  if(Valor > Number(balanceAccount.balance) || Valor <= 0) return false;
  const newBalace = Number(balanceAccount.balance) - Valor;
  await accountModels.depositOrDraft(CodCliente, newBalace);
  return {
    CodCliente,
    Valor,
  };
}

const bankStatement = async (CodCliente) => {
  const clientBankStatement = await accountModels.bankStatement(CodCliente);
  return clientBankStatement.map((data) => ({
    CodCliente: data.codCliente,
    Saldo: data.balance,
    Data_Hora: data.dateMov,
  }));
}

module.exports = { deposit, draft, bankStatement };
