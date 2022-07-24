const validate = require('../models/validateModels');
const validateClient = async(req, res, next) => {
  const { CodCliente } = req.body;
  if(CodCliente === undefined) {
    return res.status(400).json({ message: '"CodCliente" is required' });
  };
  const [validClient] = await validate.getClient(CodCliente);
  if(validClient === undefined) return res.status(404).json({ message: 'unregistered customer' });
  next();
}

const validateValor = async(req, res, next) => {
  const { Valor } = req.body;
  if(Valor === undefined) {
    return res.status(400).json({ message: '"Valor" is required' });
  };
  if(typeof Valor !== 'number') return res.status(400).json({
    message: '"Valor" must be a number'
  });
  next();
}

module.exports = { validateClient, validateValor }