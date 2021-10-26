CREATE DATABASE pizzeria;
USE pizzeria;

CREATE TABLE provincies (
    provincia_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45),
    PRIMARY KEY (provincia_id),
    UNIQUE KEY (provincia_id)
);

INSERT INTO provincies (provincia_id, nom)
VALUES ('1', 'provincia1'),
('2', 'provincia2');

CREATE TABLE localitats (
    localitat_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45),
    provincia_id INT(11) NOT NULL,
    PRIMARY KEY (localitat_id),
    UNIQUE KEY (localitat_id),
    FOREIGN KEY (provincia_id) REFERENCES provincies(provincia_id)
);

INSERT INTO localitats (localitat_id, nom, provincia_id)
VALUES ('1', 'localitat1', '1'),
('2', 'localitat2', '1'),
('3', 'localitat3', '2');

CREATE TABLE clients (
    client_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    cognom VARCHAR(45) NOT NULL,
    address VARCHAR(60) NOT NULL,
    codi_postal INT(11) NOT NULL,
    provincia_id INT(11) NOT NULL,
    localitat_id INT(11) NOT NULL,
    telefon INT(20),
    PRIMARY KEY (client_id),
    UNIQUE KEY (client_id),
    FOREIGN KEY (provincia_id) REFERENCES provincies(provincia_id),
    FOREIGN KEY (localitat_id) REFERENCES localitats(localitat_id)
);

INSERT INTO clients (client_id, nom, cognom, address, codi_postal, provincia_id, localitat_id, telefon) 
VALUES ('1', 'nom1', 'cognom1', 'adress1', '08001', '1', '1', '123456780'),
('2', 'nom2', 'cognom2', 'address2', '08002', '1', '2', '123456781'),
('3', 'nom3', 'cognom3', 'address3', '08003', '2', '1', '123456782'),
('4', 'nom4', 'cognom4', 'address4', '08001', '1', '1', '123456783'),
('5', 'nom5', 'cognom5', 'address5', '08002', '1', '2', '123456784'),
('6', 'nom6', 'cognom6', 'address6', '08003', '2', '1', '123456785');

CREATE TABLE categories (
    categoria_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    PRIMARY KEY (categoria_id),
    UNIQUE KEY (categoria_id)
);

INSERT INTO categories (categoria_id, nom)
VALUES ('1', 'hamburguesa'),
('2', 'pizza'),
('3', 'begudes');

CREATE TABLE productes (
    producte_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    descripcio VARCHAR(60) NOT NULL,
    imatge_url VARCHAR(45) NOT NULL,
    preu DECIMAL(10,2) NOT NULL,
    categoria_id INT(11) NOT NULL,
    PRIMARY KEY (producte_id),
    FOREIGN KEY (categoria_id) REFERENCES categories(categoria_id)
);

INSERT INTO productes (producte_id, nom, descripcio, imatge_url, preu, categoria_id)
VALUES ('1', 'hamburguesa1', 'descripcio1', 'url1', '10', '1'),
('2', 'pizza2', 'descripcio2', 'url2', '12', '2'),
('3', 'pizza3', 'descripcio3', 'url3', '13', '2'),
('4', 'pizza4', 'descripcio4', 'url4', '14', '2'),
('5', 'pizza5', 'descripcio5', 'url5', '15', '2'),
('6', 'beguda6', 'cocacola', 'url6', '3', '3'),
('7', 'beguda7', 'cervesa', 'url7', '4', '3');

CREATE TABLE botigues (
    botiga_id INT(11) NOT NULL AUTO_INCREMENT,
    address VARCHAR(60) NOT NULL,
    codi_postal INT(11) NOT NULL,
    provincia_id INT(11) NOT NULL,
    localitat_id INT(11) NOT NULL,
    PRIMARY KEY (botiga_id),
    UNIQUE KEY (botiga_id),
    FOREIGN KEY (provincia_id) REFERENCES provincies(provincia_id),
    FOREIGN KEY (localitat_id) REFERENCES localitats(localitat_id)
);

INSERT INTO botigues (botiga_id, address, codi_postal, provincia_id, localitat_id)
VALUES ('1', 'adress1', '08001', '1', '1'),
('2', 'address2', '08002', '2', '2');

CREATE TABLE empleats (
    empleat_id INT(11) NOT NULL AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    cognom VARCHAR(45) NOT NULL,
    NIF VARCHAR(9) NOT NULL,
    telefon INT(20),
    tipus_empleat TINYINT NOT NULL COMMENT '1 repartidor, 0 cuiner',
    botiga_id INT(11) NOT NULL,
    PRIMARY KEY (empleat_id)
);

INSERT INTO empleats (empleat_id, nom, cognom, NIF, telefon, tipus_empleat, botiga_id)
VALUES ('1', 'nom1', 'cognom1', '12345678A', '123456770', '0', '1'),
('2', 'nom2', 'cognom2', '12345678B', '123456771', '1', '1'),
('3', 'nom3', 'cognom3', '12345678C', '123456772', '0', '2'),
('4', 'nom4', 'cognom4', '12345678D', '123456773', '1', '2');

CREATE TABLE comandes (
    comanda_id INT(11) NOT NULL AUTO_INCREMENT,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    lliurament TINYINT NOT NULL COMMENT '1 repartiment a domicili, 0 per a recollir en botiga',
    producte_id INT(11) NOT NULL,
    quantitat INT(11) NOT NULL,
    preu_total DECIMAL(10,2) NOT NULL,
    botiga_id INT(11) NOT NULL,
    empleat_id INT(11) NOT NULL,
    hora_lliurament TIME,
    client_id INT(11) NOT NULL,
    PRIMARY KEY (comanda_id),
    FOREIGN KEY (producte_id) REFERENCES productes(producte_id),
    FOREIGN KEY (botiga_id) REFERENCES botigues(botiga_id),
    FOREIGN KEY (empleat_id) REFERENCES empleats(empleat_id),
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
    );

INSERT INTO comandes(comanda_id, data, hora, lliurament, producte_id, quantitat, preu_total, botiga_id, empleat_id, hora_lliurament, client_id) 
VALUES ('1', '2020-01-01', '165959', '1', '1', '1', '10', '1', '2', '180000', '1'),
('2', '2020-01-01', '165959', '1', '2', '1', '12', '1', '2', '180000', '2'),
('3', '2020-01-02', '180000', '0', '3', '1', '13', '2', '3', null, '3'),
('4', '2020-01-02', '183030', '1', '4', '1', '14', '2', '4', '190000', '4'),
('5', '2020-01-03', '180000', '0', '5', '1', '15', '1', '1', null, '5'),
('6', '2020-02-01', '180000', '1', '6', '1', '3', '1', '2', null, '1'),
('7', '2020-03-01', '180000', '0', '7', '1', '4', '2', '3', null, '6'),
('8', '2020-03-01', '180000', '0', '2', '1', '12', '2', '3', null, '6'),
('9', '2020-03-01', '180000', '0', '7', '1', '4', '2', '3', null, '6');

-- Llista quants productes de la categoria 'begudes' s'han venut en una determinada localitat
-- botiga_id = 2 está en localitat_id = 2
-- SELECT comandes.comanda_id, comandes.producte_id, comandes.botiga_id, botigues.localitat_id
SELECT COUNT(comandes.comanda_id), botigues.localitat_id
FROM comandes
JOIN botigues
	ON comandes.botiga_id = botigues.botiga_id
WHERE comandes.producte_id
IN (6,7)
AND botigues.localitat_id = 2;

-- Llista quantes comandes ha efectuat un determinat empleat
-- empleat_id = 3

SELECT comanda_id, empleat_id
FROM comandes
WHERE empleat_id = 3;