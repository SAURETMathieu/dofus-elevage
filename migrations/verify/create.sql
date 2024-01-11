-- Verify dofus:create on pg

BEGIN;

SELECT * FROM "user" WHERE false;

SELECT * FROM "account" WHERE false;

SELECT * FROM "character" WHERE false;

SELECT * FROM "server" WHERE false;

SELECT * FROM "breed" WHERE false;

SELECT * FROM "rotate" WHERE false;

ROLLBACK;
