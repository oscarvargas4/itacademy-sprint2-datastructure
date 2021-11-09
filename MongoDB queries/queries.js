// 1. Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants
db.restaurants.find().pretty()

// 2. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine per tots els documents en la col·lecció Restaurants
db.restaurants.find({}, {
    address: 0,
    grades: 0
}).pretty()

// 3. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, 
// però excloure el camp _id per tots els documents en la col·lecció Restaurants
db.restaurants.find({}, {
    _id: 0,
    address: 0,
    grades: 0
}).pretty()

// 4. Escriu una consulta per mostrar restaurant_id, name, borough i zip code, 
// però excloure el camp _id per tots els documents en la col·lecció Restaurants
db.restaurants.find({}, {
    _id : 0,
    restaurant_id: 1,
    name: 1,
    borough: 1,
    'address.zipcode' : 1
}).pretty()

// 5. Escriu una consulta per mostrar tot els restaurants que estan en el Bronx
db.restaurants.find({
    borough: "Bronx"
}).pretty()

// 6. Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx
db.restaurants.find({
    borough: "Bronx"
}).limit(5).pretty()

// 7. Escriu una consulta per mostrar el pròxim 5 restaurants després de saltar els primers 5 del Bronx
db.restaurants.find({
    borough: "Bronx"
}).skip(5).limit(5).pretty()

// 8. Escriu una consulta per trobar els restaurants que tenen un score de més de 90
db.restaurants.find({
    'grades.score': { $gt: 90 }
}).pretty()

// 9. Escriu una consulta per trobar els restaurants que tenen un score de més que 80 però menys que 100
db.restaurants.find({
    'grades.score': { $gt: 80, $lt: 100 }
}).skip(1).pretty()

// 10. Escriu una consulta per trobar els restaurants quins localitzen en valor de latitud menys que -95.754168
db.restaurants.find({
    'address.coord': { $lt: -95.754168 }
}).pretty()

// 11. Escriu una consulta de MongoDB per a trobar els restaurants 
// que no preparen cap cuisine de 'American' i el seu puntaje de qualificació superior a 70 i latitud inferior a -65.754168
db.restaurants.find({
    $and: [
        { cuisine: { $not: { $regex: 'American' }}},
        { 'grades.score': { $gt: 70 } },
        { 'address.coord': { $lt: -65.754168 } }
    ] 
}).pretty()

// 12. Escriu una consulta per trobar els restaurants quins no preparen cap cuisine de 'American' i va aconseguir 
// un marcador més que 70 i localitzat en la longitud menys que -65.754168. Nota : Fes aquesta consulta sense utilitzar $and operador
db.restaurants.find({
    cuisine: { $not: { $regex: 'American' }}, 'grades.score': { $gt: 70 }, 'address.coord': { $lt: -65.754168 } 
}).pretty()

// 13. Escriu una consulta per trobar els restaurants quins no preparen cap cuisine de 'American ' 
// i va aconseguir un punt de grau 'A' no pertany a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent
db.restaurants.find({
    cuisine: { $not: { $regex: 'American ' }}, 'grades.grade': "A", borough: { $not: { $regex: "Brooklyn" } } 
}).sort({ cuisine : -1} ).pretty()

// 14. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells 
// restaurants quin contenir 'Wil' com les tres primeres lletres en el seu nom
db.restaurants.find({
    name: { $regex: /^Wil/ }
}, {
    _id: 0,
    address: 0,
    grades: 0
}).pretty()

// 15. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells 
// restaurants quin contenir 'ces' com les últim tres lletres en el seu nom
db.restaurants.find({
    name: { $regex: 'ces$' }
}, {
    _id: 0,
    address: 0,
    grades: 0
}).pretty()

// 16. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a 
// aquells restaurants quin contenir 'Reg' com tres lletres en algun lloc en el seu nom
db.restaurants.find({
    name: { $regex: /Reg/ }
}, {
    _id: 0,
    address: 0,
    grades: 0
}).pretty()

// 17. Escriu una consulta per trobar els restaurants quins pertanyen al Bronx i va preparar qualsevol plat American o xinès
db.restaurants.find({
    borough: "Bronx",
    $or: [
        { cuisine: "American " },
        { cuisine: "Chinese" }
    ]    
}).pretty()

// 18. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants 
// que pertanyen a Staten Island o Queens o Bronx  Brooklyn
db.restaurants.find({
    $or: [        
        { borough: "Staten Island" },
        { borough: "Queens" },
        { borough: "Bronx" },
        { borough: "Brooklyn" }
    ]    
},{
    address: 0,
    grades: 0
}).pretty()

// 19. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que no pertanyen a Staten Island o Queens o Bronx o Brooklyn
db.restaurants.find({
    $and: [        
        { borough: { $not: { $regex: "Staten Island" }}},
        { borough: { $not: { $regex: "Queens" }}},
        { borough: { $not: { $regex: "Bronx" }}},
        { borough: { $not: { $regex: "Brooklyn" }}},
    ]
},{
    address: 0,
    grades: 0
}).pretty()

// 20. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin un marcador quin no és més que 10
db.restaurants.find({
    'grades.score': { $not: { $gt: 10 } }
},{
    address: 0,
    grades: 0
}).pretty()

// 21. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants 
// que preparen marisc ('seafood') excepte 'American' i 'Chinese' o el name del restaurant comença amb lletres 'Wil'

db.restaurants.find({
    $or: [
        { cuisine: { $regex: /seafood/i }},
        { cuisine: { $regex: /American/i }},
        { cuisine: { $regex: /Chinese/i }},
        { name: { $regex: /^Wil/ }}
    ]
}, {
    address: 0,
    grades: 0
}).pretty()

// 22. Escriu una consulta per trobar el restaurant_id, name, i grades per a aquells restaurants que aconsegueixin 
// un grau "A" i un score 11 en dades d'estudi ISODate "2014-08-11T00:00:00Z"
db.restaurants.find({
    "grades": { date: new Date("2014-08-11T00:00:00Z"), grade: "A", score: 11}
}, {
    address: 0,
    borough: 0,
    cuisine: 0
}).pretty()

// 23. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element 
// de varietat de graus conté un grau de "A" i marcador 9 sobre un ISODate "2014-08-11T00:00:00Z"
db.restaurants.find({
    "grades.1": { date: new Date("2014-08-11T00:00:00Z"), grade: "A", score: 9}
}, {
    address: 0,
    borough: 0,
    cuisine: 0
}).pretty()

// 24. Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells
// restaurants on el segon element del array coord conté un valor quin és més que 42 i fins a 52
db.restaurants.find({
    "address.coord.1": { $gt: 42, $lt: 52 }
}, {
    borough: 0,
    cuisine: 0
}).pretty()

// 25. Escriu una consulta per organitzar el nom dels restaurants en ordre ascendent juntament amb totes les columnes
db.restaurants.find().sort({ "name": 1 }).pretty()

// 26. Escriu una consulta per organitzar el nom dels restaurants en descendir juntament amb totes les columnes
db.restaurants.find().sort({ "name": -1 }).pretty()

// 27. Escriu una consulta a organitzar el nom de la cuisine en ordre ascendent i per el mateix barri de cuisine. Ordre descendint
db.restaurants.find().sort({ "cuisine": 1, "borough": -1 }).pretty()

// 28. Escriu una consulta per saber tant si totes les direccions contenen el carrer o no
db.restaurants.find({
    "address.street":  null 
}
).pretty()

// 29. Escriu una consulta quin seleccionarà tots el documents en la col·lecció de restaurants on el valor del camp coord és Double
db.restaurants.find({
    $or: [
        { "address.coord.1": { $type: "double" }},
        { "address.coord.2": { $type: "double" }}
    ]
}).pretty()

// 30.	Escriu una consulta quin seleccionarà el restaurant_id, name i grade per a aquells restaurants quins 
// retorns 0 com a resta després de dividir el marcador per 7
db.restaurants.find({}, {
    address: 0,
    borough: 0,
    cuisine: 0
}).pretty()

// 31. Escriu una consulta per trobar el name de restaurant, borough, longitud i altitud i cuisine per a aquells restaurants
//  que contenen 'mon' com tres lletres en algun lloc del seu name
db.restaurants.find({
    name: { $regex: /mon/i }
}, {
    "address.building": 0,
    "address.street": 0,
    "address.zipcode": 0,
    borough: 0,
    cuisine: 0
}).pretty()

// 32. Escriu una consulta per trobar el name de restaurant, borough, longitud i latitud i cuisine per a aquells restaurants 
// que conteinen 'Mad' com primeres tres lletres del seu name
db.restaurants.find({
    name: { $regex: /^Mad/ }
}, {
    "address.building": 0,
    "address.street": 0,
    "address.zipcode": 0,
    borough: 0,
    cuisine: 0
}).pretty()