const express = require('express');

const characterController = require('../../controllers/characterController.js');
const { isConnected } = require('../../middlewares/authorization.js');
const { updateCharacterSchema, createCharacterSchema } = require('../../validation/schemas/character.js');
const { paramIdSchema, paramIdAndAccountIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');

const router = new express.Router();

router.post(
  '/:id/:accountId',
  isConnected,
  validate(paramIdAndAccountIdSchema, 'params'),
  validate(createCharacterSchema),
  characterController.addCharacter,
);

router.delete(
  '/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  characterController.deleteCharacter,
);

router.patch(
  '/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateCharacterSchema),
  characterController.updateCharacter,
);

router.get(
  '/',
  isConnected,
  characterController.getAllCharactersPage,
);

module.exports = router;
