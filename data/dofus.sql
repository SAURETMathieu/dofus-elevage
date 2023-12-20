BEGIN;

DROP TABLE IF EXISTS "user", "account", "character","server","breed";

-- Table User
CREATE TABLE "user" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "lastname" VARCHAR(30) NOT NULL,
    "firstname" VARCHAR(30) NOT NULL,
    "email" VARCHAR(50) NOT NULL UNIQUE,
    "pseudo" VARCHAR(20) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(50) NOT NULL DEFAULT 'member',
    "image" VARCHAR(255) DEFAULT null,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table Server
CREATE TABLE "server" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(20) NOT NULL UNIQUE,
    "game" VARCHAR(20) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table Breed
CREATE TABLE "breed" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL UNIQUE,
    "stade" VARCHAR(10) NOT NULL,
    "color" VARCHAR(30) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "gestation" INT NOT NULL DEFAULT 2880,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table Account
CREATE TABLE "account" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(20) NOT NULL,
    "color" VARCHAR(9) NOT NULL,
    "order" INT NOT NULL DEFAULT 0,
    "server_id" INT REFERENCES "server"("id"),
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table Character
CREATE TABLE "character" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(20) NOT NULL,
    "class" VARCHAR(20) NOT NULL,
    "breed_male" INT NOT NULL REFERENCES "breed"("id"),
    "breed_female" INT NOT NULL REFERENCES "breed"("id"),
    "account_id" INT REFERENCES "account"("id") ON DELETE CASCADE,
    "nb_male" INT DEFAULT 0,
    "nb_female" INT DEFAULT 0,
    "status" VARCHAR(20) DEFAULT '',
    "spe_male" VARCHAR(10) DEFAULT 'aucune',
    "spe_female" VARCHAR(10) DEFAULT null,
    "nb_reproduction" INT DEFAULT 0,
    "date_reproduction" TIMESTAMPTZ DEFAULT NULL,
    "date_birth" TIMESTAMPTZ DEFAULT NULL,
    "order" INT NOT NULL DEFAULT 0,
    "type" VARCHAR(10) DEFAULT 'private',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;