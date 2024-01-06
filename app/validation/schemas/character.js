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
  rotateId: Joi.number().integer().min(1).allow(null),
}).or(...alternativeSteps);

const updateOrderCharacterSchema = Joi.object().keys({
  charactersOrder: Joi.array().items(
    Joi.object({
      characterId: Joi.number().integer().positive().required(),
    }),
  ).min(1).required(),
});

const updateModeCharacterSchema = Joi.object().keys({
  charactersMode: Joi.array().items(
    Joi.object({
      characterId: Joi.number().integer().min(1).required(),
      mode: Joi.string().valid('opened', 'closed').required(),
    }),
  ).required(),
});

module.exports = {
  updateCharacterSchema,
  createCharacterSchema,
  updateStepsCharacterSchema,
  updateOrderCharacterSchema,
  updateModeCharacterSchema,
};
