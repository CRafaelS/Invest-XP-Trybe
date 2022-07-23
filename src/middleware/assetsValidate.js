const validate = require('../models/investmentsModels');

const validateAsset = async(req, res, next) => {
  const { codAtivo, qteAtivo } = req.body;
  if(codAtivo === undefined) {
    return res.status(400).json({ message: '"codAtivo" is required' });
  };
  const [validClient] = await validate.quantityAsset(codAtivo);
  if(validClient === undefined) return res.status(400).json({ message: 'unregistered Assets' });
  if(qteAtivo === undefined) {
    return res.status(400).json({ message: '"qteAtivo" is required' });
  };
  next();
}

module.exports = { validateAsset }