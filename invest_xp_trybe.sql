DROP DATABASE IF EXISTS Invest_XP_Trybe;

CREATE DATABASE Invest_XP_Trybe ;
USE Invest_XP_Trybe ;

-- -----------------------------------------------------
-- Table Client`
-- -----------------------------------------------------
CREATE TABLE Client (
  codCliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(45) NOT NULL UNIQUE,
  password VARCHAR(45) NOT NULL
);

INSERT INTO Client(name, email, password) 
  VALUES ('Carlos Rafael', 'carlos.rafael@engenharia.ufjf.br','abcd1234');

-- -----------------------------------------------------
-- Table Account
-- -----------------------------------------------------
CREATE TABLE Account(
  idAccount INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  balance DECIMAL(15,2),
  codCliente INT NOT NULL,
  dateMov TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (codCliente) REFERENCES Client(codCliente)
  );

INSERT INTO Account(balance, codCliente) 
  VALUES (2000.00, 1);

-- -----------------------------------------------------
-- Table Assets
-- -----------------------------------------------------
CREATE TABLE Assets (
  idAtivo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  codAtivo  VARCHAR(45) NOT NULL UNIQUE,
  qtdeAtivo INT ,
  price DECIMAL(10,2)
  );

INSERT INTO Assets(codAtivo, qtdeAtivo, price) 
  VALUES ('XPBR31', 8000, 100.51),
  ('ITUB4', 7000, 23.72),
  ('WEGE3', 6500, 25.99),
  ('VALE3', 6800, 67.39),
  ('BBAS3', 6300, 32.73),
  ('RENT3', 4000, 73.00),
  ('TEND3', 4500, 28.00),
  ('ASAI3', 5500, 20.00),
  ('KLBN11', 5800, 31.20),
  ('SUZB3', 5800, 46.49),
  ('PETR4', 5000, 29.17);

-- -----------------------------------------------------
-- Table ClientAssets
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ClientAssets (
  codCliente INT NOT NULL,
  idAtivo INT NOT NULL,
  qtdeAtivo INT,
  CONSTRAINT PRIMARY KEY (codCliente, idAtivo),
  FOREIGN KEY (codCliente) REFERENCES Client(codCliente),
  FOREIGN KEY (idAtivo) REFERENCES Assets(idAtivo)
  );

  INSERT INTO ClientAssets(codCliente, idAtivo, qtdeAtivo) 
    VALUES (1, 1, 500);
