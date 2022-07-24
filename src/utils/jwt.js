const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWTSECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const generateToken = ({ name, email }) => 
    jwt.sign({ name, email }, JWTSECRET, jwtConfig);

module.exports = { generateToken };
