
CREATE DATABASE IF NOT EXISTS spotify;
USE spotify;

CREATE TABLE IF NOT EXISTS users (
	user_id INT(11) NOT NULL AUTO_INCREMENT,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    name VARCHAR(45) NOT NULL,
    birthday DATE NOT NULL,
    gender TINYINT NOT NULL COMMENT '1: Female , 2: Male',
    country VARCHAR(45) NOT NULL,
    postal_code INT(11) NOT NULL,
    user_type TINYINT NOT NULL COMMENT '1: Free, 2: Premium',
    CONSTRAINT Chk_users_gender CHECK (gender=1 OR gender=2),
    CONSTRAINT Chk_users_type CHECK (user_type=1 OR user_type=2),
    PRIMARY KEY (user_id)    
);

CREATE TABLE IF NOT EXISTS subscriptions (
	subscription_id INT(11) NOT NULL AUTO_INCREMENT,
    begin_date DATE NOT NULL,
    renew_date DATE NOT NULL,
    payment_method TINYINT NOT NULL COMMENT '1: Card, 2: Paypal',
    user_id INT(11) NOT NULL,
    user_type TINYINT NOT NULL COMMENT '2: Premium',
    CONSTRAINT Chk_payment_ CHECK (payment_method >= 1 AND payment_method <=2),
    CONSTRAINT Chk_payment_user_type CHECK (user_type = 2),
    PRIMARY KEY (subscription_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS cards (
	card_id INT(16) NOT NULL,
    month INT(2) NOT NULL,
    year INT(4) NOT NULL,
    cvc INT (4) NOT NULL,
    subscription_id INT(11) NOT NULL,
    PRIMARY KEY (card_id),
    FOREIGN KEY (subscription_id) REFERENCES subscriptions(subscription_id)
);

CREATE TABLE IF NOT EXISTS paypal (
	paypal_id VARCHAR(45) NOT NULL COMMENT 'Username',
    subscription_id INT(11) NOT NULL,
    PRIMARY KEY (paypal_id),
    FOREIGN KEY (subscription_id) REFERENCES subscriptions(subscription_id)
);

CREATE TABLE IF NOT EXISTS payments (
	order_number INT(11) NOT NULL AUTO_INCREMENT,
    date DATE NOT NULL,
    total INT(20) NOT NULL,
    card_id INT(16),
    paypal_id VARCHAR(45),
    -- CONSTRAINT Chk_payments CHECK (card_id>0 OR paypal_id<>''): is not possible, because constraint check are not allowed with foreign keys,
    PRIMARY KEY (order_number),
    FOREIGN KEY (card_id) REFERENCES cards(card_id),
    FOREIGN KEY (paypal_id) REFERENCES paypal(paypal_id)
);

CREATE TABLE IF NOT EXISTS similar_music (
	similar_music_id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (similar_music_id)
);

CREATE TABLE IF NOT EXISTS suggested_artists (
	suggested_id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    similar_music_id INT(11) NOT NULL,
    PRIMARY KEY (suggested_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (similar_music_id) REFERENCES similar_music(similar_music_id)
);

CREATE TABLE IF NOT EXISTS artists (
	artist_id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    image_url VARCHAR(45),
    similar_music_id INT(11) NOT NULL,
    PRIMARY KEY (artist_id),
    FOREIGN KEY (similar_music_id) REFERENCES similar_music(similar_music_id)
);

CREATE TABLE IF NOT EXISTS artist_followings (
	following_id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    artist_id INT(11) NOT NULL,
    PRIMARY KEY (following_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
);

CREATE TABLE IF NOT EXISTS albums (
	album_id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
	date DATE NOT NULL,
    image_url VARCHAR(45),
    artist_id INT(11) NOT NULL,
    PRIMARY KEY (album_id),
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
);

CREATE TABLE IF NOT EXISTS album_likes (
	album_like_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    album_id INT(11) NOT NULL,
    PRIMARY KEY (album_like_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (album_id) REFERENCES albums(album_id)
);

CREATE TABLE IF NOT EXISTS songs (
	song_id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    duration INT(11) NOT NULL COMMENT 'in seconds',
    reproductions INT(100) NOT NULL,
    album_id INT(11) NOT NULL,
    PRIMARY KEY (song_id),
    FOREIGN KEY (album_id) REFERENCES albums(album_id)
);

CREATE TABLE IF NOT EXISTS song_likes (
	song_like_id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    song_id INT(11) NOT NULL,
    PRIMARY KEY (song_like_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (song_id) REFERENCES songs(song_id)
);

CREATE TABLE IF NOT EXISTS playlists (
	playlist_id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    songs_number INT(20),
    date DATE NOT NULL,
    playlist_state TINYINT NOT NULL COMMENT '0:Active, 1:Deleted',
    deleted_day DATE,
    user_id INT(11) NOT NULL,    
    CHECK (playlist_state = 0 OR  playlist_state = 1),
    PRIMARY KEY (playlist_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)    
);

CREATE TABLE IF NOT EXISTS playlist_shares (
	share_id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL COMMENT 'User who shared',
    playlist_id INT(11) NOT NULL,
    playlist_state TINYINT NOT NULL COMMENT '0:Active, 1:Deleted',
    PRIMARY KEY (share_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (playlist_id) REFERENCES playlists(playlist_id),
    CONSTRAINT Chk_playlist_active CHECK (playlist_state = 0)
);

CREATE TABLE IF NOT EXISTS playlist_additions (
	add_id INT(11) NOT NULL AUTO_INCREMENT,
    date DATE NOT NULL,
    song_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    playlist_id INT(11) NOT NULL,
    PRIMARY KEY (add_id),
    FOREIGN KEY (song_id) REFERENCES songs(song_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (playlist_id) REFERENCES playlists(playlist_id)
);

INSERT INTO users (user_id, email, password, name, birthday, gender, country, postal_code, user_type) 
VALUES('1', 'email1@gmail.com', '12345EWS', 'name1', '1994-07-05', '1', 'Spain', '08002', '2');

INSERT INTO subscriptions (subscription_id, begin_date, renew_date, payment_method, user_id, user_type)
VALUES ('1', '2020-01-01', '2020-02-01', '2', '1', '2');

INSERT INTO paypal (paypal_id, subscription_id)
VALUES ('username1', '1');

INSERT INTO payments (order_number, date, total, card_id, paypal_id)
VALUES ('1', '2020-01-01', '15', null, 'username1');

INSERT INTO similar_music (similar_music_id, name)
VALUES ('1', 'namemusic1');

INSERT INTO suggested_artists (suggested_id, user_id, similar_music_id)
VALUES ('1', '1', '1');

INSERT INTO artists (artist_id, name, image_url, similar_music_id)
VALUES ('1', 'name1', 'image10', '1'),
('2', 'name2', 'image20', '1');

INSERT INTO artist_followings (following_id, user_id, artist_id)
VALUES ('1', '1', '1');

INSERT INTO albums(album_id, title, date, image_url, artist_id)
VALUES ('1', 'title1', '2020-02-02', 'image3', '1');

INSERT INTO album_likes (album_like_id, user_id, album_id)
VALUES ('1', '1', '1');

INSERT INTO songs (song_id, title, duration, reproductions, album_id)
VALUES ('1', 'title1', '67', '100', '1');

INSERT INTO song_likes (song_like_id, user_id, song_id)
VALUES ('1', '1', '1');

INSERT INTO playlists (playlist_id, title, songs_number, date, playlist_state, deleted_day, user_id)
VALUES ('1', 'playlist1', '1', '2020-02-02', '0', null, '1');

INSERT INTO playlist_shares (share_id, user_id, playlist_id, playlist_state)
VALUES ('1', '1', '1', '0');

INSERT INTO playlist_additions (add_id, date, song_id, user_id, playlist_id)
VALUES ('1', '2020-01-01', '1', '1', '1');

SELECT * FROM songs;
SELECT * FROM playlists;
SELECT * FROM artist_followings;

SELECT playlists.playlist_id, users.user_id
FROM playlists
INNER JOIN users ON playlists.user_id = users.user_id;

-- SUGGESTED ARTIST
SELECT *
FROM artists
JOIN similar_music
	ON similar_music.similar_music_id = artists.similar_music_id
JOIN suggested_artists
	ON suggested_artists.similar_music_id = similar_music.similar_music_id
WHERE suggested_artists.suggested_id = '1';
