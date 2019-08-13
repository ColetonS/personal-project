INSERT INTO writers (username, password)
VALUES (${username}, ${password});

SELECT * FROM writers
WHERE username = ${username};