-- Revert dofus:seeding-breed from pg

BEGIN;

DELETE FROM "breed" WHERE "name" IN ('Amande', 'Dorée', 'Rousse', 'Amande-Rousse', 'Amande-Dorée', 'Dorée-Rousse', 'Indigo', 'Ebène', 'Ebène-Indigo', 'Amande-Ebène', 'Amande-Indigo', 'Indigo-Rousse', 'Ebène-Rousse', 'Dorée-Indigo', 'Dorée-Ebène', 'Pourpre', 'Orchidée', 'Ebène-Orchidée', 'Amande-Orchidée', 'Dorée-Orchidée', 'Indigo-Orchidée', 'Orchidée-Rousse', 'Orchidée-Pourpre', 'Amande-Pourpre', 'Dorée-Pourpre', 'Indigo-Pourpre', 'Pourpre-Rousse', 'Ebène-Pourpre', 'Turquoise', 'Ivoire', 'Orchidée-Turquoise', 'Ivoire-Turquoise', 'Ivoire-Pourpre', 'Amande-Turquoise', 'Dorée-Turquoise', 'Turquoise-Rousse', 'Indigo-Turquoise', 'Ebène-Turquoise', 'Pourpre-Turquoise', 'Amande-Ivoire', 'Dorée-Ivoire', 'Ivoire-Rousse', 'Indigo-Ivoire', 'Ebène-Ivoire', 'Ivoire-Orchidée', 'Prune', 'Emeraude', 'Emeraude-Rousse', 'Emeraude-Amande', 'Emeraude-Dorée', 'Emeraude-Ebène', 'Emeraude-Indigo', 'Emeraude-Pourpre', 'Emeraude-Orchidée', 'Emeraude-Turquoise', 'Emeraude-Ivoire', 'Emeraude-Prune', 'Prune-Amande', 'Prune-Rousse', 'Prune-Dorée', 'Prune-Ebène', 'Prune-Indigo', 'Prune-Pourpre', 'Prune-Orchidée', 'Prune-Turquoise', 'Prune-Ivoire');

COMMIT;
