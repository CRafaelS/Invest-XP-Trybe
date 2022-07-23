const validate = require('../models/validateModels');
const validateClient = async(req, res, next) => {
  const { CodCliente } = req.body;
  if(CodCliente === undefined) {
    return res.status(400).json({ message: '"CodCliente" is required' });
  };
  const [validClient] = await validate.getClient(CodCliente);
  if(validClient === undefined) return res.status(400).json({ message: 'unregistered customer' });
  next();
}

module.exports = { validateClient }