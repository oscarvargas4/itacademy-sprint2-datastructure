// use optica
db = db.getSiblingDB('optica')

db.dropDatabase()

db = db.getSiblingDB('optica')


// https://docs.mongodb.com/manual/reference/operator/query/jsonSchema/
db.createCollection("proveidors", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["proveidor_id", "nom", "carrer", "carrer_numero", "pis", "porta", "codi_postal", "pais", "telefon", "NIF"],
            properties: {
                proveidor_id: {
                    bsonType: "number"
                },
                nom: {
                    bsonType: "string"
                },
                carrer: {
                    bsonType: "string"
                },
                carrer_numero: {
                    bsonType: "number"
                },
                pis: {
                    bsonType: "number"
                },
                porta: {
                    bsonType: "number"
                },
                codi_postal: {
                    bsonType: "number"
                },
                pais: {
                    bsonType: "string"
                },
                telefon: {
                    bsonType: "number"
                },
                NIF: {
                    bsonType: "string"
                }
            }
        }
    }
})

db.proveidors.insert({proveidor_id: 1, nom: "proveidor1", carrer: "carrer1", carrer_numero: 1, pis: 1, porta: 1, codi_postal: 08001, pais: "Espanya", telefon: 123456789, FAX: "123456789", NIF: "A123456789"})
db.proveidors.insert({proveidor_id: 2, nom: "proveidor2", carrer: "carrer2", carrer_numero: 2, pis: 2, porta: 2, codi_postal: 08001, pais: "Espanya", telefon: 123456780, FAX: "123456780", NIF: "A123456780"})
db.proveidors.insert({proveidor_id: 3, nom: "proveidor3", carrer: "carrer3", carrer_numero: 3, pis: 3, porta: 3, codi_postal: 08003, pais: "Espanya", telefon: 123456781, FAX: "123456780", NIF: "A123456781"})
db.proveidors.insert({proveidor_id: 4, nom: "proveidor4", carrer: "carrer4", carrer_numero: 4, pis: 4, porta: 4, codi_postal: 08004, pais: "Espanya", telefon: 123456782, FAX: "123456780", NIF: "A123456782"})

db.createCollection("clients", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["client_id", "nom", "address", "telefon", "correu", "data_registre"],
            properties: {
                client_id: {
                    bsonType: "number",
                },
                nom: {
                    bsonType: "string"
                },
                address: {
                    bsonType: "string"
                },
                telefon: {
                    bsonType: "number"
                },
                correu: {
                    bsonType: "string"
                },
                data_registre: {
                    bsonType: "date"
                },
                recomenat: {
                    bsonType: "number"
                },
                ulleres: {
                    bsonType: ["array"],
                    items: {
                        bsonType: "object",
                        required: ["ullera_id", "graduacio_vidre1", "graduacio_vidre2", "tipus_montura", "color_montura", "color_vidres", "preu", "proveidor_id", "marca_id", "empleat_id", "factura_date"],
                        properties: {
                            ullera_id: {
                                bsonType: "number"
                            },
                            graduacio_vidre1: {
                                bsonType: "number"
                            },
                            graduacio_vidre2: {
                                bsonType: "number"
                            },
                            tipus_montura: {
                                bsonType: "string"
                            },
                            color_montura: {
                                bsonType: "string"
                            },
                            color_vidres: {
                                bsonType: "string"
                            },
                            preu: {
                                bsonType: "number"
                            },
                            proveidor_id: {
                                bsonType: "number"
                            },
                            marca_id: {
                                bsonType: "number"
                            },
                            empleat_id: {
                                bsonType: "number"
                            },
                            factura_date: {
                                bsonType: "date"
                            }
                        }
                    }
                }
            }
        }
    }
})

db.clients.insertMany([
    { client_id: 1, nom: "nom1", address: "address1", telefon: 123456781, correu: "nom1@gmail.com", data_registre: new Date("2020-01-30"), ulleres: [
        { ullera_id: 1, graduacio_vidre1: 10, graduacio_vidre2: 10, tipus_montura: "flotant", color_montura: "negre", color_vidres: "transparent", preu: 500, proveidor_id: 1, marca_id: 1, factura_date: new Date("2020-01-30"), empleat_id: 1 },
        { ullera_id: 2, graduacio_vidre1: 20, graduacio_vidre2: 20, tipus_montura: "pasta", color_montura: "negre", color_vidres: "transparent", preu: 600, proveidor_id: 1, marca_id: 2, factura_date: new Date("2020-01-30"), empleat_id: 2 },
        { ullera_id: 3, graduacio_vidre1: 30, graduacio_vidre2: 30, tipus_montura: "metalica", color_montura: "negre", color_vidres: "transparent", preu: 700, proveidor_id: 1, marca_id: 3, factura_date: new Date("2020-01-30"), empleat_id: 3 }
    ] },
    { client_id: 2, nom: "nom2", address: "address2", telefon: 123456782, correu: "nom2@gmail.com", data_registre: new Date("2020-02-02"), ulleres: [
        { ullera_id: 4, graduacio_vidre1: 40, graduacio_vidre2: 40, tipus_montura: "flotant", color_montura: "negre", color_vidres: "transparent", preu: 800, proveidor_id: 1, marca_id: 4, factura_date: new Date("2020-02-02"), empleat_id: 4 }
    ] },
    { client_id: 3, nom: "nom3", address: "address3", telefon: 123456783, correu: "nom3@gmail.com", data_registre: new Date("2020-03-12"), ulleres: [
        { ullera_id: 5, graduacio_vidre1: 50, graduacio_vidre2: 50, tipus_montura: "flotant", color_montura: "blau", color_vidres: "transparent", preu: 500, proveidor_id: 4, marca_id: 5, factura_date: new Date("2020-03-12"), empleat_id: 1 }
    ] },
    { client_id: 4, nom: "nom4", address: "address4", telefon: 123456784, correu: "nom4@gmail.com", data_registre: new Date("2020-04-30"), recomenat: 1, ulleres: [
        { ullera_id: 6, graduacio_vidre1: 60, graduacio_vidre2: 60, tipus_montura: "pasta", color_montura: "blau", color_vidres: "transparent", preu: 600, proveidor_id: 4, marca_id: 6, factura_date: new Date("2020-04-30"), empleat_id: 2 }
    ] },
    { client_id: 5, nom: "nom5", address: "address5", telefon: 123456785, correu: "nom5@gmail.com", data_registre: new Date("2020-05-03"), recomenat: 2, ulleres: [
        { ullera_id: 7, graduacio_vidre1: 70, graduacio_vidre2: 70, tipus_montura: "metalica", color_montura: "blau", color_vidres: "transparent", preu: 700, proveidor_id: 2, marca_id: 7, factura_date: new Date("2020-05-03"), empleat_id: 3 }
    ] },
    { client_id: 6, nom: "nom6", address: "address6", telefon: 123456786, correu: "nom6@gmail.com", data_registre: new Date("2020-05-08"), recomenat: 3, uleres: [
        { ullera_id: 8, graduacio_vidre1: 80, graduacio_vidre2: 80, tipus_montura: "metalica", color_montura: "vermell", color_vidres: "transparent", preu: 800, proveidor_id: 2, marca_id: 8, factura_date: new Date("2020-05-08"), empleat_id: 4 }
    ] },
    { client_id: 7, nom: "nom7", address: "address7", telefon: 123456787, correu: "nom7@gmail.com", data_registre: new Date("2020-06-02"), recomenat: 4, ulleres: [
        { ullera_id: 9, graduacio_vidre1: 20, graduacio_vidre2: 20, tipus_montura: "pasta", color_montura: "vermell", color_vidres: "transparent", preu: 700, proveidor_id: 3, marca_id: 9, factura_date: new Date("2020-06-02"), empleat_id: 1 },
        { ullera_id: 15, graduacio_vidre1: 50, graduacio_vidre2: 60, tipus_montura: "flotant", color_montura: "blau", color_vidres: "transparent", preu: 650, proveidor_id: 4, marca_id: 5, factura_date: new Date("2020-06-23"), empleat_id: 3 }

    ] },
    { client_id: 8, nom: "nom8", address: "address8", telefon: 123456788, correu: "nom8@gmail.com", data_registre: new Date("2020-06-10"), ulleres: [
        { ullera_id: 10, graduacio_vidre1: 20, graduacio_vidre2: 30, tipus_montura: "pasta", color_montura: "vermell", color_vidres: "transparent", preu: 800, proveidor_id: 3, marca_id: 9, factura_date: new Date("2020-06-10"), empleat_id: 2 },
        { ullera_id: 16, graduacio_vidre1: 40, graduacio_vidre2: 80, tipus_montura: "metalica", color_montura: "vermell", color_vidres: "transparent", preu: 800, proveidor_id: 2, marca_id: 8, factura_date: new Date("2020-06-24"), empleat_id: 4 },
        { ullera_id: 17, graduacio_vidre1: 40, graduacio_vidre2: 40, tipus_montura: "metalica", color_montura: "vermell", color_vidres: "transparent", preu: 600, proveidor_id: 2, marca_id: 8, factura_date: new Date("2020-06-24"), empleat_id: 4 }
    ] },
    { client_id: 9, nom: "nom9", address: "address9", telefon: 123456789, correu: "nom9@gmail.com", data_registre: new Date("2020-06-15"), recomenat: 1, ulleres: [
        { ullera_id: 11, graduacio_vidre1: 30, graduacio_vidre2: 20, tipus_montura: "pasta", color_montura: "vermell", color_vidres: "transparent", preu: 800, proveidor_id: 3, marca_id: 9, factura_date: new Date("2020-06-15"), empleat_id: 3 },
        { ullera_id: 14, graduacio_vidre1: 60, graduacio_vidre2: 50, tipus_montura: "flotant", color_montura: "blau", color_vidres: "transparent", preu: 600, proveidor_id: 4, marca_id: 5, factura_date: new Date("2020-06-22"), empleat_id: 2 }
    ] },
    { client_id: 10, nom: "nom10", address: "address10", telefon: 123456771, correu: "nom10@gmail.com", data_registre: new Date("2020-06-20"), recomenat: 1, ulleres: [
        { ullera_id: 12, graduacio_vidre1: 20, graduacio_vidre2: 30, tipus_montura: "pasta", color_montura: "negre", color_vidres: "transparent", preu: 500, proveidor_id: 1, marca_id: 2, factura_date: new Date("2020-06-20"), empleat_id: 4 },
        { ullera_id: 13, graduacio_vidre1: 30, graduacio_vidre2: 20, tipus_montura: "pasta", color_montura: "negre", color_vidres: "transparent", preu: 600, proveidor_id: 1, marca_id: 2, factura_date: new Date("2020-06-21"), empleat_id: 1 }
    ] }
])

// Llista el total de factures d'un client en un període determinat
db.clients.find({
    "ulleres.factura_date": {
        $gte: ISODate("2020-01-01T00:00:00Z"),
        $lte: ISODate("2020-04-31T00:00:00Z")
    }
})

// Llista els diferents models d'ulleres que ha venut un empleat durant un any
db.clients.distinct(
    "ulleres.ullera_id",
    { "ulleres.empleat_id": 4 }
)

// Llista els diferents proveïdors que han subministrat ulleres venudes amb èxit per l'òptica
db.clients.distinct(
    "ulleres.proveidor_id"
)