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

const validateEmail = async(req, res, next) => {
  const validEmail = /\S+@\S+\.\S+/;
  const { email } = req.body;
  
  if (!email || email === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  if (!validEmail.test(email)) { 
    return res.status(400).json({ message: '"email" must be a valid email' }); 
  }

  const [findEmail] = await validate.getEmail(email);
  if (findEmail) {
    return res.status(409).json({
      message:'email is already registered, choose another email'
    });
  }
  next();
};

const validateName = async(req, res, next) => {
  const { name } = req.body;
  if(name === undefined) {
    return res.status(400).json({ message: '"name" is required' });
  };
  next();
}

const validatePassword = async(req, res, next) => {
  const { password } = req.body;
  if(password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  };
  next();
}

module.exports = { validateClient, validateValor, validateEmail, validateName,validatePassword }