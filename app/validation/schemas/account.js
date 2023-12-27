const Joi = require('joi');

const createAccountSchema = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required(),
  server: Joi.number().integer().min(1).required(),
});

const updateAccountSchema = Joi.object({
  name: Joi.string().min(1).max(20),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  server: Joi.number().integer().min(1),
}).or('name', 'color', 'serverId');

const updateOrderAccountSchema = Joi.object().keys({
  accountsOrder: Joi.array().items(
    Joi.object({
      accountId: Joi.number().integer().positive().required(),
    }),
  ).min(1).required(),
});

module.exports = { createAccountSchema, updateAccountSchema, updateOrderAccountSchema };
