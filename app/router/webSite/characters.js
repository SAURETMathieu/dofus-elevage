const express = require('express');

const characterController = require('../../controllers/characterController.js');
const modeController = require('../../controllers/modeController.js');
const { isConnected } = require('../../middlewares/authorization.js');
const {
  updateStepsCharacterSchema,
  updateCharacterSchema,
  createCharacterSchema,
  updateOrderCharacterSchema,
  updateModeCharacterSchema,
} = require('../../validation/schemas/character.js');
const { paramIdSchema, paramIdAndAccountIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');
const orderController = require('../../controllers/orderController.js');

const router = new express.Router();

router.patch(
  '/mode',
  isConnected,
  validate(updateModeCharacterSchema),
  modeController.updateCharacterMode,
);

router.patch(
  '/rotate/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateStepsCharacterSchema),
  characterController.updateRotateCharacter,
);

router.patch(
  '/steps/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateStepsCharacterSchema),
  characterController.updateStepsCharacter,
);

router.patch(
  '/order/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateOrderCharacterSchema),
  orderController.updateCharacterOrder,
);

router.post(
  '/:id/:accountId',
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
  characterController.getAllCharactersPage,
);

module.exports = router;
