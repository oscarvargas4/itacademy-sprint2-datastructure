CREATE DATABASE IF NOT EXISTS pizzeria;

USE pizzeria;

CREATE TABLE IF NOT EXISTS localitats (
    localitat_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45),
    provincia_id INT(11) NOT NULL,
    PRIMARY KEY (localitat_id)
);

CREATE TABLE IF NOT EXISTS clients (
    client_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    cognom VARCHAR(45) NOT NULL,
    address VARCHAR(60) NOT NULL,
    codi_postal INT(11) NOT NULL,
    localitat_id INT(11) NOT NULL,
    telefon INT(20),
    PRIMARY KEY (client_id),
    FOREIGN KEY (localitat_id) REFERENCES localitats(localitat_id)
);

CREATE TABLE IF NOT EXISTS categories (
    categoria_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    PRIMARY KEY (categoria_id)
);

CREATE TABLE IF NOT EXISTS productes (
    producte_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    descripcio VARCHAR(60) NOT NULL,
    imatge_url VARCHAR(45) NOT NULL,
    preu DECIMAL(10, 2) NOT NULL,
    categoria_id INT(11) NOT NULL,
    PRIMARY KEY (producte_id),
    FOREIGN KEY (categoria_id) REFERENCES categories(categoria_id)
);

CREATE TABLE IF NOT EXISTS botigues (
    botiga_id INT(11) NOT NULL AUTO_INCREMENT,
    address VARCHAR(60) NOT NULL,
    codi_postal INT(11) NOT NULL,
    localitat_id INT(11) NOT NULL,
    PRIMARY KEY (botiga_id),
    FOREIGN KEY (localitat_id) REFERENCES localitats(localitat_id)
);

CREATE TABLE IF NOT EXISTS empleats (
    empleat_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    cognom VARCHAR(45) NOT NULL,
    NIF VARCHAR(9) NOT NULL,
    telefon INT(20),
    tipus_empleat TINYINT NOT NULL COMMENT '1 repartidor, 0 cuiner',
    botiga_id INT(11) NOT NULL,
    PRIMARY KEY (empleat_id)
);

CREATE TABLE IF NOT EXISTS tiquets (
    tiquet_id INT(11) NOT NULL AUTO_INCREMENT,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    client_id INT(11) NOT NULL,
    botiga_id INT(11) NOT NULL,
    empleat_id INT(11) NOT NULL,
    lliurament TINYINT NOT NULL COMMENT '1 repartiment a domicili, 0 per a recollir en botiga',
    hora_lliurament TIME,
    PRIMARY KEY (tiquet_id),
    FOREIGN KEY (botiga_id) REFERENCES botigues(botiga_id),
    FOREIGN KEY (empleat_id) REFERENCES empleats(empleat_id),
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

CREATE TABLE IF NOT EXISTS comandes (
    comanda_id INT(11) NOT NULL AUTO_INCREMENT,
    producte_id INT(11) NOT NULL,
    quantitat INT(11) NOT NULL,
    preu_total DECIMAL(10, 2) NOT NULL,
    tiquet_id INT(11) NOT NULL,
    PRIMARY KEY (comanda_id),
    FOREIGN KEY (producte_id) REFERENCES productes(producte_id),
    FOREIGN KEY (tiquet_id) REFERENCES tiquets(tiquet_id)
);



INSERT INTO localitats (localitat_id, nom, provincia_id)
VALUES ('1', 'localitat1', '1'),
('2', 'localitat2', '1'),
('3', 'localitat3', '2');

INSERT INTO clients (client_id, nom, cognom, address, codi_postal, localitat_id, telefon) 
VALUES ('1', 'nom1', 'cognom1', 'adress1', '08001', '1', '123456780'),
('2', 'nom2', 'cognom2', 'address2', '08002', '2', '123456781'),
('3', 'nom3', 'cognom3', 'address3', '08003', '1', '123456782'),
('4', 'nom4', 'cognom4', 'address4', '08001', '1', '123456783'),
('5', 'nom5', 'cognom5', 'address5', '08002', '2', '123456784'),
('6', 'nom6', 'cognom6', 'address6', '08003', '1', '123456785');

INSERT INTO categories (categoria_id, nom)
VALUES ('1', 'hamburguesa'),
('2', 'pizza'),
('3', 'begudes');

INSERT INTO productes (producte_id, nom, descripcio, imatge_url, preu, categoria_id)
VALUES ('1', 'hamburguesa1', 'descripcio1', 'url1', '10', '1'),
('2', 'pizza2', 'descripcio2', 'url2', '12', '2'),
('3', 'pizza3', 'descripcio3', 'url3', '13', '2'),
('4', 'pizza4', 'descripcio4', 'url4', '14', '2'),
('5', 'pizza5', 'descripcio5', 'url5', '15', '2'),
('6', 'beguda6', 'cocacola', 'url6', '3', '3'),
('7', 'beguda7', 'cervesa', 'url7', '4', '3');

INSERT INTO botigues (botiga_id, address, codi_postal, localitat_id)
VALUES ('1', 'adress1', '08001', '1'),
('2', 'address2', '08002', '2');

INSERT INTO empleats (empleat_id, nom, cognom, NIF, telefon, tipus_empleat, botiga_id)
VALUES ('1', 'nom1', 'cognom1', '12345678A', '123456770', '0', '1'),
('2', 'nom2', 'cognom2', '12345678B', '123456771', '1', '1'),
('3', 'nom3', 'cognom3', '12345678C', '123456772', '0', '2'),
('4', 'nom4', 'cognom4', '12345678D', '123456773', '1', '2');

INSERT INTO tiquets (tiquet_id, data, hora, lliurament, client_id, botiga_id, empleat_id, hora_lliurament)
VALUES ('1', '2020-01-01', '165959', '1', '1', '1', '2', '180000'),
('2', '2020-01-01', '165959','1', '2', '1', '2', '180000'),
('3', '2020-01-02', '180000', '0', '3', '2', '3', null),
('4', '2020-01-02', '183030', '1', '4', '2', '4', '190000'),
('5', '2020-01-03', '180000', '0', '5', '1', '1', null),
('6', '2020-02-01', '180000', '1', '1', '1', '2', null),
('7', '2020-03-01', '180000', '0', '6', '2', '3', null);

INSERT INTO comandes(comanda_id, producte_id, quantitat, preu_total, tiquet_id) 
VALUES ('1', '1', '1', '10', '1'),
('2', '2', '1', '12', '2'),
('3', '3', '1', '13', '3'),
('4', '4', '1', '14', '4'),
('5', '5', '1', '15', '5'),
('6', '6', '1', '3', '6'),
('7', '7', '1', '4', '7'),
('8', '2', '1', '12', '7'),
('9', '7', '1', '4', '7');

-- Llista quants productes de la categoria 'begudes' s'han venut en una determinada localitat
-- botiga_id = 2 está en localitat_id = 2
-- SELECT comandes.comanda_id, comandes.producte_id, comandes.botiga_id, botigues.localitat_id
SELECT COUNT(comandes.comanda_id), botigues.localitat_id
FROM comandes
JOIN tiquets
	ON comandes.tiquet_id = tiquets.tiquet_id
JOIN botigues
	ON tiquets.botiga_id = botigues.botiga_id
WHERE comandes.producte_id
IN (6,7)
AND botigues.localitat_id = 2;

-- Llista quantes comandes ha efectuat un determinat empleat
-- empleat_id = 3

SELECT comandes.comanda_id, tiquets.empleat_id
FROM comandes
JOIN tiquets
	ON tiquets.tiquet_id = comandes.tiquet_id
WHERE empleat_id = 3;