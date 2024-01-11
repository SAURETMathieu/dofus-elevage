-- Revert dofus:example-data from pg

BEGIN;

DELETE FROM "account" WHERE "user_id" IN 
(SELECT id FROM "user" WHERE "email" = 'example@example.example') CASCADE;


COMMIT;
