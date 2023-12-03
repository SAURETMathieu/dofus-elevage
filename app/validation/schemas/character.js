const Joi = require('joi');

const updateCharacterSchema = Joi.object({
    name: Joi.string().max(20),
    type:Joi.string().max(10).valid('public', 'private'),
    nbrepro: Joi.number().integer().min(0).max(20),
    accountId: Joi.number().integer().min(1),
    classe: Joi.string().valid('enu', 'cra', 'iop','sadi','sacri','feca','panda','eni','sram','xelor','eca','osa'),
    spemale:Joi.string().valid('aucune', 'repro', 'camé'), 
    spefemale:Joi.string().valid('aucune', 'repro', 'camé'), 
    breedmale: Joi.number().integer().min(1), 
    breedfemale: Joi.number().integer().min(1),
}).or('name', 'type','nbrepro','accountId','classe','spemale','spefemale','breedmale', 'breedfemale');

module.exports =  { updateCharacterSchema } ;