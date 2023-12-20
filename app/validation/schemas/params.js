const Joi = require('joi');

const paramIdSchema = Joi.object({
  id: Joi.number()
    .integer()
    .min(1)
    .required(),
});

const paramAccountIdSchema = Joi.object({
  accountId: Joi.number()
    .integer()
    .min(1)
    .required(),
});

const paramIdAndAccountIdSchema = Joi.object({
  id: Joi.number()
    .integer()
    .min(1)
    .required(),
  accountId: Joi.number()
    .integer()
    .min(1)
    .required(),
});

module.exports = { paramIdSchema, paramAccountIdSchema, paramIdAndAccountIdSchema };
