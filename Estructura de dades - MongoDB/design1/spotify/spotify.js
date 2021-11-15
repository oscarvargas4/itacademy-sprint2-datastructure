db = db.getSiblingDB('spotify')

db.dropDatabase()

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

db.createCollection("payments", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["order_number", "date", "total"],
            properties: {
                order_number: { bsonType: "number" },
                date: { bsonType: "date" },
                total: { bsonType: "number" },
                subscription_id: { bsonType: "number" },
                paypal: { bsonType: "string" },
                cards: {
                    bsonType: ["array"],
                    items: {
                        bsonType: "object",
                        required: ["card_id", "month", "year", "cvc"],
                        properties: {
                            card_id: { bsonType: "number" },
                            month: { bsonType: "number" },
                            year: { bsonType: "number" },
                            cvc: { bsonType: "number" }
                        }
                    }
                }
            }
        }
    }
})

db.payments.insertOne({ order_number: 1, date: new Date("2020-01-01"), total: 15, subscription_id: 1, paypal_id: "username1" })

db.createCollection("artists", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["artist_id", "name", "image_url"],
            properties: {
                artist_id: { bsonType: "number" },
                name: { bsonType: "string" },
                image_url: { bsonType: "string" }
            }
        }
    }
})

db.artists.insertMany([
    { artist_id: 1, name: "name1", image_url: "url1" },
    { artist_id: 2, name: "name2", image_url: "url2" }
])

db.createCollection("artist_enrollment", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "artist_id", "artist_id2"],
            properties: {
                id: { bsonType: "number" },
                artist_id: { bsonType: "number" },
                artist2_id: { bsonType: "number" }
            }
        }
    }
})

db.artists_enrollment.insertMany([
    { id: 1, artist_id: 1, artist2_id: 2 }
])

db.createCollection("artist_followings", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["following_id", "user_id", "artist_id"],
            properties: {
                following_id: { bsonType: "number" },
                user_id: { bsonType: "number" },
                artist_id: { bsonTpe: "number" }
            }
        }
    }
})

db.artist_followings.insertMany([
    { following_id: 1, user_id: 1, artist_id: 1 }
])

db.createCollection("artists", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["artist_id", "name", "image_url"],
            properties: {
                artist_id: { bsonType: "number" },
                name: { bsonType: "string" },
                image_url: { bsonType: "string" }
            }
        }
    }
})

db.artist_followings.insertMany([
    {
        artist_id: 1, name: "name1", image_url: "url1"
    },{
        artist_id: 21, name: "name2", image_url: "url2"
    }
])

db.createCollection("artist_followings", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "following_id", "user_id", "artist_id" ],
            properties: {
                following_id: { bsonType: "number" },
                user_id: { bsonType: "number" },
                artist_id: { bsonType: "number" }
            }
        }
    }
})

db.artist_followings.insertMany([
    { following_id: 1, user_id: 1, artist_id: 1 }
])

db.createCollection("artist_enrollment", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "artist_id", "artist_id2"],
            properties: {
                id: { bsonType: "number" },
                artist_id: { bsonType: "number" },
                artist_id2: { bsonType: "number" }
            }
        }
    }
})

db.artist_enrollment.insertMany([
    { id: 1, artist_id: 1, artist_id2: 2}
])

db.createCollection("albums", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["album_id", "title", "date", "image_url", "artist_id"],
            properties: {
                album_id: { bsonType: "number" },
                title: { bsonType: "string" },
                date: { bsonType: "date" },
                image_url: { bsonType: "string" },
                artist_id: { bsonType: "number" },
                album_likes: {
                    bsonType: ["array"],
                    items:{
                        bsonType: "object",
                        required: ["album_like_id", "user_id"],
                        properties: {
                            album_like_id: { bsonType: "number" },
                            user_id: { bsonType: "number" }
                        }
                    }
                }
            }
        }
    }
})

db.albums.insertMany([
    { album_id: 1, title: "title1", date: new Date("2020-02-02"), image_url: "image3", artist_id: 1, album_likes: [
        { album_like_id: 1, user_id: 1 }
    ]}
])

db.createCollection("songs", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["song_id", "title", "duration", "reproductions"],
            properties: {
                song_id: { bsonType: "number" },
                title: { bsonType: "string" },
                duration: {
                    bsonType: "number",
                    description: "Duration in seconds"
                },
                reproductions: { bsonType: "number" },
                album_id: { bsonType: "number" },
                song_likes: {
                    bsonType: ["array"],
                    items: {
                        bsonTpye: "object",
                        required: ["song_like_id", "user_id"],
                        properties: {
                            song_like_id: { bsonType: "number" },
                            user_id: { bsonType: "number" }
                        }
                    }
                }
            }
        }
    }
})

db.songs.insertMany([
    { song_id: 1, title: "title1", duration: 67, reproductions: 100, album_id: 1, song_likes: [
        { song_like_id: 1, user_id: 1 }
    ] }
])

db.createCollection("playlists", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "playlist_id", "title", "songs_number", "date", "playlist_state", "user_id" ],
            properties: {
                playlist_id: { bsonType: "number" },
                title: { bsonType: "string" },
                songs_number: { bsonType: "number" },
                date: { bsonType: "date" },
                playlist_state: {
                    bsonType: "number",
                    minimum: 1,
                    maximum: 2,
                    description: "1: Active 2: Deleted"
                },
                deleted_date: { bsonType: "date" },
                user_id: { bsonType: "number" }
            }
        }
    }
})

db.playlists.insertMany([
    { playlist_id: 1, title: "playlist1", songs_number: 1, date: new Date("2020-02-02"), playlist_state: 1, user_id: 1 }
])

db.createCollection("playlist_additions", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["add_id", "date", "song_id", "user_id", "playlist_id"],
            properties: {
                add_id: { bsonType: "number" },
                date: { bsonType: "date" },
                song_id: { bsonType: "number" },
                user_id: { bsonType: "number" },
                playlist_id: { bsonType: "number" }
            }
        }
    }
})

db.playlist_additions.insertMany([
    { add_id: 1, date: new Date("2020-01-01"), song_id: 1, user_id: 1, playlist_id: 1 }
])