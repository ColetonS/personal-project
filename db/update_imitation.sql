UPDATE imitations
SET completed_imitation_text = ${completed_imitation_text}
WHERE completed_imitation_id = ${completed_imitation_id};

SELECT * FROM imitations
WHERE completed_imitation_id = ${completed_imitation_id};