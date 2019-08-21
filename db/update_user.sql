UPDATE writers
SET user_image = ${user_image}, username = ${username}
WHERE user_id = ${user_id}
RETURNING *;