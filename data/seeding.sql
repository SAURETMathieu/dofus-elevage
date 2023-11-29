-- Début du seeding
BEGIN;

-- Insertion des races
INSERT INTO "breed" ("name", "stade", "color", "image", "gestation")
VALUES 
    ('Amande', '1', 'amande', '/images/dd-amande.png', 2880),
    ('Dorée', '1', 'doree', '/images/dd-doree.png', 2880),
    ('Rousse', '1', 'rousse', '/images/dd-rousse.png', 2880),
    ('Amande-Rousse', '2', 'amande-rousse', '/images/dd-amande-rousse.png', 3600),
    ('Amande-Dorée', '2', 'amande-doree', '/images/dd-amande-doree.png', 3600),
    ('Dorée-Rousse', '2', 'doree-rousse', '/images/dd-doree-rousse.png', 3600),
    ('Indigo', '1', 'indigo', '/images/dd-indigo.png', 4320),
    ('Ebène', '1', 'ebene', '/images/dd-ebene.png', 4320),
    ('Pourpre', '1', 'pourpre', '/images/dd-pourpre.png', 5040),
    ('Orchidée', '1', 'orchidee', '/images/dd-orchidee.png', 5040);

COMMIT;
-- Fin du seeding

--UPDATE "user" SET role='admin' WHERE id=2;

--UPDATE "breed" SET image='/images/dindedoree.png' WHERE "name"='Dorée';