const Joi = require('joi');

const createUserSchema = Joi.object({
  lastname: Joi.string().max(30).required().trim()
    .pattern(/^[a-zA-ZÀ-ÿ'\s-]+$/),
  firstname: Joi.string().max(30).required().trim()
    .pattern(/^[a-zA-ZÀ-ÿ'\s-]+$/),
  email: Joi.string().email().max(50).required()
    .trim(),
  pseudo: Joi.string().max(20).required().trim()
    .pattern(/^[a-zA-ZÀ-ÿ0-9]+$/),
  password: Joi.string().min(8).required(),
  passwordconfirm: Joi.string().valid(Joi.ref('password')).min(8).required()
    .strict(),
});

const updateUserSchema = Joi.object({
  lastname: Joi.string().max(30).trim()
    .pattern(/^[a-zA-ZÀ-ÿ'\s-]+$/),
  firstname: Joi.string().max(30).trim()
    .pattern(/^[a-zA-ZÀ-ÿ'\s-]+$/),
  email: Joi.string().email().max(50)
    .trim()
    .error(new Error('Veuillez fournir une adresse e-mail valide')),
  pseudo: Joi.string().max(20).trim()
    .pattern(/^[a-zA-ZÀ-ÿ0-9]+$/),
  password: Joi.string().min(8),
  passwordconfirm: Joi.string().valid(Joi.ref('password')).min(8)
    .strict(),
}).or('lastname', 'firstname', 'email', 'pseudo', 'password', 'passwordconfirm');

const connectUserSchema = Joi.object({
  email: Joi.string().email().max(50).required()
    .trim(),
  password: Joi.string().required(),
  remember: Joi.string().allow(''),
});

module.exports = { createUserSchema, connectUserSchema, updateUserSchema };
