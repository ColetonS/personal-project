INSERT INTO imitations (completed_imitation_text, user_id, excerpt_id)
VALUES (${completed_imitation_text}, ${user_id}, ${excerpt_id})
RETURNING *;