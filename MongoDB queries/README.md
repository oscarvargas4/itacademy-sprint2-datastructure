To execute the "queries.js" file, you must have installed mongoimport.exe in /mongodb/bin/ file.
Then you have to execute the command line (remember to "cd" to "restaurants.json" file) to import the data:

    mongoimport --db=restaurants --collection=restaurants --file=restaurants.json


## Tenim una col·lecció d'Objectes Restaurant a la ciutat de Nueva York, i necessitem algunes consultes.... pots ajudar-nos?

1.	Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants
2.	Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine per tots els documents en la col·lecció Restaurants
3.	Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloure el camp _id per tots els documents en la col·lecció Restaurants
4.	Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloure el camp _id per tots els documents en la col·lecció Restaurants
5.	Escriu una consulta per mostrar tot els restaurants que estan en el Bronx
6.	Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx
7.	Escriu una consulta per mostrar el pròxim 5 restaurants després de saltar els primers 5 del Bronx
8.	Escriu una consulta per trobar els restaurants que tenen un score de més de 90
9.	Escriu una consulta per trobar els restaurants que tenen un score de més que 80 però menys que 100
10.	Escriu una consulta per trobar els restaurants quins localitzen en valor de latitud menys que -95.754168
11.	Escriu una consulta de MongoDB per a trobar els restaurants que no preparen cap cuisine de 'American' i el seu puntaje de qualificació superior a 70 i latitud inferior a -65.754168
12.	Escriu una consulta per trobar els restaurants quins no preparen cap cuisine de 'American' i va aconseguir un marcador més que 70 i localitzat en la longitud menys que -65.754168. Nota : Fes aquesta consulta sense utilitzar $and operador
13.	Escriu una consulta per trobar els restaurants quins no preparen cap cuisine de 'American ' i va aconseguir un punt de grau 'A' no pertany a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent
14.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants quin contenir 'Wil' com les tres primeres lletres en el seu nom
15.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants quin contenir 'ces' com les últim tres lletres en el seu nom
16.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants quin contenir 'Reg' com tres lletres en algun lloc en el seu nom
17.	Escriu una consulta per trobar els restaurants quins pertanyen al Bronx i va preparar qualsevol plat American o xinès
18.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que pertanyen a Staten Island o Queens o Bronx  Brooklyn
19.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que no pertanyen a Staten Island o Queens o Bronx o Brooklyn
20.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin un marcador quin no és més que 10
21.	Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte 'American' i 'Chinees' o el name del restaurant comença amb lletres 'Wil'
22.	Escriu una consulta per trobar el restaurant_id, name, i grades per a aquells restaurants que aconsegueixin un grau "A" i un score 11 en dades d'estudi ISODate "2014-08-11T00:00:00Z"
23.	Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de varietat de graus conté un grau de "A" i marcador 9 sobre un ISODate "2014-08-11T00:00:00Z"
24.	Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element del array coord conté un valor quin és més que 42 i fins a 52
25.	Escriu una consulta per organitzar el nom dels restaurants en ordre ascendent juntament amb totes les columnes
26.	Escriu una consulta per organitzar el nom dels restaurants en descendir juntament amb totes les columnes
27.	Escriu una consulta a organitzar el nom de la cuisine en ordre ascendent i per el mateix barri de cuisine. Ordre descendint
28.	Escriu una consulta per saber tant si totes les direccions contenen el carrer o no
29.	Escriu una consulta quin seleccionarà tots el documents en la col·lecció de restaurants on el valor del camp coord és Double
30.	Escriu una consulta que seleccionarà el restaurant_id, name i grade per a aquells restaurants
que retornen 0 com a residu després de dividir algun dels seus score per 7
31.	Escriu una consulta per trobar el name de restaurant, borough, longitud i altitud i cuisine per a aquells restaurants que contenen 'mon' com tres lletres en algun lloc del seu name
32.	Escriu una consulta per trobar el name de restaurant, borough, longitud i latitud i cuisine per a aquells restaurants que conteinen 'Mad' com primeres tres lletres del seu name
