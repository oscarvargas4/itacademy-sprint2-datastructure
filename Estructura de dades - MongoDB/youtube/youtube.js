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
                }
            }
        }
    }
})

db.users.insertMany([
    { user_id: 1, name: "nom1", email: "nom1@gmail.com", password: "password1", birthday: new Date("1994-07-15"), gender: 2, country: "country1", postal_code: 08001 },
    { user_id: 2, name: "nom2", email: "nom2@gmail.com", password: "password2", birthday: new Date("1994-07-16"), gender: 1, country: "country2", postal_code: 08002 },
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
                likes: {
                    bsonType: "number",
                    minimum: 0
                },
                dislikes: {
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
                }
            }
        }
    }
})

db.videos.insertMany([
    { video_id: 1, title: "video1", description: "description1", size: 1000, file_name: "file1", duration: 60, thumbnail_url: "url1", views: 20, likes: 1, dislikes: 1, state: 1, date_hour: new Date("2020-01-01T16:00:00.001Z"), user_id: 1},
    { video_id: 2, title: "video2", description: "description2", size: 2000, file_name: "file2", duration: 70, thumbnail_url: "url2", views: 20, likes: 1, dislikes: 1, state: 1, date_hour: new Date("2020-01-01T16:00:02.001Z"), user_id: 2},
    { video_id: 3, title: "video3", description: "description3", size: 3000, file_name: "file3", duration: 80, thumbnail_url: "url3", views: 30, likes: 1, dislikes: 1, state: 1, date_hour: new Date("2020-01-01T16:00:03.001Z"), user_id: 3},
])

db.createCollection("labels", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["label_id", "name", "video_id"],
            properties: {
                label_id: {
                    bsonType: "number"
                },
                name: {
                    bsonType: "string"
                },
                video_id: {
                    bsonType: "number"
                }
            }
        }
    }
})

db.labls.insertMany([
    { label_id: 1, name: "name1", video_id: 1 },
    { label_id: 2, name: "name2", video_id: 3 },
])

db.createCollection("video_likes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["video_like_id", "date_hour", "video_id", "user_id"],
            properties: {
                video_like_id: {
                    bsonType: "number"
                },
                date_hour: {
                    bsonType: "date"
                },
                video_id: {
                    bsonType: "number"
                },
                user_id : {
                    bsonType: "number"
                }
            }
        }
    }
})

db.video_likes.insertMany([
    { video_like_id: 1, date_hour: new Date("2020-01-01T16:00:00.001Z"), video_id: 1, user_id: 1 },
    { video_like_id: 2, date_hour: new Date("2020-01-01T16:00:02.001Z"), video_id: 2, user_id: 2 },
    { video_like_id: 3, date_hour: new Date("2020-01-01T16:00:03.001Z"), video_id: 3, user_id: 3 },
])

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
                }
            }
        }
    }
})

db.comments.insertMany([
    { comment_id: 1, description: "comment1", date_hour: new Date("2020-01-01T16:00:01.001Z"), user_id: 1, video_id: 1 },
    { comment_id: 2, description: "comment2", date_hour: new Date("2020-01-01T16:00:03.001Z"), user_id: 2, video_id: 2 },
    { comment_id: 3, description: "comment3", date_hour: new Date("2020-01-01T16:00:03.001Z"), user_id: 3, video_id: 3 },
])

db.createCollection("comment_likes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["comment_like_id", "date_hour", "user_id", "comment_id"],
            properties: {
                comment_like_id: {
                    bsonType: "number"
                },
                date_hour: {
                    bsonType: "date"
                },
                user_id : {
                    bsonType: "number"
                },
                comment_id: {
                    bsonType: "number"
                }
            }
        }
    }
})

db.comment_likes.insertMany([
    { comment_like_id: 1, date_hour: new Date("2020-01-01T16:11:11.001Z"), user_id: 3, comment_id: 1},
    { comment_like_id: 2, date_hour: new Date("2020-02-01T16:11:11.001Z"), user_id: 1, comment_id: 3},
])

db.createCollection("channels", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["channel_id", "name", "description", "date", "user_id"],
            properties: {
                channel_id: {
                    bsonType: "number"
                },
                name: {
                    bsonType: "string"
                },
                description: {
                    bsonType: "string"
                },
                date: {
                    bsonType: "date"
                },
                user_id: {
                    bsonType: "number"
                }
            }
        }
    }
})

db.channels.insertMany([
    { channel_id: 1, name: "name1", description: "description1", date: new Date("2020-01-10"), user_id: 1 },
    { channel_id: 2, name: "name2", description: "description2", date: new Date("2020-01-11"), user_id: 2 },
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
                    bsonType: "number"
                }
            }
        }
    }
})

db.channel_subscriptions.insertMany([
    { sub_id: 1, user_id: 2, channel_id: 1 },
    { sub_id: 2, user_id: 3, channel_id: 1 },
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