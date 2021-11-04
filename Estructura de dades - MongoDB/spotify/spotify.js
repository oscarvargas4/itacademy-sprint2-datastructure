db = db.getSiblingDB('spotify')

db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["user_id", "email", "password", "name", "birthday", "gender", "country", "postal_code", "user_type"],
            properties: {
                user_id: {
                    bsonType: "number"
                },
                email: {
                    bsonType: "string"
                },
                password: {
                    bsonType: "string"
                },
                name: {
                    bsonType: "string"
                },
                birthday: {
                    bsonType: "date"
                },
                gender: {
                    bsonType: "number",
                    minimum: 1,
                    maximum: 2,
                    description: "1: Female , 2: Male"
                },
                country: {
                    bsonType: "string"
                },
                postal_code: {
                    bsonType: "number"
                },
                user_type: {
                    bsonType: "number",
                    minimum: 1,
                    maximum: 2,
                    description: "1: Free, 2: Premium"
                }
            }
        }
    }
})

db.users.insertOne({ user_id: 1, email: "email1@gmail.com", password: "12345EWS", name: "name1", birthday: new Date("1994-07-05"), gender: 1, country: "Spain", postal_code: 08002, user_type: 2 })

db.createCollection("subscriptions", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["subscription_id", "begin_date", "renew_date", "payment_method", "user_id", "user_type"],
            properties: {
                subscription_id: { bsonType: "number" },
                begin_date: { bsonType: "date" },
                renew_date: { bsonType: "date" },
                payment_method: {
                    bsonType: "number",
                    minimum: 1,
                    maximum: 2,
                    description: "1: Card, 2: Paypal"
                },
                user_id: { bsonType: "number" },
                user_type: {
                    bsonType: "number",
                    minimum: 2
                }
            }
        }
    }
})

db.subscriptions.insertOne({ subscription_id: 1, begin_date: new Date("2020-01-01"), renew_date: new Date("2020-02-01"), payment_method: 2, user_id: 1, user_type: 2 })

db.createCollection("cards", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["card_id", "month", "year", "cvc", "subscription_id"],
            properties: {
                card_id: { bsonType: "number" },
                month: { bsonType: "number" },
                year: { bsonType: "number" },
                cvc: { bsonType: "number" },
                subscription_id : { bsonType: "number" }
            }
        }
    }
})

db.createCollection("paypal", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["paypal_id", "subscription_id"],
            properties: {
                paypal_id: {
                    bsonType: "string",
                    description: "Paypal username"
                },
                subscription_id: { bsonType: "number" }
            }
        }
    }
})

db.paypal.insertOne({ paypal_id: "username1", subscription_id: 1 })

db.createCollection("payments", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["order_number", "date", "total"],
            properties: {
                order_number: { bsonType: "number" },
                date: { bsonType: "date" },
                total: { bsonType: "number" },
                card_id: { bsonType: "number" },
                paypal: { bsonType: "string" }
            }
        }
    }
})

db.payments.insertOne({ order_number: 1, date: new Date("2020-01-01"), total: 15, paypal_id: "username1" })

db.createCollection("similar_music", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["similar_music_id", "name"],
            properties: {
                similar_music_id: { bsonType: "number" },
                name: { bsonType: "string" }
                
            }
        }
    }
})

db.similar_music.insertOne({ similar_music_id: 1, name: "namemusic1" })

db.createCollection("suggested_artists", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["suggested_id", "user_id", "similar_music_id"],
            properties: {
                suggested_id: { bsonType: "number" },
                user_id: { bsonType: "number" },
                similar_music_id: { bsonType: "number" }
            }
        }
    }
})

db.suggested_artists.insertOne({ suggested_id: 1, user_id: 1, similar_music_id: 1 })

db.createCollection("artists", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["artist_id", "name", "image_url", "similar_music_id"],
            properties: {
                artist_id: { bsonType: "number" },
                name: { bsonType: "string" },
                image_url: { bsonType: "string" },
                similar_music_id: { bsonType: "number" }
            }
        }
    }
})
