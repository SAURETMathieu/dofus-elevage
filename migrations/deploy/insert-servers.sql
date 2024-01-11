-- Deploy dofus:insert-servers to pg

BEGIN;

INSERT INTO "server" ("name", "game", "img")
VALUES 
    ('Galgarion', 'dofus retro', '/serversImages/serverImage-1704986562071.jpeg'),
    ('Boune', 'dofus retro', '/serversImages/serverImage-1704986591089.jpeg'),
    ('Henual', 'dofus retro', '/serversImages/serverImage-1704986619022.jpeg'),
    ('Crail', 'dofus retro', '/serversImages/serverImage-1704986573970.jpeg');

COMMIT;
