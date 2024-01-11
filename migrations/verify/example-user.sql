-- Verify dofus:example-user on pg

BEGIN;

SELECT * FROM "user" WHERE "email"='example@example.example';

ROLLBACK;
