const express = require('express');
const investment = require('./src/routes/investment')
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/investimentos', investment)

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});

// Devido ao desafio técnico o arquivo dotenv não vai ser adicionado ao gitignore