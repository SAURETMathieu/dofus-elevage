BEGIN;

DROP TABLE IF EXISTS "user", "account", "character","server","breed";

-- Table User
CREATE TABLE "user" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "lastname" VARCHAR(255) NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "pseudo" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(50) NOT NULL DEFAULT 'member',
    "image" VARCHAR(255) DEFAULT null,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table Server
CREATE TABLE "server" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL UNIQUE,
    "game" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table Breed
CREATE TABLE "breed" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL UNIQUE,
    "stade" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "gestation" INT NOT NULL DEFAULT 2880,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table Account
CREATE TABLE "account" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "color" VARCHAR(50) NOT NULL,
    "server_id" INT REFERENCES "server"("id"),
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table Character
CREATE TABLE "character" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "breed_male" INT NOT NULL REFERENCES "breed"("id"),
    "breed_female" INT NOT NULL REFERENCES "breed"("id"),
    "account_id" INT REFERENCES "account"("id"),
    "nb_male" INT DEFAULT 0,
    "nb_female" INT DEFAULT 0,
    "status" VARCHAR(50) DEFAULT null,
    "spe_male" VARCHAR(255) DEFAULT null,
    "spe_female" VARCHAR(255) DEFAULT null,
    "nb_reproduction" INT DEFAULT 0,
    "date_reproduction" DATE DEFAULT null,
    "type" VARCHAR(50) DEFAULT null,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;