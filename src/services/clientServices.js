const clientModels = require('../models/clientModels');
const { generateToken } = require('../utils/jwt');

const createClient = async (name, email, password) => {
  const newUser = await clientModels.createClient(name, email, password);
  const token = generateToken(newUser);
  return token;
};

module.exports = { createClient };