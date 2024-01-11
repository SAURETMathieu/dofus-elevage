-- Verify dofus:example-data on pg

BEGIN;

SELECT COUNT(*) FROM "account" WHERE "user_id" IN (SELECT id FROM "user" WHERE "email" = 'example@example.example');


ROLLBACK;
