-- 1. Retorna un llistat amb el primer cognom, segon cognom i el nom de tots els alumnes. 
-- El llistat haurà d'estar ordenat alfabèticament de menor a major pel primer cognom, segon cognom i nom.
SELECT apellido1, apellido2, nombre
FROM persona
WHERE tipo= 'alumno'
ORDER BY apellido1 AND apellido2 AND nombre;

-- 2. Esbrina el nom i els dos cognoms dels alumnes que no han donat d'alta el seu número de telèfon en la base de dades.
SELECT nombre, apellido1, apellido2
FROM persona
WHERE telefono IS NULL and tipo = 'alumno';

-- 3. Retorna el llistat dels alumnes que van néixer en 1999.
SELECT *
FROM persona
WHERE fecha_nacimiento
BETWEEN '1999-01-01'
AND '1999-12-31';

-- 4. Retorna el llistat de professors que no han donat d'alta el seu número de telèfon en la base de dades i a més la seva nif acaba en K.
SELECT * FROM persona 
WHERE tipo = 'profesor' AND telefono IS NULL;

-- 5. Retorna el llistat de les assignatures que s'imparteixen en el primer quadrimestre, en el tercer curs del grau que té l'identificador 7.
SELECT * FROM asignatura WHERE cuatrimestre = '1' AND curso = '3' AND id_grado = '7';

-- 6. Retorna un llistat dels professors juntament amb el nom del departament al qual estan vinculats. 
-- El llistat ha de retornar quatre columnes, primer cognom, segon cognom, nom i nom del departament. 
-- El resultat estarà ordenat alfabèticament de menor a major pels cognoms i el nom.
SELECT persona.apellido1, persona.apellido2, persona.nombre, departamento.nombre FROM profesor
INNER JOIN persona
	ON persona.id = profesor.id_profesor
INNER JOIN departamento
	ON departamento.id = profesor.id_departamento
ORDER BY apellido1 AND apellido2;

-- 7. Retorna un llistat amb el nom de les assignatures, any d'inici i any de fi del curs escolar de l'alumne amb nif 26902806M.
SELECT asignatura.nombre AS 'Nombre de la Asignatura', curso_escolar.anyo_inicio, curso_escolar.anyo_fin
FROM persona
INNER JOIN alumno_se_matricula_asignatura
	ON alumno_se_matricula_asignatura.id_alumno = persona.id
INNER JOIN asignatura
	ON asignatura.id = alumno_se_matricula_asignatura.id_asignatura
INNER JOIN curso_escolar
	ON curso_escolar.id = asignatura.curso
WHERE persona.nif = '26902806M';

-- 8. Retorna un llistat amb el nom de tots els departaments que tenen professors que imparteixen alguna assignatura 
-- en el Grau en Enginyeria Informàtica (Pla 2015)
SELECT DISTINCT departamento.nombre
FROM grado 
INNER JOIN asignatura
	ON asignatura.id_grado = grado.id
INNER JOIN profesor
	ON profesor.id_profesor = asignatura.id_profesor
INNER JOIN departamento
	ON departamento.id = profesor.id_departamento
WHERE grado.nombre = 'Grado en Ingeniería Informática (Plan 2015)';

-- 9. Retorna un llistat amb tots els alumnes que s'han matriculat en alguna assignatura durant el curs escolar 2018/2019.
SELECT DISTINCT persona.* 
FROM curso_escolar 
INNER JOIN alumno_se_matricula_asignatura
	ON alumno_se_matricula_asignatura.id_curso_escolar = curso_escolar.id
INNER JOIN persona
	ON persona.id = alumno_se_matricula_asignatura.id_alumno
WHERE anyo_inicio = 2018;

-- 10. Retorna un llistat amb els noms de tots els professors i els departaments que tenen vinculats. El llistat també ha de mostrar
-- aquells professors que no tenen cap departament associat. El llistat ha de retornar quatre columnes, nom del departament, primer cognom,
-- segon cognom i nom del professor. El resultat estarà ordenat alfabèticament de menor a major pel nom del departament, cognoms i el nom

SELECT departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre 
FROM profesor
LEFT JOIN persona
	ON profesor.id_profesor = persona.id
LEFT JOIN departamento
	ON departamento.id = profesor.id_departamento
ORDER BY departamento.nombre AND persona.apellido1 AND persona.apellido2 AND persona.nombre;

-- 11. Retorna un llistat amb els professors que no estan associats a un departament.
SELECT * 
FROM profesor
LEFT JOIN departamento
	ON departamento.id = profesor.id_departamento
WHERE profesor.id_departamento IS NULL;

-- 12. Retorna un llistat amb els departaments que no tenen professors associats.
SELECT *
FROM departamento
LEFT JOIN profesor
	ON profesor.id_departamento = departamento.id
WHERE profesor.id_departamento IS NULL;

-- 13. Retorna un llistat amb els professors que no imparteixen cap assignatura.
SELECT profesor.id_profesor, asignatura.nombre
FROM profesor
LEFT JOIN asignatura
	ON profesor.id_profesor = asignatura.id_profesor
WHERE asignatura.nombre IS NULL
ORDER BY profesor.id_profesor;

-- 14. Retorna un llistat amb les assignatures que no tenen un professor assignat.
SELECT profesor.id_profesor, asignatura.nombre
FROM profesor
RIGHT JOIN asignatura
	ON profesor.id_profesor = asignatura.id_profesor
WHERE profesor.id_profesor IS NULL
ORDER BY profesor.id_profesor;

-- 15. Retorna un llistat amb tots els departaments que no han impartit assignatures en cap curs escolar.
SELECT DISTINCT departamento.nombre
FROM asignatura
LEFT JOIN profesor
	ON profesor.id_profesor = asignatura.id_profesor
RIGHT JOIN departamento
	ON departamento.id = profesor.id_departamento
WHERE asignatura.nombre IS NULL
AND asignatura.curso IS NULL
AND asignatura.id_profesor IS NULL;

-- 16. Retorna el nombre total d'alumnes que hi ha.
SELECT COUNT(id) AS "Nombre total d'alumnes"
FROM persona
WHERE tipo = 'alumno';

-- 17. Calcula quants alumnes van néixer en 1999.
SELECT COUNT(id) 
FROM persona 
WHERE tipo = 'alumno'
AND fecha_nacimiento
BETWEEN '1999-01-01'
AND '1999-12-31';

-- 18. Calcula quants professors hi ha en cada departament. El resultat només ha de mostrar dues columnes, 
-- una amb el nom del departament i una altra amb el nombre de professors que hi ha en aquest departament. 
-- El resultat només ha d'incloure els departaments que tenen professors associats i haurà d'estar ordenat de major a menor pel nombre de professors.
SELECT departamento.nombre, persona.nombre
FROM profesor
INNER JOIN departamento
	ON departamento.id = profesor.id_departamento
INNER JOIN persona
	ON persona.id = profesor.id_profesor
ORDER BY persona.nombre DESC;

-- 19. Retorna un llistat amb tots els departaments i el nombre de professors que hi ha en cadascun d'ells. 
-- Tingui en compte que poden existir departaments que no tenen professors associats. Aquests departaments també han d'aparèixer en el llistat
SELECT departamento.*, persona.nombre
FROM departamento
LEFT JOIN profesor
	ON profesor.id_departamento = departamento.id
LEFT JOIN persona
	ON persona.id = profesor.id_profesor;
    
-- 20. Retorna un llistat amb el nom de tots els graus existents en la base de dades i el nombre d'assignatures que té cadascun. 
-- Tingui en compte que poden existir graus que no tenen assignatures associades. Aquests graus també han d'aparèixer en el llistat. 
-- El resultat haurà d'estar ordenat de major a menor pel nombre d'assignatures.
SELECT grado.nombre, asignatura.nombre
FROM grado
LEFT JOIN asignatura
	ON asignatura.id_grado = grado.id
ORDER BY asignatura.nombre DESC;

-- 21. Retorna un llistat amb el nom de tots els graus existents en la base de dades i el nombre d'assignatures que té cadascun, 
-- dels graus que tinguin més de 40 assignatures associades.
SELECT DISTINCT grado.nombre
FROM grado
INNER JOIN asignatura
	ON asignatura.id_grado = grado.id
HAVING count(asignatura.id) >= 40;

-- 22. Retorna totes les dades de l'alumne més jove.
SELECT * FROM persona WHERE tipo = 'alumno' ORDER BY fecha_nacimiento DESC LIMIT 1;

-- 23. Retorna un llistat amb els professors que tenen un departament associat i que no imparteixen cap assignatura.
SELECT DISTINCT * FROM profesor
INNER JOIN departamento
	ON departamento.id = profesor.id_departamento
LEFT JOIN asignatura
	ON asignatura.id_profesor = profesor.id_profesor
INNER JOIN persona
	ON persona.id = profesor.id_profesor
WHERE asignatura.id IS NULL;