const Joi = require('joi');

const createAccountSchema = Joi.object({
  name: Joi.string().min(1).max(20).required()
    .error(new Error('Le nom est requis et doit avoir entre 1 et 20 caractères')),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required()
    .error(new Error('La couleur est requise et doit être au format hexadécimal')),
  server: Joi.number().integer().min(1).required()
    .error(new Error('L\'identifiant du serveur doit être un nombre entier positif')),
});

const updateAccountSchema = Joi.object({
  name: Joi.string().min(1).max(20)
    .error(new Error('Le nom doit avoir entre 1 et 20 caractères')),
  color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .error(new Error('La couleur doit être au format hexadécimal')),
  server: Joi.number().integer().min(1)
    .error(new Error('L\'identifiant du serveur doit être un nombre entier positif')),
}).or('name', 'color', 'serverId');

const updateOrderAccountSchema = Joi.object().keys({
  order: Joi.array().items(
    Joi.object({
      accountId: Joi.number().integer().positive().required()
        .error(new Error('L\'identifiant de compte doit être un nombre entier positif')),
    }),
  ).min(1).required()
    .error(new Error('L\'ordre doit contenir au moins un élément')),
});

const updateModeAccountSchema = Joi.object().keys({
  accountsMode: Joi.array().items(
    Joi.object({
      accountId: Joi.number().integer().min(1).required()
        .error(new Error('L\'identifiant de compte doit être un nombre entier positif')),
      mode: Joi.string().valid('up', 'down').required()
        .error(new Error('Le mode doit être "up" ou "down"')),
    }),
  ).required()
    .error(new Error('Les modes de compte sont requis')),
});

module.exports = {
  createAccountSchema,
  updateAccountSchema,
  updateOrderAccountSchema,
  updateModeAccountSchema,
};
