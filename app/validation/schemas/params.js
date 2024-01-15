const Joi = require('joi');

const paramIdSchema = Joi.object({
  id: Joi.number()
    .integer()
    .min(1)
    .required()
    .error(new Error('L\'identifiant doit être un nombre entier positif')),
});

const paramAccountIdSchema = Joi.object({
  accountId: Joi.number()
    .integer()
    .min(1)
    .required()
    .error(new Error('L\'identifiant de compte doit être un nombre entier positif')),
});

const paramIdAndAccountIdSchema = Joi.object({
  id: Joi.number()
    .integer()
    .min(1)
    .required()
    .error(new Error('L\'identifiant doit être un nombre entier positif')),
  accountId: Joi.number()
    .integer()
    .min(1)
    .required()
    .error(new Error('L\'identifiant de compte doit être un nombre entier positif')),
});

module.exports = { paramIdSchema, paramAccountIdSchema, paramIdAndAccountIdSchema };
