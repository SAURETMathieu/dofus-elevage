-- Deploy dofus:example-user to pg

BEGIN;

INSERT INTO "user" ("lastname", "firstname", "email", "pseudo", "password", "role") 
VALUES ('example', 'example', 'example@example.example', 'example', '$2b$10$w7NG1bfKDW8RXo2/ZTdgDetcKwXqocr0W4TZwXpe.ASZ3J3Q3Un6q', 'admin');

COMMIT;
