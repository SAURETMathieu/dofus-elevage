const Joi = require('joi');

const createRotateSchema = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required(),
  server: Joi.number().integer().min(1).required(),
});

const updateRotateSchema = Joi.object({
  name: Joi.string().min(1).max(20),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  server: Joi.number().integer().min(1),
}).or('name', 'color', 'serverId');

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
