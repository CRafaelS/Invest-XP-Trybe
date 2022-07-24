const express = require('express');
const investment = require('./src/routes/investment');
const assets = require('./src/routes/assets');
const account = require('./src/routes/account');
const client = require('./src/routes/client');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/investimentos', investment);
app.use('/ativos', assets);
app.use('/conta', account);
app.use('/cliente', client);

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});

// Devido ao desafio técnico o arquivo dotenv não vai ser adicionado ao gitignore