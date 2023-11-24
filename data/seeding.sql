-- Début du seeding
BEGIN;

-- Insertion des races
INSERT INTO "breed" ("name", "stade", "color", "image", "gestation")
VALUES 
    ('Amande', '1', 'amande', '/images/dindeamande.png', 2880),
    ('Dorée', '2', 'dorée', '/images/.dindedoree.png', 2880),
    ('Rousse', '3', 'rousse', '/images/dinderousse.png', 2880);

COMMIT;
-- Fin du seeding