const clientServices = require('../services/clientServices')

const newClient = async (req, res) => {
  const { name, email, password } = req.body;
  const token = await clientServices.createClient(name, email, password);
  return res.status(201).json({ token });
};

module.exports = { newClient };