const Joi = require('joi');

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
];

const createRotateSchema = Joi.object({
  name: Joi.string().min(1).max(20).required()
    .error(new Error('Le nom est requis et doit avoir entre 1 et 20 caractères')),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required()
    .error(new Error('La couleur est requise et doit être au format hexadécimal')),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa').required()
    .error(new Error('La classe est requise et doit être une classe valide')),
});

const updateRotateSchema = Joi.object({
  name: Joi.string().min(1).max(20)
    .error(new Error('Le nom doit avoir entre 1 et 20 caractères')),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .error(new Error('La couleur doit être au format hexadécimal')),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa')
    .error(new Error('La classe doit être une classe valide')),
  time: Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .error(new Error('Le temps doit être au format HH:MM:SS')),
}).or('name', 'color', 'serverId', 'classe', 'time');

const updateOrderRotateSchema = Joi.object().keys({
  order: Joi.array().items(
    Joi.object({
      rotateId: Joi.number().integer().positive().required()
        .error(new Error('L\'identifiant de rotation doit être un nombre entier positif')),
    }),
  ).min(1).required()
    .error(new Error('L\'ordre doit contenir au moins un élément')),
});

const updateModeRotateSchema = Joi.object().keys({
  rotatesMode: Joi.array().items(
    Joi.object({
      rotateId: Joi.number().integer().min(1).required()
        .error(new Error('L\'identifiant de rotation doit être un nombre entier positif')),
      mode: Joi.string().valid('up', 'down').required()
        .error(new Error('Le mode doit être "up" ou "down"')),
    }),
  ).required()
    .error(new Error('Les modes de rotation sont requis')),
});

const updateStepsRotateSchema = Joi.object({
  mature: Joi.boolean(),
  feed: Joi.boolean(),
  ride: Joi.boolean(),
  agressive: Joi.boolean(),
  serene: Joi.boolean(),
  lovef: Joi.boolean(),
  endurancef: Joi.boolean(),
  lovem: Joi.boolean(),
  endurancem: Joi.boolean(),
}).or(...alternativeSteps);

module.exports = {
  createRotateSchema,
  updateRotateSchema,
  updateOrderRotateSchema,
  updateModeRotateSchema,
  updateStepsRotateSchema,
};
