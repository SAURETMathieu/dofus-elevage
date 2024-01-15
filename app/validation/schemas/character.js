const Joi = require('joi');

const alternativeKeys = [
  'name',
  'type',
  'nbrepro',
  'accountId',
  'classe',
  'speMale',
  'speFemale',
  'breedMale',
  'breedFemale',
  'date',
  'dateBirth',
  'nbMale',
  'nbFemale',
];

const alternativeSteps = [
  'mature',
  'feed',
  'ride',
  'agressive',
  'serene',
  'lovem',
  'endurancem',
  'lovef',
  'endurancef',
  'rotateId',
];

const createCharacterSchema = Joi.object({
  name: Joi.string().max(20).required()
    .error(new Error('Le nom est requis et doit contenir au plus 20 caractères')),
  type: Joi.string().max(10).valid('public', 'private').required()
    .error(new Error('Le type doit être "public" ou "private"')),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa').required()
    .error(new Error('La classe doit être une classe valide')),
  speMale: Joi.string().valid('aucune', 'repro', 'camé').required()
    .error(new Error('La spécialité mâle doit être "aucune", "repro" ou "camé"')),
  speFemale: Joi.string().valid('aucune', 'repro', 'camé').required()
    .error(new Error('La spécialité femelle doit être "aucune", "repro" ou "camé"')),
  breedMale: Joi.number().integer().min(1).required()
    .error(new Error('L\'identifiant de race mâle doit être un nombre entier positif')),
  breedFemale: Joi.number().integer().min(1).required()
    .error(new Error('L\'identifiant de race femelle doit être un nombre entier positif')),
});

const updateCharacterSchema = Joi.object({
  name: Joi.string().max(20)
    .error(new Error('Le nom doit contenir au plus 20 caractères')),
  type: Joi.string().max(10).valid('public', 'private')
    .error(new Error('Le type doit être "public" ou "private"')),
  nbrepro: Joi.number().integer().min(0).max(20)
    .error(new Error('Le nombre de reproductions doit être compris entre 0 et 20')),
  accountId: Joi.number().integer().min(1)
    .error(new Error('L\'identifiant de compte doit être un nombre entier positif')),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa')
    .error(new Error('La classe doit être une classe valide')),
  speMale: Joi.string().valid('aucune', 'repro', 'camé')
    .error(new Error('La spécialité mâle doit être "aucune", "repro" ou "camé"')),
  speFemale: Joi.string().valid('aucune', 'repro', 'camé')
    .error(new Error('La spécialité femelle doit être "aucune", "repro" ou "camé"')),
  breedMale: Joi.number().integer().min(1)
    .error(new Error('L\'identifiant de race mâle doit être un nombre entier positif')),
  breedFemale: Joi.number().integer().min(1)
    .error(new Error('L\'identifiant de race femelle doit être un nombre entier positif')),
  date: Joi.date().timestamp(),
  dateBirth: Joi.date().timestamp(),
  nbMale: Joi.number().integer().min(0).max(125),
  nbFemale: Joi.number().integer().min(0).max(125),
}).or(...alternativeKeys);

const updateStepsCharacterSchema = Joi.object({
  mature: Joi.boolean(),
  feed: Joi.boolean(),
  ride: Joi.boolean(),
  agressive: Joi.boolean(),
  serene: Joi.boolean(),
  lovef: Joi.boolean(),
  endurancef: Joi.boolean(),
  lovem: Joi.boolean(),
  endurancem: Joi.boolean(),
  rotateId: Joi.number().integer().min(1).allow(null)
    .error(new Error('L\'identifiant de rotation doit être un nombre entier positif ou null')),
}).or(...alternativeSteps);

const updateOrderCharacterSchema = Joi.object().keys({
  order: Joi.array().items(
    Joi.object({
      characterId: Joi.number().integer().positive().required()
        .error(new Error('L\'identifiant de personnage doit être un nombre entier positif')),
    }),
  ).min(1).required()
    .error(new Error('L\'ordre doit contenir au moins un élément')),
});

const updateModeCharacterSchema = Joi.object().keys({
  charactersMode: Joi.array().items(
    Joi.object({
      characterId: Joi.number().integer().min(1).required()
        .error(new Error('L\'identifiant de personnage doit être un nombre entier positif')),
      mode: Joi.string().valid('opened', 'closed').required()
        .error(new Error('Le mode doit être "opened" ou "closed"')),
    }),
  ).required()
    .error(new Error('Les modes de personnage sont requis')),
});

module.exports = {
  updateCharacterSchema,
  createCharacterSchema,
  updateStepsCharacterSchema,
  updateOrderCharacterSchema,
  updateModeCharacterSchema,
};
