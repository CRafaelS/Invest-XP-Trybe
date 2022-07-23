const accountServices = require('../services/accountServices');

const newDeposit = async(req, res) => {
  const { CodCliente, Valor } = req.body;
  const deposit = await accountServices.deposit(CodCliente, Valor);
  if(!deposit) return res.status(422).json({  message: '"Valor" must be greater than 0' })
  return res.status(200).json(deposit);
}

module.exports = { newDeposit }