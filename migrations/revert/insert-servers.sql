-- Revert dofus:insert-servers from pg

BEGIN;

DELETE FROM "server" WHERE "name" IN 
('Galgarion', 'Boune', 'Henual', 'Crail');

COMMIT;
