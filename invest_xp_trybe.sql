DROP DATABASE IF EXISTS Invest_XP_Trybe;

CREATE DATABASE Invest_XP_Trybe ;
USE Invest_XP_Trybe ;

-- -----------------------------------------------------
-- Table Client`
-- -----------------------------------------------------
CREATE TABLE Client (
  idClient INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
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
  idClient INT NOT NULL,
  dateMov TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (idClient) REFERENCES Client(idClient)
  );

INSERT INTO Account(balance, idClient) 
  VALUES (2000.00, 1);

-- -----------------------------------------------------
-- Table Assets
-- -----------------------------------------------------
CREATE TABLE Assets (
  idAsset INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  assetCod VARCHAR(45) NOT NULL UNIQUE,
  quantity INT ,
  price DECIMAL(10,2)
  );

INSERT INTO Assets(assetCod, quantity, price) 
  VALUES ('XPBR31', 750000, 100.51),
  ('ITUB4', 700000, 23.72),
  ('WEGE3', 650000, 25.99),
  ('VALE3', 600000, 67.39),
  ('PETR4', 500000, 29.17);

-- -----------------------------------------------------
-- Table ClientAssets
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ClientAssets (
  idClient INT NOT NULL,
  idAsset INT NOT NULL,
  quantityAsset INT,
  CONSTRAINT PRIMARY KEY (idClient, idAsset),
  FOREIGN KEY (idClient) REFERENCES Client(idClient),
  FOREIGN KEY (idAsset) REFERENCES Assets(idAsset)
  );

  INSERT INTO ClientAssets(idClient, idAsset, quantityAsset) 
    VALUES (1, 1, 500),
    (1,3, 300);
