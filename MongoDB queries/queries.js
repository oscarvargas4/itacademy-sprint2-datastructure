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
}).pretty()