const Joi = require('joi');

const createSupportSchema = Joi.object({
  subject: Joi.string().required()
    .error(new Error('Le motif est requis')),
  message: Joi.string().required()
    .error(new Error('Le message est requis')),
});

module.exports = {
  createSupportSchema,
};
