CREATE TABLE writers (
user_id SERIAL PRIMARY KEY,
username VARCHAR(50),
password VARCHAR,
user_image VARCHAR
); 

SELECT * FROM writers;

INSERT INTO writers (username, password, user_image)
VALUES ('Kurt Vonnegut', 'sl5', 'https://images.gr-assets.com/authors/1433582280p5/2778055.jpg'),
       ('Flannery O''Connor', 'good man', 'https://images.gr-assets.com/authors/1469878767p5/22694.jpg'),
       ('David Foster Wallace', 'ij', 'https://media.npr.org/assets/img/2011/04/20/david-foster-wallace-2d7939a867950051042d8032609ff97d55b73b19-s800-c85.jpg');

SELECT * FROM writers;