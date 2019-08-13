INSERT INTO writers (username, password)
VALUES (${username}, ${password})
RETURNING *;