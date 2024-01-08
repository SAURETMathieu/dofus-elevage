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
  name: Joi.string().min(1).max(20).required(),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required(),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa').required(),
});

const updateRotateSchema = Joi.object({
  name: Joi.string().min(1).max(20),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa'),
  time: Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/),
}).or('name', 'color', 'serverId', 'classe', 'time');

const updateOrderRotateSchema = Joi.object().keys({
  order: Joi.array().items(
    Joi.object({
      rotateId: Joi.number().integer().positive().required(),
    }),
  ).min(1).required(),
});

const updateModeRotateSchema = Joi.object().keys({
  rotatesMode: Joi.array().items(
    Joi.object({
      rotateId: Joi.number().integer().min(1).required(),
      mode: Joi.string().valid('up', 'down').required(),
    }),
  ).required(),
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
