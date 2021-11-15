// Para inicializar mongodb, abrir cmd como admin e introducr "mongo"
// Esto lo que hará es abrir el Shell de mongo 

// show dbs // Show databases

// use webstore // user "webstore" db, if it does not exists, mongo creates one

db // See the actual db that mongo is using

db.dropDatabase()

db.createCollection()

// show collections

// https://www.tutorialesprogramacionya.com/mongodbya/detalleconcepto.php?punto=26&codigo=26&inicio=20


db.product.insert({
    "nombre": "laptop",
    "precio": 40.2,
    "active": false,
    "created_at": new Date("12/12/1999"),
    "somedata": [1, "a", []],
    "facturer": {
        "name": "dell",
        "version": "xps",
        "location": {
            "city": "usa",
            "adress": "asdasd"
        }
    }
})

db.products.find()
db.products.find().pretty()

db.products.insert([
    {
        "name": "mouse",
        "description": "razer mouse",
        "tags": ["computer", "gaming"],
        "quantity": 14,
        "created_at": new Date()
    },
    {
        "name": "monitor",
        "description": "MSI monitor",
        "tags": ["computer", "gaming"],
        "quantity": 3,
        "created_at": new Date()
    }
])

// Fetch certain keyvalues
db.products.findOne({"tags":"computer"}, {"name": 1, "description": 1, "_id": 0})


// Sort by name
db.products.find({"tags": "computer"}).sort({name: 1})

// Limit
db.products.find().limit(2)

// Count
db.products.count()

// Find and Update - https://docs.mongodb.com/manual/reference/method/db.collection.update/#behavior
db.products.update({"name": "keyboard"}, {"price": 99.99})

// Find, update and insert
db.products.update({"name": "keyboard"}, {$set:{"price": 99.99} })

// Find and if does not exist create and insert
db.products.update({"name": "keyboard"}, {$set:{"price": 99.99} }, {upsert: true})

// Remove all documents for "proudcts" collection
db.products.remove({})

