-- Deploy dofus:example-data to pg

BEGIN;
INSERT INTO "account" ("name", "color", "server_id", "user_id")
VALUES 
    ('Koalak', '#5391c1', (SELECT id FROM "server" WHERE "name" = 'Henual'), (SELECT id FROM "user" WHERE "email" = 'example@example.example')),
    ('Bonta', '#2f1a99', (SELECT id FROM "server" WHERE "name" = 'Henual'), (SELECT id FROM "user" WHERE "email" = 'example@example.example')),
    ('Grobe', '#d4bfbf', (SELECT id FROM "server" WHERE "name" = 'Galgarion'), (SELECT id FROM "user" WHERE "email" = 'example@example.example')),
    ('Brakmar', '#da1010', (SELECT id FROM "server" WHERE "name" = 'Galgarion'), (SELECT id FROM "user" WHERE "email" = 'example@example.example')),
    ('Astrub', '#e3e3e3', (SELECT id FROM "server" WHERE "name" = 'Boune'), (SELECT id FROM "user" WHERE "email" = 'example@example.example')),
    ('Otomai', '#abd20f', (SELECT id FROM "server" WHERE "name" = 'Boune'), (SELECT id FROM "user" WHERE "email" = 'example@example.example')),
    ('Sidimote', '#0fbd2c', (SELECT id FROM "server" WHERE "name" = 'Crail'), (SELECT id FROM "user" WHERE "email" = 'example@example.example')),
    ('Amakna', '#7e4a02', (SELECT id FROM "server" WHERE "name" = 'Crail'), (SELECT id FROM "user" WHERE "email" = 'example@example.example'));

COMMIT;
