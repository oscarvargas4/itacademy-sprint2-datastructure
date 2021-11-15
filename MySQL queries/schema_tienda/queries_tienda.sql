
-- 1. Llista el nom de tots els productos que hi ha en la taula producto.
SELECT DISTINCT nombre FROM producto;

-- 2. Llista els noms i els preus de tots els productos de la taula producto.
SELECT DISTINCT nombre, precio FROM producto;

-- 3. Llista totes les columnes de la taula producto.
SELECT * FROM producto;

-- 4. Llista el nom dels productos, el preu en euros i el preu en dòlars estatunidencs (USD).
SELECT DISTINCT nombre, precio AS 'EUR', precio*1.16 AS 'USD (Oct 26th)'
FROM producto;

-- 5. Llista el nom dels productos, el preu en euros i el preu en dòlars estatunidencs (USD). 
-- Utilitza els següents àlies per a les columnes: nom de producto, euros, dolars.
SELECT DISTINCT nombre AS 'nom del producte', precio AS 'euros', precio*1.16 AS 'dolares'
FROM producto;

-- 6. Llista els noms i els preus de tots els productos de la taula producto, convertint els noms a majúscula.
SELECT UPPER(nombre) AS 'NOMBRE', precio FROM  producto;

-- 7. Llista els noms i els preus de tots els productos de la taula producto, convertint els noms a minúscula.
SELECT LOWER(nombre) AS 'nombre', precio FROM  producto;

-- 8. Llista el nom de tots els fabricants en una columna, i en una altra columna obtingui en majúscules els dos primers caràcters del nom del fabricant.
SELECT nombre, UPPER(LEFT(nombre, 2)) FROM fabricante
ORDER BY nombre;

-- 9. Llista els noms i els preus de tots els productos de la taula producto, arrodonint el valor del preu.
SELECT nombre, ROUND(precio) AS 'Rounded price' FROM producto;

-- 10. Llista els noms i els preus de tots els productos de la taula producto, truncant el valor del preu per a mostrar-lo sense cap xifra decimal.
SELECT nombre, TRUNCATE(precio, 0) AS 'Rounded price' FROM producto;

-- 11. Llista el codi dels fabricants que tenen productos en la taula producto
SELECT codigo_fabricante
FROM producto
ORDER BY codigo_fabricante;

-- 12. Llista el codi dels fabricants que tenen productos en la taula producto, eliminant els codis que apareixen repetits.
SELECT DISTINCT codigo_fabricante
FROM producto
ORDER BY codigo_fabricante;

-- 13. Llista els noms dels fabricants ordenats de manera ascendent.
SELECT fabricante.nombre
FROM fabricante
ORDER BY nombre;

-- 14. Llista els noms dels fabricants ordenats de manera descendent
SELECT fabricante.nombre
FROM fabricante
ORDER BY nombre DESC;

-- 15. Llista els noms dels productos ordenats en primer lloc pel nom de manera ascendent i en segon lloc pel preu de manera descendent.
SELECT nombre
FROM producto
ORDER BY nombre;

SELECT nombre
FROM producto
ORDER BY nombre DESC;

-- 16. Retorna una llista amb les 5 primeres files de la taula fabricante.
SELECT *
FROM fabricante
LIMIT 5;

-- 17. Retorna una llista amb 2 files a partir de la quarta fila de la taula fabricante. La quarta fila també s'ha d'incloure en la resposta
SELECT *
FROM fabricante
LIMIT 3, 2;

-- 18. Llista el nom i el preu del producto més barat. (Utilitzi solament les clàusules ORDER BY i LIMIT). 
-- NOTA: Aquí no podria usar MIN(preu), necessitaria GROUP BY
SELECT nombre, precio
FROM producto
ORDER BY precio
LIMIT 1;

-- 19. Llista el nom i el preu del producto més car. (Utilitzi solament les clàusules ORDER BY i LIMIT). NOTA: Aquí no podria usar MAX(preu), necessitaria GROUP BY
SELECT nombre, precio
FROM producto
ORDER BY precio DESC
LIMIT 1;

-- 20. Llista el nom de tots els productos del fabricant el codi de fabricant del qual és igual a 2.
SELECT nombre
FROM producto
WHERE codigo_fabricante = 2;

-- 21. Retorna una llista amb el nom del producte, preu i nom de fabricant de tots els productes de la base de dades.
SELECT producto.nombre AS 'Producto', producto.precio, fabricante.nombre AS 'Fabricante'
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
ORDER BY producto.nombre;

-- 22. Retorna una llista amb el nom del producte, preu i nom de fabricant de tots els productes de la base de dades. 
-- Ordeni el resultat pel nom del fabricador, per ordre alfabètic
SELECT fabricante.nombre AS 'Fabricante', producto.precio, producto.nombre AS 'Producto'
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
ORDER BY fabricante.nombre;


-- 23. Retorna una llista amb el codi del producte, nom del producte, codi del fabricador i nom del fabricador, de tots els productes de la base de dades
SELECT producto.codigo AS 'Codigo del Producto', producto.nombre AS 'Nombre del Producto', fabricante.nombre AS 'Nombre del Fabricante'
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
ORDER BY producto.codigo;

-- 24. Retorna el nom del producte, el seu preu i el nom del seu fabricant, del producte més barat.
SELECT producto.nombre AS 'Nombre del Producto', producto.precio, fabricante.nombre AS 'Nombre del Fabricante'
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
ORDER BY producto.precio
LIMIT 1;

-- 25. Retorna el nom del producte, el seu preu i el nom del seu fabricant, del producte més car.
SELECT producto.nombre AS 'Nombre del Producto', producto.precio, fabricante.nombre AS 'Nombre del Fabricante'
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
ORDER BY producto.precio DESC
LIMIT 1;

-- 26. Retorna una llista de tots els productes del fabricador Lenovo.
SELECT producto.codigo, producto.nombre, fabricante.nombre
FROM producto 
INNER JOIN fabricante
ON fabricante.codigo = producto.codigo_fabricante
WHERE codigo_fabricante = 2;

-- 27. Retorna una llista de tots els productes del fabricant Crucial que tinguin un preu major que 200€
SELECT producto.codigo, producto.nombre, producto.precio, fabricante.nombre
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
WHERE fabricante.nombre = 'Crucial'
AND producto.precio > '200';

-- 28. Retorna un llistat amb tots els productes dels fabricants Asus, Hewlett-Packard i Seagate. Sense utilitzar l'operador IN.
SELECT * 
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
WHERE fabricante.nombre = 'Asus' 
OR fabricante.nombre = 'Hewlett-Packard'
OR fabricante.nombre = 'Seagate';

-- 29. Retorna un llistat amb tots els productes dels fabricants Asus, Hewlett-Packard i Seagate. Utilitzant l'operador IN
SELECT *
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
WHERE codigo_fabricante IN (1, 3, 5);

-- 30. Retorna un llistat amb el nom i el preu de tots els productes dels fabricants el nom dels quals acabi per la vocal e
SELECT *
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
WHERE fabricante.nombre LIKE '%e';

-- 31. Retorna un llistat amb el nom i el preu de tots els productes el nom de fabricant dels quals contingui el caràcter w en el seu nom
SELECT producto.nombre, producto.precio, fabricante.nombre
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
WHERE fabricante.nombre LIKE '%w%';

-- 32. Retorna un llistat amb el nom de producte, preu i nom de fabricant, de tots els productes que tinguin un preu major o igual a 180€. 
-- Ordeni el resultat en primer lloc pel preu (en ordre descendent) i en segon lloc pel nom (en ordre ascendent)
SELECT producto.nombre, producto.precio, fabricante.nombre
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
WHERE (producto.precio >= '180')
ORDER BY producto.precio;

SELECT producto.nombre, producto.precio, fabricante.nombre
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante
WHERE (producto.precio >= '180')
ORDER BY producto.nombre DESC;

-- 33. Retorna un llistat amb el codi i el nom de fabricant, solament d'aquells fabricants que tenen productes associats en la base de dades.
SELECT DISTINCT fabricante.codigo, fabricante.nombre
FROM producto
INNER JOIN fabricante
	ON fabricante.codigo = producto.codigo_fabricante;
    
-- 34. Retorna un llistat de tots els fabricants que existeixen en la base de dades, juntament amb els productes que té cadascun d'ells. 
-- El llistat haurà de mostrar també aquells fabricants que no tenen productes associats.
SELECT ALL fabricante.*, producto.nombre
FROM fabricante
LEFT JOIN producto
	ON producto.codigo_fabricante = fabricante.codigo;
    
-- 35. Retorna un llistat on només apareguin aquells fabricants que no tenen cap producte associat.
SELECT ALL fabricante.*, producto.nombre
FROM fabricante
LEFT JOIN producto
	ON producto.codigo_fabricante = fabricante.codigo
WHERE producto.nombre IS NULL;

-- 36. Retorna tots els productes del fabricador Lenovo. (Sense utilitzar INNER JOIN).
SELECT * FROM producto WHERE codigo_fabricante = '2';

-- 37. Retorna totes les dades dels productes que tenen el mateix preu que el producte més car del fabricador Lenovo. (Sense utilitzar INNER JOIN).
SELECT * 
FROM producto 
HAVING precio = (SELECT precio 
	FROM producto 
    WHERE codigo_fabricante = '2'
    ORDER BY precio DESC
    LIMIT 1);

-- 38. Llista el nom del producte més car del fabricador Lenovo.
SELECT producto.nombre
FROM fabricante
INNER JOIN producto
	ON producto.codigo_fabricante = fabricante.codigo
WHERE fabricante.nombre = 'Lenovo'
ORDER BY producto.precio DESC
LIMIT 1;

-- 39. Llista el nom del producte més barat del fabricant Hewlett-Packard.
SELECT producto.nombre
FROM fabricante
INNER JOIN producto
	ON producto.codigo_fabricante = fabricante.codigo
WHERE fabricante.nombre = 'Hewlett-Packard'
ORDER BY producto.precio
LIMIT 1;

-- 40. Retorna tots els productes de la base de dades que tenen un preu major o igual al producte més car del fabricador Lenovo.
SELECT *
FROM producto
WHERE producto.precio >= (SELECT producto.precio 
	FROM producto 
    INNER JOIN fabricante 
    ON  fabricante.codigo = producto.codigo_fabricante 
    WHERE fabricante.nombre = 'Lenovo' 
    ORDER BY producto.precio 
    DESC LIMIT 1);

-- 41. Llesta tots els productes del fabricador Asus que tenen un preu superior al preu mitjà de tots els seus productes.
SELECT nombre, precio, codigo_fabricante 
FROM producto 
WHERE codigo_fabricante = '1'
HAVING precio > (SELECT AVG(precio) FROM producto WHERE codigo_fabricante = '1');
