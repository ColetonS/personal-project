UPDATE imitations
SET completed_imitation_text = ${completed_imitation_text}
WHERE completed_imitation_id = ${completed_imitation_id};

SELECT e.excerpt_text, e.excerpt_author, e.excerpt_narrative, e.excerpt_image, i.completed_imitation_id, i.user_id, i.completed_imitation_text FROM imitations i
JOIN excerpts e ON i.excerpt_id = e.excerpt_id
WHERE i.user_id = ${user_id}
ORDER BY i.completed_imitation_id DESC;