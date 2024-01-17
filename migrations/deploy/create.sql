-- Deploy dofus:create to pg

BEGIN;

DROP TABLE IF EXISTS "user", "account", "character","server","breed","rotate";

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
    "mode" TEXT NOT NULL DEFAULT 'up',
    "server_id" INT REFERENCES "server"("id") ON DELETE CASCADE,
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- Table Rotate
CREATE TABLE "rotate" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(20) NOT NULL,
    "color" VARCHAR(9) NOT NULL,
    "class" VARCHAR(20) NOT NULL,
    "order" INT NOT NULL DEFAULT 0,
    "mode" TEXT NOT NULL DEFAULT 'down',
    "mature" BOOLEAN DEFAULT FALSE,
    "ride" BOOLEAN DEFAULT FALSE,
    "feed" BOOLEAN DEFAULT FALSE,
    "serene" BOOLEAN DEFAULT FALSE,
    "agressive" BOOLEAN DEFAULT FALSE,
    "lovem" BOOLEAN DEFAULT FALSE,
    "endurancem" BOOLEAN DEFAULT FALSE,
    "lovef" BOOLEAN DEFAULT FALSE,
    "endurancef" BOOLEAN DEFAULT FALSE,
    "time" TIME DEFAULT NULL,
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

-- should refactor the redundancy in the 'character' and 'rotate' tables 
-- but the cardinalities are (1,1)

-- Table Character
CREATE TABLE "character" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(20) NOT NULL,
    "class" VARCHAR(20) NOT NULL,
    "breed_male" INT NOT NULL REFERENCES "breed"("id"),
    "breed_female" INT NOT NULL REFERENCES "breed"("id"),
    "account_id" INT REFERENCES "account"("id") ON DELETE CASCADE,
    "rotate_id" INT DEFAULT NULL REFERENCES "rotate"("id"),
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
    "mature" BOOLEAN DEFAULT FALSE,
    "ride" BOOLEAN DEFAULT FALSE,
    "feed" BOOLEAN DEFAULT FALSE,
    "serene" BOOLEAN DEFAULT FALSE,
    "agressive" BOOLEAN DEFAULT FALSE,
    "lovem" BOOLEAN DEFAULT FALSE,
    "endurancem" BOOLEAN DEFAULT FALSE,
    "lovef" BOOLEAN DEFAULT FALSE,
    "endurancef" BOOLEAN DEFAULT FALSE,
    "mode" TEXT NOT NULL DEFAULT 'opened',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;
