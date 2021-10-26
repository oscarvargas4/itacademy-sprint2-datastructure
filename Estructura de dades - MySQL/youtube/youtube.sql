CREATE DATABASE youtube;
USE youtube;

CREATE TABLE users (
    user_id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,    
    birthday DATE NOT NULL,
    gender TINYINT NOT NULL COMMENT '1 for female, 2 for male',
    country VARCHAR(45) NOT NULL,
    postal_code INT(11),
    PRIMARY KEY (user_id)
);

CREATE TABLE videos (
    video_id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    description VARCHAR(100) NOT NULL,
    size INT(20) NOT NULL COMMENT 'in Bytes',
    file_name VARCHAR(45) NOT NULL,
    duration INT(20) NOT NULL COMMENT 'in seconds',
    thumbnail_url VARCHAR(45) NOT NULL,
    views INT(9) NOT NULL,
    likes INT (9),
    dislikes INT (9),
    state TINYINT NOT NULL COMMENT '1: public, 2: private, 3: hidden',
    date_hour DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT(11) NOT NULL,
    PRIMARY KEY (video_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE labels (
    label_id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    video_id INT(11) NOT NULL,
    PRIMARY KEY (label_id),
    FOREIGN KEY (video_id) REFERENCES videos(video_id)
);

CREATE TABLE video_likes (
    video_like_id INT(11) NOT NULL AUTO_INCREMENT,
    date_hour DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    video_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    PRIMARY KEY (video_like_id),
    FOREIGN KEY (video_id) REFERENCES videos(video_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE comments (
    comment_id INT(11) NOT NULL AUTO_INCREMENT,
    description VARCHAR(100) NOT NULL,
    date_hour DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT(11) NOT NULL,
    video_id INT(11) NOT NULL,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (video_id) REFERENCES videos(video_id)
);

create table comment_likes (
    comment_like_id INT(11) NOT NULL AUTO_INCREMENT,
    date_hour DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT(11) NOT NULL,
    comment_id INT(11) NOT NULL,
    PRIMARY KEY (comment_like_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (comment_id) REFERENCES comments(comment_id)
);

CREATE TABLE channels (
    channel_id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    description VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    user_id INT(11) NOT NULL,
    PRIMARY KEY (channel_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE channel_subscriptions (
    sub_id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    channel_id INT(11) NOT NULL,
    PRIMARY KEY (sub_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (channel_id) REFERENCES channels(channel_id)
);

CREATE TABLE playlists (
    playlist_id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    date DATE NOT NULL,
    state TINYINT NOT NULL COMMENT '1: public, 2: private',
    user_id INT(11) NOT NULL,
    PRIMARY KEY (playlist_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users (user_id, name, email, password, birthday, gender, country, postal_code)
VALUES ('1', 'nom1', 'nom1@gmail.com', 'password1', '1994-07-15', '2', 'country1', '0801'),
('2', 'nom2', 'nom2@gmail.com', 'password2', '1994-07-16', '1', 'country1', '08001'),
('3', 'nom3', 'nom3@gmail.com', 'password3', '1994-07-17', '2', 'country2', '08002');

INSERT INTO videos 
VALUES ('1', 'video1', 'description1', '1000', 'file1', '60', 'url1', '20', '1', '1', '1', '2020-01-01 01-01-01', '1'),
('2', 'video2', 'description2', '2000', 'file2', '70', 'url2', '20', '1', '1', '1', '2020-01-01 01-01-02', '2'),
('3', 'video3', 'description3', '3000', 'file3', '80', 'url3', '30', '1', '1', '0', '2020-01-01 01-01-03', '3');

INSERT INTO video_likes (video_like_id, date_hour, video_id, user_id)
VALUES ('1', '2020-01-01 01-01-01', '1', '1'),
('2', '2020-01-01 01-01-02', '2', '2'),
('3', '2020-01-01 01-01-03', '3', '3');

INSERT INTO labels ()
VALUES ('1', 'name1', '1'),
('2', 'name2', '3');

INSERT INTO comments (comment_id, description, date_hour, user_id, video_id)
VALUES ('1', 'comment1', '2020-01-02 01-01-01', '1', '1'),
('2', 'comment2', '2020-01-03 01-01-01', '2', '2'),
('3', 'comment3', '2020-01-04 01-01-01', '3', '3');

INSERT INTO comment_likes (comment_like_id, date_hour, user_id, comment_id)
VALUES ('1', '2020-01-03 01-01-01', '3', '1'),
('2', '2020-01-05 01-01-01', '1', '3');

INSERT INTO channels (channel_id, name, description, date, user_id)
VALUES ('1', 'name1', 'description1', '2020-01-10', '1'),
('2', 'name2', 'description2', '2020-01-11', '2');

INSERT INTO channel_subscriptions (sub_id, user_id, channel_id)
VALUES ('1', '2', '1'),
('2', '3', '1');

INSERT INTO playlists (playlist_id, name, date, state, user_id)
VALUES ('1', 'name1', '2020-02-03', '1', '1'),
('2', 'name2', '2020-02-04', '2', '2');


-- How many comments an user have made?
SELECT COUNT(comment_id) AS '# OF COMMENTS FOR USER 1'
FROM comments
WHERE user_id = '1';

-- How many videos were uploaded on 2020
SELECT COUNT(video_id) AS 'NUMBER OF VIDEOS IN 2020'
FROM videos
WHERE date_hour
BETWEEN '2020-0101 00-00-00'
AND '2020-12-31 23-59-59';

SELECT * FROM users;

-- How many users have 26 AND 27 years old
SELECT COUNT(user_id)
FROM users
WHERE birthday
BETWEEN '1994-01-01'
AND '1994-12-31';

-- Which is the username for each video uploaded
SELECT videos.video_id, users.name 
FROM videos
INNER JOIN users
ON users.user_id = videos.user_id;
