CREATE TABLE writers (
user_id SERIAL PRIMARY KEY,
username VARCHAR(50),
password VARCHAR,
user_image VARCHAR
); 

INSERT INTO writers (username, password, user_image)
VALUES ('Kurt Vonnegut', 'sl5', 'https://images.gr-assets.com/authors/1433582280p5/2778055.jpg'),
       ('Flannery O''Connor', 'good man', 'https://images.gr-assets.com/authors/1469878767p5/22694.jpg'),
       ('David Foster Wallace', 'ij', 'https://media.npr.org/assets/img/2011/04/20/david-foster-wallace-2d7939a867950051042d8032609ff97d55b73b19-s800-c85.jpg');

SELECT * FROM writers;
------------------------------------------------------------------------------------------------------------------------
CREATE TABLE excerpts (
excerpt_id SERIAL PRIMARY KEY,
excerpt_text TEXT,
excerpt_author VARCHAR(150),
excerpt_narrative VARCHAR(150)
);

INSERT INTO excerpts (excerpt_text, excerpt_author, excerpt_narrative, excerpt_image)
VALUES ('It was a big, squarish frame house that had once been white, decorated with cupolas and spires and scrolled balconies in the heavily lightsome style of the seventies, set on what had once been our most select street. But garages and cotton gins had encroached and obliterated even the august names of that neighborhood; only Miss Emily''s house was left, lifting its stubborn and coquettish decay above the cotton wagons and the gasoline pumps—an eyesore among eyesores. And now Miss Emily had gone to join the representatives of those august names where they lay in the cedar-bemused cemetery among the ranked and anonymous graves of Union and Confederate soldiers who fell at the battle of Jefferson.', 'William Faulkner', '"A Rose for Emily"'),
       ('This blind man, an old friend of my wife''s, he was on his way to spend the night. His wife had died. So he was visiting the dead wife''s relatives in Connecticut. He called my wife from his in-law''s. Arrangements were made. He would come by train, a five-hour trip, and my wife would meet him at the station. She hadn’t seen him since she worked for him one summer in Seattle ten years ago. But she and the blind man had kept in touch. They made tapes and mailed them back and forth. I wasn’t enthusiastic about his visit. He was no one I knew. And his being blind bothered me. My idea of blindness came from the movies. In the movies, the blind moved slowly and never laughed. Sometimes they were led by seeingeye dogs. A blind man in my house was not something I looked forward to.', 'Raymond Carver', '"Cathedral"'),
       ('She was a big-headed loud-voiced dwarf, with a mascot''s sexless swagger, a red velvet tam, a twisted neck that forced her to hold her head on one side, always looking up and sidways. She wore little polished high-heeled shoes, real lady''s shoes. Rose watched her shoes, being scared of the rest of her, of her laugh and her neck. She knew from Flo that Becky Tyde had been sick with polio as a child, that was why her neck was twisted and why she had not grown any taller. It was hard to believe that she had started out differently, that she had ever been normal.', 'Alice Munro', '"Royal Beatings"'),
       ('Not all the people living at Beverly Home were old and helpless. Some were young but paralyzed. Some weren’t past middle age but were already demented. Others were fine, except that they couldn’t be allowed out on the street with their impossible deformities. They made God look like a senseless maniac. One man had a congenital bone ailment that had turned him into a seven-foot-tall monster. His name was Robert. Each day Robert dressed himself in a fine suit, or a blazer-and-trousers combination. His hands were eighteen inches long. His head was like a fifty-pound Brazil nut with a face. You and I don’t know about these diseases until we get them, in which case we also will be put out of sight.', 'Denis Johnson', '"Beverly Home"'),
       ('I sat up on the bed, in senseless and perfect silence, as if Madden was already peering at me. Something—perhaps merely a desire to prove my total penury to myself—made me empty out my pockets. I found just what I knew I was going to find. The American watch, the nickel-plated chain and the square coin, the key ring with the useless but compromising keys to Runeberg''s office, the notebook, a letter which I decided to destroy at once (and which I did not destroy), a five shilling piece, two single shillings and some pennies, a red and blue pencil, a handkerchief—and a revolver with a single bullet. Absurdly I held it and weighed it in my hand, to give myself courage. Vaguely I thought that a pistol shot can be heard for a great distance. ', 'Jorge Luis Borges', '"The Garden of Forking Paths"');
      
SELECT * FROM excerpts;