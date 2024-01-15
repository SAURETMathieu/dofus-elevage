const Joi = require('joi');

const exceptionEmail = 'example@example.example';

const createUserSchema = Joi.object({
  lastname: Joi.string().max(30).required().trim()
    .pattern(/^[a-zA-ZÀ-ÿ'\s-]+$/)
    .error(new Error('Le nom est requis et ne doit contenir que des lettres, espaces, tirets ou apostrophes')),
  firstname: Joi.string().max(30).required().trim()
    .pattern(/^[a-zA-ZÀ-ÿ'\s-]+$/)
    .error(new Error('Le prénom est requis et ne doit contenir que des lettres, espaces, tirets ou apostrophes')),
  email: Joi.string().email().max(50).required()
    .trim()
    .error(new Error('Veuillez fournir une adresse e-mail valide')),
  pseudo: Joi.string().max(20).required().trim()
    .pattern(/^[a-zA-ZÀ-ÿ0-9]+$/)
    .error(new Error('Le pseudo est requis et ne doit contenir que des lettres et des chiffres')),
  password: Joi.string().min(8).required()
    .error(new Error('Le mot de passe est requis et doit comporter au moins 8 caractères')),
  passwordconfirm: Joi.string().valid(Joi.ref('password')).min(8).required()
    .strict()
    .error(new Error('Les mots de passe ne correspondent pas')),
});

const updateUserSchema = Joi.object({
  lastname: Joi.string().max(30).trim()
    .pattern(/^[a-zA-ZÀ-ÿ'\s-]+$/)
    .error(new Error('Le nom ne doit contenir que des lettres, espaces, tirets ou apostrophes')),
  firstname: Joi.string().max(30).trim()
    .pattern(/^[a-zA-ZÀ-ÿ'\s-]+$/)
    .error(new Error('Le prénom ne doit contenir que des lettres, espaces, tirets ou apostrophes')),
  email: Joi.string().email().max(50)
    .trim()
    .error(new Error('Veuillez fournir une adresse e-mail valide')),
  pseudo: Joi.string().max(20).trim()
    .pattern(/^[a-zA-ZÀ-ÿ0-9]+$/)
    .error(new Error('Le pseudo ne doit contenir que des lettres et des chiffres')),
  password: Joi.string().min(8)
    .error(new Error('Le mot de passe doit comporter au moins 8 caractères')),
  passwordconfirm: Joi.string().valid(Joi.ref('password')).min(8)
    .strict()
    .error(new Error('Les mots de passe ne correspondent pas')),
}).or('lastname', 'firstname', 'email', 'pseudo', 'password', 'passwordconfirm');

const connectUserSchema = Joi.object({
  email: Joi.string().email().max(50).required()
    .trim()
    .valid(exceptionEmail)
    .error(new Error('Veuillez fournir une adresse e-mail valide')),
  password: Joi.string().required()
    .error(new Error('Le mot de passe est requis')),
  remember: Joi.string().allow(''),
});

module.exports = { createUserSchema, connectUserSchema, updateUserSchema };
