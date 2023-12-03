const Joi = require('joi');

const createAccountSchema = Joi.object({
    name: Joi.string().max(20).required(),
    color: Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required(),
    server: Joi.number().integer().min(1).required()
});

module.exports =  createAccountSchema ;