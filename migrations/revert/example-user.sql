-- Revert dofus:example-user from pg

BEGIN;

DELETE FROM "user" WHERE "email"='example@example.example';

COMMIT;
