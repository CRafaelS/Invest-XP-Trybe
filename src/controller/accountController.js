const accountServices = require('../services/accountServices');

const newDeposit = async(req, res) => {
  const { CodCliente, Valor } = req.body;
  const deposit = await accountServices.deposit(CodCliente, Valor);
  if(!deposit) return res.status(422).json({
    message: '"Valor" must be greater than 0',
  });
  return res.status(201).json(deposit);
}

const newDraft = async(req, res) => {
  const { CodCliente, Valor } = req.body;
  const draft = await accountServices.draft(CodCliente, Valor);
  if(!draft) return res.status(422).json({
    message: '"Valor" must be greater than 0 or your balance is insufficient',
  });
  return res.status(201).json(draft);
}

const bankStatement = async(req, res) => {
  const { CodCliente } = req.params;
  const clientBankStatement = await accountServices.bankStatement(CodCliente);
  if(clientBankStatement[0] === undefined)  return res.status(404).json({
    message: 'unregistered customer'
  });
  return res.status(200).json(clientBankStatement);
}

module.exports = { newDeposit, newDraft, bankStatement }