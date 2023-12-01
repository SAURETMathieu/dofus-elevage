const Joi = require('joi');

const createUserSchema = Joi.object({
    lastname: Joi.string().max(30).required().trim().regex(/^[a-zA-Z]+$/),
    firstname: Joi.string().max(30).required().trim().regex(/^[a-zA-Z]+$/),
    email: Joi.string().email().max(50).required().trim().pattern(/^\S+$/),
    pseudo: Joi.string().max(20).required().trim().regex(/^[a-zA-Z]+$/),
    password: Joi.string().min(8).required(),
    passwordConfirm: Joi.string().valid(Joi.ref('password')).min(8).required().strict()
});



module.exports = createUserSchema;
