const connections = require('./connections');

const createClient = async (name, email, password) => {
  await connections.execute(
    `INSERT INTO Invest_XP_Trybe.Client (name,email,password) VALUES(?, ?, ?);`, 
    [name, email, password],
  );
  return { name, email}
};

module.exports = { createClient }