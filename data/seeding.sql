-- Début du seeding
BEGIN;

-- Insertion des races
INSERT INTO "breed" ("name", "stade", "color", "image", "gestation")
VALUES 
    ('Amande', '1', 'amande', '/images/dindeamande.png', 2880),
    ('Dorée', '1', 'dorée', '/images/dindedoree.png', 2880),
    ('Rousse', '1', 'rousse', '/images/dinderousse.png', 2880),
    ('Amande-Rousse', '2', 'amande-rousse', '/images/dindeamanderousse.png', 3600),
    ('Amande-Dorée', '2', 'amande-doree', '/images/dindeamandedoree.png', 3600),
    ('Dorée-Rousse', '2', 'doree-rousse', '/images/dinderoussedoree.png', 3600);

COMMIT;
-- Fin du seeding

-- UPDATE "user" SET role='admin' WHERE id=1;

--UPDATE "breed" SET image='/images/dindedoree.png' WHERE "name"='Dorée';