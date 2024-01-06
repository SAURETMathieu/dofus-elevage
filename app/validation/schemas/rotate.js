const Joi = require('joi');

const createRotateSchema = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required(),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa').required(),
  server: Joi.number().integer().min(1).required(),
});

const updateRotateSchema = Joi.object({
  name: Joi.string().min(1).max(20),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  classe: Joi.string().valid('enu', 'cra', 'iop', 'sadi', 'sacri', 'feca', 'panda', 'eni', 'sram', 'xelor', 'eca', 'osa'),
  server: Joi.number().integer().min(1),
  time: Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/),
}).or('name', 'color', 'serverId', 'classe', 'time');

const updateOrderRotateSchema = Joi.object().keys({
  rotationsOrder: Joi.array().items(
    Joi.object({
      rotationId: Joi.number().integer().positive().required(),
    }),
  ).min(1).required(),
});

const updateModeRotateSchema = Joi.object().keys({
  rotationsMode: Joi.array().items(
    Joi.object({
      rotationId: Joi.number().integer().min(1).required(),
      mode: Joi.string().valid('up', 'down').required(),
    }),
  ).required(),
});

module.exports = {
  createRotateSchema,
  updateRotateSchema,
  updateOrderRotateSchema,
  updateModeRotateSchema,
};
