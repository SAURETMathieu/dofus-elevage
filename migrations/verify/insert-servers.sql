-- Verify dofus:insert-servers on pg

BEGIN;

SELECT COUNT(*) FROM "server" WHERE "name" IN ('Galgarion', 'Boune', 'Henual', 'Crail');

ROLLBACK;
