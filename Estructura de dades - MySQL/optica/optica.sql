CREATE DATABASE optica;
USE optica;


CREATE TABLE proveidors (
proveidor_id INT(11) NOT NULL AUTO_INCREMENT,
nom VARCHAR(60) NOT NULL,
carrer VARCHAR(60) NOT NULL,
carrer_numero INT(11) NOT NULL,
pis INT(11) NOT NULL,
porta INT(11) NOT NULL,
codi_postal INT(11) NOT NULL,
pais VARCHAR(60) NOT NULL,
telefon INT(60) NOT NULL,
FAX INT(60),
NIF VARCHAR(60) NOT NULL,
PRIMARY KEY(proveidor_id),
UNIQUE KEY (telefon)
);

CREATE TABLE marques (
marca_id INT(11) NOT NULL AUTO_INCREMENT,
nom_marca VARCHAR(60) NOT NULL,
proveidor_id INT(11) NOT NULL,
PRIMARY KEY(marca_id),
FOREIGN KEY(proveidor_id) REFERENCES proveidors(proveidor_id)
);

CREATE TABLE clients (
client_id INT(11) NOT NULL AUTO_INCREMENT,
nom VARCHAR(60) NOT NULL,
address VARCHAR(60) NOT NULL,
telefon INT(11) NOT NULL,
correu VARCHAR(60) NOT NULL,
data_registre DATE NOT NULL,
recomenat VARCHAR(60),
PRIMARY KEY(client_id),
UNIQUE KEY (correu)
);

CREATE TABLE empleats (
empleat_id INT(11) NOT NULL AUTO_INCREMENT,
nom VARCHAR(60) NOT NULL,
PRIMARY KEY(empleat_id)
);

CREATE TABLE ulleres (
ullera_id INT(11) NOT NULL AUTO_INCREMENT,
graduacio_vidre1 INT(11) NOT NULL,
graduacio_vidre2 INT(11) NOT NULL,
tipus_montura VARCHAR(60) NOT NULL,
color_montura VARCHAR(60) NOT NULL,
color_vidres VARCHAR(60) NOT NULL,
preu INT(11) NOT NULL,
proveidor_id INT(11) NOT NULL,
marca_id INT(11) NOT NULL,
client_id INT(11),
empleat_id INT(11),
factura_date DATE,
PRIMARY KEY(ullera_id),
FOREIGN KEY(proveidor_id) REFERENCES proveidors(proveidor_id),
FOREIGN KEY(marca_id) REFERENCES marques(marca_id),
FOREIGN KEY(client_id) REFERENCES clients(client_id),
FOREIGN KEY(empleat_id) REFERENCES empleats(empleat_id)
);

INSERT INTO proveidors (proveidor_id, nom, carrer, carrer_numero, pis, porta, codi_postal, pais, telefon, FAX, NIF) 
VALUES (1, 'proveidor1', 'carrer1', '1', '1', '1', '08001', 'Espanya', '123456789', '123456789', 'A123456789'),
('2', 'proveidor2', 'carrer2', '2', '2', '2', '08001', 'Espanya', '123456780', '123456780', 'A123456780'),
('3', 'proveidor3', 'carrer3', '3', '3', '3', '08003', 'Espanya', '123456781', '123456781', 'A123456781'),
('4', 'proveidor4', 'carrer4', '4', '4', '4', '08004', 'Espanya', '123456782', '123456782', 'A123456781');

INSERT INTO marques (marca_id, nom_marca, proveidor_id) VALUES ('1', 'marca1', '1'),
('2', 'marca2', '1'),
('3', 'marca3', '1'),
('4', 'marca4', '1'),
('5', 'marca5', '4'),
('6', 'marca6', '4'),
('7', 'marca7', '2'),
('8', 'marca8', '2'),
('9', 'marca9', '3');

INSERT INTO empleats (empleat_id, nom) VALUES ('1', 'Oscar'),
('2', 'Mario'),
('3', 'David'),
('4', 'Jessica'),
('5', 'Marta');

INSERT INTO clients (nom, address, telefon, correu, data_registre, recomenat) 
VALUES ('nom1', 'address1', '123456781', 'nom1@gmail.com', '2020-01-30', null),
('nom2', 'address2', '123456782', 'nom2@gmail.com', '2020-02-02', null),
('nom3', 'address3', '123456783', 'nom3@gmail.com', '2020-03-12', null),
('nom4', 'address4', '123456784', 'nom4@gmail.com', '2020-04-30', '1'),
('nom5', 'address5', '123456785', 'nom5@gmail.com', '2020-05-03', '2'),
('nom6', 'address6', '123456786', 'nom6@gmail.com', '2020-05-08', '3'),
('nom7', 'address7', '123456787', 'nom7@gmail.com', '2020-06-02', '4'),
('nom8', 'address8', '123456788', 'nom8@gmail.com', '2020-06-10', null),
('nom9', 'address9', '123456789', 'nom9@gmail.com', '2020-06-15', '1'),
('nom10', 'address10', '123456771', 'nom10@gmail.com', '2020-06-20', '8');

INSERT INTO ulleres (ullera_id, graduacio_vidre1, graduacio_vidre2, tipus_montura, color_montura, color_vidres, preu, proveidor_id, marca_id, client_id, factura_date, empleat_id) 
VALUES ('1', '10', '10', 'flotant', 'negre', 'transparent', '500', '1', '1', '1', '2020-01-30', '1'),
('2', '20', '20', 'pasta', 'negre', 'transparent', '600', '1', '2', '1', '2020-01-30', '2'),
('3', '30', '30', 'metalica', 'negre', 'transparent', '700', '1', '3', '1', '2020-01-30', '3'),
('4', '40', '40', 'flotant', 'negre', 'transparent', '800', '1', '4', '2', '2020-02-02', '4'),
('5', '50', '50', 'flotant', 'blau', 'transparent', '500', '4', '5', '3', '2020-03-12', '1'),
('6', '60', '60', 'pasta', 'blau', 'transparent', '600', '4', '6', '4', '2020-04-30', '2'),
('7', '70', '70', 'metalica', 'blau', 'transparent', '700', '2', '7', '5', '2020-05-03', '3'),
('8', '80', '80', 'metalica', 'vermell', 'transparent', '800', '2', '8', '6', '2020-05-08', '4'),
('9', '20', '20', 'pasta', 'vermell', 'transparent', '700', '3', '9', '7', '2020-06-02', '1'),
('10', '20', '30', 'pasta', 'vermell', 'transparent', '800', '3', '9', '8', '2020-06-10', '2'),
('11', '30', '20', 'pasta', 'vermell', 'transparent', '800', '3', '9', '9', '2020-06-15', '3'),
('12', '20', '30', 'pasta', 'negre', 'transparent', '500', '1', '2', '10', '2020-06-20', '4'),
('13', '30', '20', 'pasta', 'negre', 'transparent', '600', '1', '2', '10', '2020-06-21', '1'),
('14', '60', '50', 'flotant', 'blau', 'transparent', '600', '4', '5', '9', '2020-06-22', '2'),
('15', '50', '60', 'flotant', 'blau', 'transparent', '650', '4', '5', '7', '2020-06-23', '3'),
('16', '40', '80', 'metalica', 'vermell', 'transparent', '800', '2', '8', '8', '2020-06-24', '4'),
('17', '40', '40', 'metalica', 'vermell', 'transparent', '600', '2', '8', null, null, null),
('18', '70', '70', 'pasta', 'blau', 'transparent', '700', '2', '7', null, null, null),
('19', '70', '70', 'flotant', 'vermell', 'transparent', '700', '2', '7', null, null, null),
('20', '30', '70', 'metalica', 'blau', 'transparent', '700', '2', '7', null, null, null);


-- Llista el total de factures d'un client en un període determinat
SELECT COUNT(ullera_id) AS 'nombre de factures', factura_date, client_id
FROM ulleres
WHERE client_id = '1' 
AND factura_date = '2020-01-30';

-- Llista els diferents models d'ulleres que ha venut un empleat durant un any
SELECT * FROM ulleres
WHERE empleat_id = '1' 
AND factura_date
BETWEEN '2020-01-01'
AND '2020-12-31';

-- Llista els diferents proveïdors que han subministrat ulleres venudes amb èxit per l'òptica
SELECT distinct proveidors.proveidor_id AS 'Proveidors amb ventes exitoses'
FROM ulleres
INNER JOIN proveidors
ON proveidors.proveidor_id = ulleres.proveidor_id
WHERE factura_date IS NOT NULL
ORDER BY proveidors.proveidor_id;


