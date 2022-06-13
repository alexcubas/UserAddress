DROP SCHEMA IF EXISTS User_address;

CREATE DATABASE User_address;

CREATE TABLE User_address.data (
id int primary key auto_increment,
nome varchar(50) not null,
email varchar(100) not null,
senha varchar(25) not null
);

CREATE TABLE User_address.address (
id int primary key auto_increment,
user_id int not null,
CEP varchar(10) not null,
logradouro varchar(200) not null,
bairro varchar(50) not null,
localidade varchar(50) not null,
UF varchar(2) not null,
	FOREIGN KEY(user_id) REFERENCES data(id)
);

INSERT INTO User_address.data (nome, email, senha)
 VALUES ('alex', 'alex@gmail.com', '123456'),
  ('rodrigo', 'rodrigao@hotmail.com', 'rodrigo123'),
  ('breno', 'breno123@gmail.com', 'nuncasaberao');

INSERT INTO User_address.address (user_id, CEP, logradouro, bairro, localidade, UF)
 VALUES ('1', '81670-180', 'Rua Cascavel', 'Boqueirão', 'Curitiba', 'PR'),
 ('1', '59042-505', 'Praça Adonina Damasceno Pinto', 'Nordeste', 'Natal', 'RN'),
 ('1', '59042-110', 'Rua Alfredo Edeltrudes', 'Nordeste', 'Natal', 'RN');
 

