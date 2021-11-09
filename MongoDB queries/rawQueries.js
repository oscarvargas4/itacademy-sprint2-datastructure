db.restaurants.find().pretty()
db.restaurants.find({}, { address: 0, grades: 0 }).pretty()
db.restaurants.find({}, { _id: 0, address: 0, grades: 0 }).pretty()
db.restaurants.find({}, { _id : 0, restaurant_id: 1, name: 1, borough: 1, 'address.zipcode' : 1}).pretty()
db.restaurants.find({ borough: "Bronx" }).pretty()
db.restaurants.find({ borough: "Bronx" }).limit(5).pretty()
db.restaurants.find({ borough: "Bronx" }).skip(5).limit(5).pretty()
db.restaurants.find({ 'grades.score': { $gt: 90 }}).pretty()
db.restaurants.find({ 'grades.score': { $gt: 80, $lt: 100 }}).skip(1).pretty()
db.restaurants.find({ 'address.coord': { $lt: -95.754168 }}).pretty()
db.restaurants.find({ $and: [{ cuisine: { $not: { $regex: 'American' }}}, { 'grades.score': { $gt: 70 } }, { 'address.coord': { $lt: -65.754168 }}]}).pretty()
db.restaurants.find({ cuisine: { $not: { $regex: 'American' }}, 'grades.score': { $gt: 70 }, 'address.coord': { $lt: -65.754168 } }).pretty()
db.restaurants.find({ cuisine: { $not: { $regex: 'American ' }}, 'grades.grade': "A", borough: { $not: { $regex: "Brooklyn" }}}).sort({ cuisine : -1} ).pretty()
db.restaurants.find({ name: { $regex: /^Wil/ }}, { _id: 0, address: 0, grades: 0}).pretty()
db.restaurants.find({ name: { $regex: 'ces$' }}, { _id: 0, address: 0, grades: 0}).pretty()
db.restaurants.find({ name: { $regex: /Reg/ }}, { _id: 0, address: 0, grades: 0}).pretty()
db.restaurants.find({ borough: "Bronx", $or: [{ cuisine: "American " }, { cuisine: "Chinese" }]}).pretty()
db.restaurants.find({ $or: [{ borough: "Staten Island" }, { borough: "Queens" }, { borough: "Bronx" }, { borough: "Brooklyn" }]},{ address: 0, grades: 0}).pretty()
db.restaurants.find({ $and: [{ borough: { $not: { $regex: "Staten Island" }}}, { borough: { $not: { $regex: "Queens" }}}, { borough: { $not: { $regex: "Bronx" }}}, { borough: { $not: { $regex: "Brooklyn" }}}]},{ address: 0, grades: 0}).pretty()
db.restaurants.find({ 'grades.score': { $not: { $gt: 10 }}},{ address: 0, grades: 0}).pretty()
db.restaurants.find({ $or: [{ cuisine: { $regex: /seafood/i }}, { cuisine: { $regex: /American/i }}, { cuisine: { $regex: /Chinese/i }}, { name: { $regex: /^Wil/ }}]}, { address: 0,   grades: 0}).pretty()
db.restaurants.find({ "grades": { date: new Date("2014-08-11T00:00:00Z"), grade: "A", score: 11 }}, { address: 0, borough: 0, cuisine: 0}).pretty()
db.restaurants.find({ "grades.1": { date: new Date("2014-08-11T00:00:00Z"), grade: "A", score: 9 }}, { address: 0, borough: 0, cuisine: 0}).pretty()
db.restaurants.find({ "address.coord.1": { $gt: 42, $lt: 52 }}, { borough: 0, cuisine: 0 }).pretty()
db.restaurants.find().sort({ "name": 1 }).pretty()
db.restaurants.find().sort({ "name": -1 }).pretty()
db.restaurants.find().sort({ "cuisine": 1, "borough": -1 }).pretty()
db.restaurants.find({ "address.street":  null }).pretty()
db.restaurants.find({ $and: [{ "address.coord.0": { $type: "double" }},{ "address.coord.1": { $type: "double" }}]}).pretty()
db.restaurants.find({ "grades.score": { $mod: [7,0] }}, { restaurant_id: 1, name: 1, grades:1 }).pretty()
db.restaurants.find({ name: { $regex: /mon/i }}, { "address.building": 0, "address.street": 0, "address.zipcode": 0, borough: 0, cuisine: 0}).pretty()
db.restaurants.find({ name: { $regex: /^Mad/ }}, { "address.building": 0, "address.street": 0, "address.zipcode": 0, borough: 0, cuisine: 0}).pretty()