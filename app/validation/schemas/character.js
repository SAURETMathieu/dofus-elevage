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
  'love',
  'endurance',
];

const createCharacterSchema = Joi.object({
  name: Joi.string().max(20).required(),
  type: Joi.string().max(10).valid('public', 'private').required(),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa').required(),
  speMale: Joi.string().valid('aucune', 'repro', 'camé').required(),
  speFemale: Joi.string().valid('aucune', 'repro', 'camé').required(),
  breedMale: Joi.number().integer().min(1).required(),
  breedFemale: Joi.number().integer().min(1).required(),
});

const updateCharacterSchema = Joi.object({
  name: Joi.string().max(20),
  type: Joi.string().max(10).valid('public', 'private'),
  nbrepro: Joi.number().integer().min(0).max(20),
  accountId: Joi.number().integer().min(1),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa'),
  speMale: Joi.string().valid('aucune', 'repro', 'camé'),
  speFemale: Joi.string().valid('aucune', 'repro', 'camé'),
  breedMale: Joi.number().integer().min(1),
  breedFemale: Joi.number().integer().min(1),
  date: Joi.date().timestamp(),
  dateBirth: Joi.date().timestamp(),
  nbMale: Joi.number().integer().min(0).max(200),
  nbFemale: Joi.number().integer().min(0).max(200),
}).or(...alternativeKeys);

const updateStepsCharacterSchema = Joi.object({
  mature: Joi.boolean(),
  feed: Joi.boolean(),
  ride: Joi.boolean(),
  agressive: Joi.boolean(),
  serene: Joi.boolean(),
  love: Joi.boolean(),
  endurance: Joi.boolean(),
}).or(...alternativeSteps);

module.exports = { updateCharacterSchema, createCharacterSchema, updateStepsCharacterSchema };
