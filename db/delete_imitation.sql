DELETE FROM imitations
WHERE completed_imitation_id = $1;

SELECT e.excerpt_text, e.excerpt_author, e.excerpt_narrative, e.excerpt_image, i.completed_imitation_id, i.user_id, i.completed_imitation_text FROM imitations i
JOIN excerpts e ON i.excerpt_id = e.excerpt_id
WHERE i.user_id = $2
ORDER BY i.completed_imitation_id DESC;