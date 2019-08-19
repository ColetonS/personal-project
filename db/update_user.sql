UPDATE writers
SET user_image = ${user_image}
WHERE user_id = ${user_id}
RETURNING *;