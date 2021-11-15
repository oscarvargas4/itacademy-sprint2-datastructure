// use youtube 
db = db.getSiblingDB('youtube')

db.dropDatabase()

db = db.getSiblingDB('youtube')

db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["user_id", "name", "email", "password", "birthday", "gender", "country"],
            properties: {
                user_id: {
                    bsonType: "number"
                },
                name: {
                    bsonType: "string"
                },
                email: {
                    bsonType: "string"
                },
                password: {
                    bsonType: "string"
                },
                birthday: {
                    bsonType: "date"
                },
                gender: {
                    bsonType: "number",
                    minimum: 1,
                    maximum: 2,
                    description: "1 for female, 2 for male"
                },
                country: {
                    bsonType: "string"
                },
                postal_code: {
                    bsonType: "number"
                },
                channel_description: {
                    bsonType: "string"
                },
                channel_date: {
                    bsonType: "date"
                },
            }
        }
    }
})

db.users.insertMany([
    { user_id: 1, name: "nom1", email: "nom1@gmail.com", password: "password1", birthday: new Date("1994-07-15"), gender: 2, country: "country1", postal_code: 08001, channel_description: "description1", channel_date: new Date("2020-01-10") },
    { user_id: 2, name: "nom2", email: "nom2@gmail.com", password: "password2", birthday: new Date("1994-07-16"), gender: 1, country: "country2", postal_code: 08002, channel_description: "description2", channel_date: new Date("2020-01-11") },
    { user_id: 3, name: "nom3", email: "nom3@gmail.com", password: "password3", birthday: new Date("1994-07-17"), gender: 2, country: "country3", postal_code: 08003 },
])

db.createCollection("videos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["video_id", "title", "description", "size", "file_name", "duration", "thumbnail_url", "views", "likes", "dislikes", "state", "date_hour", "user_id"],
            properties: {
                video_id: {
                    bsonType: "number"
                },
                title: {
                    bsonType: "string"
                },
                description: {
                    bsonType: "string"
                },
                size: {
                    bsonType: "number",
                    description: "In Bytes"
                },
                file_name: {
                    bsonType: "string"
                },
                duration: {
                    bsonType: "number",
                    minimum: 0,
                    description: "Duration in seconds"
                },
                thumbnail_url: {
                    bsonType: "string"
                },
                views: {
                    bsonType: "number",
                    minimum: 0
                },
                state: {
                    bsonType: "number",
                    minimum: 1,
                    maximum: 3,
                    description: "1: public, 2: private, 3: hidden"
                },
                date_hour: {
                    bsonType: "date"
                },
                user_id: {
                    bsonType: "number"
                },
                likes_dislikes : {
                    bsonType: ["array"],
                    items: {
                        bsonType: "object",
                        required: ["id", "date_hour", "user_id", "ld_type"],
                        properties: {
                            id: { bsonType: "number" },
                            date_hour: { bsonType: "date" },
                            user_id: { bsonType: "number" },
                            ld_type: {
                                bsonType: "number",
                                minimum: 1,
                                maximim: 2,
                                description: "1: like, 2: dislike"
                            }
                        }
                    }
                }
            }
        }
    }
})

db.videos.insertMany([
    { video_id: 1, title: "video1", description: "description1", size: 1000, file_name: "file1", duration: 60, thumbnail_url: "url1", views: 20, state: 1, date_hour: new Date("2020-01-01T16:00:00.001Z"), user_id: 1, likes_dislikes: [
        {
            id: 1, date_hour: new Date("2020-01-01T16:00:00.001Z"), user_id: 1, ld_type: 1 
        },{
            id: 2, date_hour: new Date("2020-01-01T16:00:00.001Z"), user_id: 2, ld_type: 2
        }
    ]},
    { video_id: 2, title: "video2", description: "description2", size: 2000, file_name: "file2", duration: 70, thumbnail_url: "url2", views: 20, state: 1, date_hour: new Date("2020-01-01T16:00:02.001Z"), user_id: 2, likes_dislikes: [
        {
            id: 1, date_hour: new Date("2020-01-01T16:00:02.001Z"), user_id: 2, ld_type: 1
        },{
            id: 2, date_hour: new Date("2020-01-01T16:00:02.001Z"), user_id: 1, ld_type: 2
        }
    ]},
    { video_id: 3, title: "video3", description: "description3", size: 3000, file_name: "file3", duration: 80, thumbnail_url: "url3", views: 30, state: 1, date_hour: new Date("2020-01-01T16:00:03.001Z"), user_id: 3, likes_dislikes: [
        {
            id: 1, date_hour: new Date("2020-01-01T16:00:03.001Z"), user_id: 1, ld_type: 1
        },{
            id: 2, date_hour: new Date("2020-01-01T16:00:03.001Z"), user_id: 2, ld_type: 2
        }
    ]}
])

db.createCollection("labels", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["label_id", "name"],
            properties: {
                label_id: {
                    bsonType: "number"
                },
                name: {
                    bsonType: "string"
                }
            }
        }
    }
})

db.labels.insertMany([
    { label_id: 1, name: "name1" },
    { label_id: 2, name: "name2" },
])

db.createCollection("labels_enrollment", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "video_id", "label_id"],
            properties: {
                id: { bsonType: "number" },
                video_id: { bsonType: "number" },
                label_id: { bsonType: "number" }
            }
        }
    }
})

db.labels_enrollment.insertMany([
    { id: 1, video_id: 1, label_id: 1 },
    { id: 2, video_id: 3, label_id: 2 }
])

db.createCollection("playlists", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["playlist_id", "name", "date", "state", "user_id"],
            properties: {
                playlist_id: {
                    bsonType: "number"
                },
                name: {
                    bsonType: "string"
                },
                date: {
                    bsonType: "date"
                },
                state: {
                    bsonType: "number",
                    minimum: 1,
                    maximum: 2,
                    description: "1: public, 2: private"
                },
                user_id: {
                    bsonType: "number"
                }
            }
        }
    }
})

db.playlists.insertMany([
    { playlist_id: 1, name: "name1", date: new Date("2020-02-03"), state: 1, user_id: 1 },
    { playlist_id: 2, name: "name2", date: new Date("2020-02-04"), state: 2, user_id: 2 },
])

db.createCollection("playlist_enrollment", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "video_id", "playlist_id"],
            properties: {
                id: { bsonType: "number" },
                video_id: { bsonType: "number" },
                playlist_id: { bsonType: "number" }
            }
        }
    }
})


db.createCollection("comments", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["comment_id", "description", "date_hour", "user_id", "video_id"],
            properties: {
                comment_id: {
                    bsonType: "number"
                },
                description: {
                    bsonType: "string"
                },
                date_hour: {
                    bsonType: "date"
                },
                user_id: {
                    bsonType: "number"
                },
                video_id: {
                    bsonType: "number"
                },
                likes_dislikes: {
                    bsonType: ["array"],
                    items: {
                        bsonType: "object",
                        required: ["id", "date_hour", "ld_type" ],
                        properties: {
                            id: { bsonType: "number" },
                            date_hour: { bsonType: "date" },
                            user_id: { bsonType: "number" },
                            ld_type: {
                                bsonType: "number",
                                minimum: 1,
                                maximum: 2,
                                desciption: "1: like, 2: dislike"
                            }
                        }
                    }
                }
            }
        }
    }
})

db.comments.insertMany([
    { comment_id: 1, description: "comment1", date_hour: new Date("2020-01-01T16:00:01.001Z"), user_id: 1, video_id: 1, likes_dislikes: [{
        id: '1', date_hour: new Date("2020-01-01T17:00:01.001Z"), user_id: 2, ld_type: 1
    }, {
        id: '2', date_hour: new Date("2020-01-01T17:00:01.001Z"), user_id: 3, ld_type: 2
    }]},
    { comment_id: 2, description: "comment2", date_hour: new Date("2020-01-01T16:00:03.001Z"), user_id: 2, video_id: 2, likes_dislikes: [{
        id: '1', date_hour: new Date("2020-01-01T17:00:01.001Z"), user_id: 1, ld_type: 1
    }, {
        id: '2', date_hour: new Date("2020-01-01T17:00:01.001Z"), user_id: 3, ld_type: 2
    }]},
    { comment_id: 3, description: "comment3", date_hour: new Date("2020-01-01T16:00:03.001Z"), user_id: 3, video_id: 3, likes_dislikes: [{
        id: '1', date_hour: new Date("2020-01-01T17:00:01.001Z"), user_id: 1, ld_type: 1
    }, {
        id: '2', date_hour: new Date("2020-01-01T17:00:01.001Z"), user_id: 2, ld_type: 2
    }]},
])

db.createCollection("channel_subscriptions", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["sub_id", "user_id", "channel_id"],
            properties: {
                sub_id: {
                    bsonType: "number"
                },
                user_id: {
                    bsonType: "number"
                },
                channel_id: {
                    bsonType: "number",
                    description: "user_id who created the channel"
                }
            }
        }
    }
})

db.channel_subscriptions.insertMany([
    { sub_id: 1, user_id: 2, channel_id: 1 },
    { sub_id: 2, user_id: 3, channel_id: 1 },
])

// printjson(db.adminCommand('listDatabases'))

