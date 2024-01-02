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
    ('Indigo', '3', 'indigo', '/images/dd-indigo.png', 4320),
    ('Ebène', '3', 'ebene', '/images/dd-ebene.png', 4320),
    ('Ebène-Indigo', '4', 'ebene-indigo', '/images/dd-ebene-indigo.png', 5040),
    ('Pourpre', '5', 'pourpre', '/images/dd-pourpre.png', 5760),
    ('Orchidée', '5', 'orchidee', '/images/dd-orchidee.png', 5760),
    ('Ebène-Orchidée', '6', 'ebene-orchidee', '/images/dd-ebene-orchidee.png', 6480),
    ('Indigo-Pourpre', '6', 'indigo-pourpre', '/images/dd-indigo-pourpre.png', 6480),
    ('Orchidée-Pourpre', '6', 'orchidee-pourpre', '/images/dd-orchidee-pourpre.png', 6480),
    ('Turquoise', '7', 'turquoise', '/images/dd-turquoise.png', 7200),
    ('Ivoire', '7', 'ivoire', '/images/dd-ivoire.png', 7200),
    ('Orchidée-Turquoise', '8', 'orchidee-turquoise', '/images/dd-orchidee-turquoise.png', 7920),
    ('Ivoire-Turquoise', '8', 'ivoire-turquoise', '/images/dd-ivoire-turquoise.png', 7920),
    ('Ivoire-Pourpre', '8', 'ivoire-pourpre', '/images/dd-ivoire-pourpre.png', 7920),
    ('Prune', '9', 'prune', '/images/dd-prune.png', 8640),
    ('Emeraude', '9', 'emeraude', '/images/dd-emeraude.png', 8640),
    ('Emeraude-Amande', '10', 'emeraude-amande', '/images/dd-emeraude-amande.png', 9360),
    ('Emeraude-Rousse', '10', 'emeraude-rousse', '/images/dd-emeraude-rousse.png', 9360),
    ('Emeraude-Dorée', '10', 'emeraude-doree', '/images/dd-emeraude-doree.png', 9360),
    ('Emeraude-Ebène', '10', 'emeraude-ebene', '/images/dd-emeraude-ebene.png', 9360),
    ('Emeraude-Indigo', '10', 'emeraude-indigo', '/images/dd-emeraude-indigo.png', 9360),
    ('Emeraude-Pourpre', '10', 'emeraude-pourpre', '/images/dd-emeraude-pourpre.png', 9360),
    ('Emeraude-Orchidée', '10', 'emeraude-orchidee', '/images/dd-emeraude-orchidee.png', 9360),
    ('Emeraude-Turquoise', '10', 'emeraude-turquoise', '/images/dd-emeraude-turquoise.png', 9360),
    ('Emeraude-Ivoire', '10', 'emeraude-ivoire', '/images/dd-emeraude-ivoire.png', 9360),
    ('Emeraude-Prune', '10', 'emeraude-prune', '/images/dd-prune-emeraude.png', 9360),
    ('Prune-Amande', '10', 'prune-amande', '/images/dd-prune-amande.png', 9360),
    ('Prune-Rousse', '10', 'prune-rousse', '/images/dd-prune-rousse.png', 9360),
    ('Prune-Dorée', '10', 'prune-doree', '/images/dd-prune-doree.png', 9360),
    ('Prune-Ebène', '10', 'prune-ebene', '/images/dd-prune-ebene.png', 9360),
    ('Prune-Indigo', '10', 'prune-indigo', '/images/dd-prune-indigo.png', 9360),
    ('Prune-Pourpre', '10', 'prune-pourpre', '/images/dd-prune-pourpre.png', 9360),
    ('Prune-Orchidée', '10', 'prune-orchidee', '/images/dd-prune-orchidee.png', 9360),
    ('Prune-Turquoise', '10', 'prune-turquoise', '/images/dd-prune-turquoise.png', 9360),
    ('Prune-Ivoire', '10', 'prune-ivoire', '/images/dd-prune-ivoire.png', 9360);

COMMIT;
-- Fin du seeding

--UPDATE "user" SET role='admin' WHERE email='example@example.example';

--UPDATE "breed" SET image='/images/dindedoree.png' WHERE "name"='Dorée';