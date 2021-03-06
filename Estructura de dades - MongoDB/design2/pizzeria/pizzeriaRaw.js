// use pizzeria
db = db.getSiblingDB('pizzeria')

db.dropDatabase()

db = db.getSiblingDB('pizzeria')

db.createCollection("localitats", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["localitat_id", "nom", "provincia_id"],
            properties: {
                localitat_id: {
                    bsonType: "number"
                },
                nom: {
                    bsonType: "string"
                },
                provincia_id: {
                    bsonType: "number"
                }
            }
        }
    }
})

db.localitats.insertMany([
    { localitat_id: 1, nom: "localitat1", provincia_id: 1 },
    { localitat_id: 2, nom: "localitat2", provincia_id: 1 },
    { localitat_id: 3, nom: "localitat3", provincia_id: 2 },
])

db.createCollection("clients", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["client_id", "nom", "cognom", "address", "codi_postal", "localitat_id"],
            properties: {
                client_id: {
                    bsonType: "number"
                },
                nom: {
                    bsonType: "string"
                },
                cognom: {
                    bsonType: "string"
                },
                address: {
                    bsonType: "string"
                },
                codi_postal: {
                    bsonType: "number"
                },
                localitat_id: {
                    bsonType: "number"
                },
                telefon: {
                    bsonType: "number"
                },
                tiquets: {
                    bsonType: ["array"],
                    items: {
                        bsonType: "object",
                        required: ["tiquet_id", "data_hora", "lliurament", "botiga_id", "empleat_id", "comandes"],
                        properties: {
                            tiquet_id: {
                                bsonType: "number"
                            },
                            data_hora: {
                                bsonType: "date"
                            },
                            lliurament: {
                                bsonType: "number",
                                minimum: 0,
                                maximum: 1,
                                description: "1 repartiment a domicili, 0 per a recollir en botiga"
                            },
                            botiga_id: {
                                bsonType: "number"
                            },
                            empleat_id: {
                                bsonType: "number"
                            },
                            data_hora_lliurament: {
                                bsonType: "date"
                            },
                            comandes: {
                                bsonType: ["array"],
                                items: {
                                    bsonType: "object",
                                    required: ["producte_id", "quantitat", "preu_total"],
                                    properties: {
                                        producte_id: { bsonType: "number" },
                                        quantitat: { bsonType: "number" },
                                        preu_total: { bsonType: "number" }
                                    },
                                },
                                description: "must be an array of objects"
                            }
                        }
                    }
                }
            }
        }
    }
})

db.clients.insertMany([
    { client_id: 1, nom: "nom1", cognom: "cognom1", address: "address1", codi_postal: 08001, localitat_id: 1, telefon: 123456780, tiquets: [
        { tiquet_id: 1, data_hora: new Date("2020-01-01T16:59:59.001Z"), lliurament: 1, botiga_id: 1, empleat_id: 2, data_hora_lliurament: new Date("2020-01-01T17:59:59.001Z"), comandes: [{
                producte_id: 2, quantitat: 1, preu_total: 12
            }, {
                producte_id: 1, quantitat: 1, preu_total: 10
            }]
        }
    ] },
    { client_id: 2, nom: "nom2", cognom: "cognom2", address: "address2", codi_postal: 08002, localitat_id: 2, telefon: 123456781, tiquets: [
        { tiquet_id: 6, data_hora: new Date("2020-02-01T18:00:00.001Z"), lliurament: 1, botiga_id: 1, empleat_id: 2, comandes: [{
            producte_id: 6, quantitat: 1, preu_total: 3 
        }]}
    ] },
    { client_id: 3, nom: "nom3", cognom: "cognom3", address: "address3", codi_postal: 08003, localitat_id: 1, telefon: 123456782, tiquets: [        
        { tiquet_id: 3, data_hora: new Date("2020-01-02T18:00:00.001Z"), lliurament: 0, botiga_id: 2, empleat_id: 3, comandes: [{
            producte_id: 3, quantitat: 1, preu_total: 13 
        }]}
    ] },
    { client_id: 4, nom: "nom4", cognom: "cognom4", address: "address4", codi_postal: 08001, localitat_id: 1, telefon: 123456783, tiquets: [        
        { tiquet_id: 4, data_hora: new Date("2020-01-02T18:30:30.001Z"), lliurament: 1, botiga_id: 2, empleat_id: 4, data_hora_lliurament: new Date("2020-01-02T19:00:00.001Z"), comandes: [{
            producte_id: 4, quantitat: 1, preu_total: 14 
        }]}
    ] },
    { client_id: 5, nom: "nom5", cognom: "cognom5", address: "address5", codi_postal: 08002, localitat_id: 2, telefon: 123456784, tiquets: [        
        { tiquet_id: 5, data_hora: new Date("2020-01-03T18:00:00.001Z"), lliurament: 0, botiga_id: 1, empleat_id: 1, client_id: 5, comandes: [{
            producte_id: 5, quantitat: 1, preu_total: 15 
        }]}
    ] },
    { client_id: 6, nom: "nom6", cognom: "cognom6", address: "address6", codi_postal: 08003, localitat_id: 1, telefon: 123456785, tiquets: [        
        { tiquet_id: 2, data_hora: new Date("2020-01-01T16:59:59.001Z"), lliurament: 1, botiga_id: 1, empleat_id: 2, client_id: 6,  data_hora_lliurament: new Date("2020-01-01T17:59:59.001Z"), comandes: [{
            producte_id: 2, quantitat: 1, preu_total: 12
        }]},
        { tiquet_id: 8, data_hora: new Date("2020-03-01T18:00:00.001Z"), lliurament: 0, botiga_id: 2, empleat_id: 3, client_id: 6, comandes: [{
            producte_id: 7, quantitat: 1, preu_total: 4 
        }, {
            producte_id: 2, quantitat: 1, preu_total: 12
        }, {
            producte_id: 6, quantitat: 1, preu_total: 3
        }]}
    ] }
])

db.createCollection("categories", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["categoria_id", "nom"],
            properties: {
                categoria_id: {
                    bsonType: "number"
                },
                nom: {
                    bsonType: "string"
                },
                productes: {
                    bsonType: ["array"],
                    items: {
                        bsonType: "object",
                        required: ["producte_id", "nom", "descripcio", "imatge_url", "preu"],
                        properties: {
                            producte_id: { bsonType: "number" },
                            nom: { bsonType: "string" },
                            descripcio: { bsonType: "string" },
                            imatge_url: { bsonType: "string" },
                            preu: { bsonType: "number" }
                        }
                    }
                }
            }
        }
    }
})

db.categories.insertMany([
    { categoria_id: 1, nom: "hamburguesa", productes: [
        { producte_id: 1, nom: "hamburguesa1", descripcio: "descripcio1", imatge_url: "url1", preu: 10 }
    ] },
    { categoria_id: 2, nom: "pizza", productes: [
        { producte_id: 2, nom: "pizza2", descripcio: "descripcio2", imatge_url: "url2", preu: 12 },
        { producte_id: 3, nom: "pizza3", descripcio: "descripcio3", imatge_url: "url3", preu: 13 },
        { producte_id: 4, nom: "pizza4", descripcio: "descripcio4", imatge_url: "url4", preu: 14 },
        { producte_id: 5, nom: "pizza5", descripcio: "descripcio5", imatge_url: "url5", preu: 15 }
    ] },
    { categoria_id: 3, nom: "begudes", productes: [
        { producte_id: 6, nom: "beguda6", descripcio: "cocacola", imatge_url: "url6", preu: 3, },
        { producte_id: 7, nom: "beguda7", descripcio: "cervesa", imatge_url: "url7", preu: 4, }
    ] }
])

db.createCollection("botigues", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["botiga_id", "address", "codi_postal", "localitat_id"],
            properties: {
                botiga_id: {
                    bsonType: "number"
                },
                address: {
                    bsonType: "string"
                },
                codi_postal: {
                    bsonType: "number"
                },
                localitat_id: {
                    bsonType: "number"
                },
                empleats: {
                    bsonType: ["array"],
                    items: {
                        bsonType: "object",
                        required: ["empleat_id", "nom", "cognom", "NIF", "tipus_empleat"],
                        properties: {
                            empleat_id: {
                                bsonType: "number"
                            },
                            nom: {
                                bsonType: "string"
                            },
                            cognom: {
                                bsonType: "string"
                            },
                            NIF: {
                                bsonType: "string"
                            },
                            telefon: {
                                bsonType: "number"
                            },
                            tipus_empleat: {
                                bsonType: "number",
                                minimum: 0,
                                maximum: 1,
                                description: "must be a number between 0 (cuiner) & 1 (repartidor)"
                            }
                        }
                    }
                }
            }
        }
    }
})

db.botigues.insertMany([
    { botiga_id: 1, address: "address1", codi_postal: 08001, localitat_id: 1, empleats: [
        { empleat_id: 1, nom: "nom1", cognom: "cognom1", NIF: "12345678A", telefon: 123456770, tipus_empleat: 0 },
        { empleat_id: 2, nom: "nom2", cognom: "cognom2", NIF: "12345678B", telefon: 123456771, tipus_empleat: 1, }
    ] },
    { botiga_id: 2, address: "address2", codi_postal: 08002, localitat_id: 2, empleats: [
        { empleat_id: 3, nom: "nom3", cognom: "cognom3", NIF: "12345678C", telefon: 123456772, tipus_empleat: 0 },
        { empleat_id: 4, nom: "nom4", cognom: "cognom4", NIF: "12345678D", telefon: 123456773, tipus_empleat: 1 }
    ] }
])


// // Llista quants productes de la categoria 'begudes' s'han venut en una determinada localitat
// // botiga_id = 2 est?? en localitat_id = 2, product_id = 6 or 7
db.clients.find({ "tiquets.botiga_id": 2, $or: [{"tiquets.comandes": { $elemMatch: { producte_id: 6 }}}, {"tiquets.comandes": { $elemMatch: { producte_id: 7 }}}]}).pretty()


// // Llista quantes comandes ("tiquets") ha efectuat un determinat empleat
db.clients.find({
    "tiquets.empleat_id": 3
}).pretty()