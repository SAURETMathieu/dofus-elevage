const express = require('express');

const characterController = require('../../controllers/characterController.js');
const { isConnected } = require('../../middlewares/authorization.js');
const {
  updateStepsCharacterSchema,
  updateCharacterSchema,
  createCharacterSchema,
  updateOrderCharacterSchema,
} = require('../../validation/schemas/character.js');
const { paramIdSchema, paramIdAndAccountIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');
const orderController = require('../../controllers/orderController.js');

const router = new express.Router();

router.patch(
  '/order/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateOrderCharacterSchema),
  orderController.updateCharacterOrder,
);

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

router.patch(
  '/steps/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateStepsCharacterSchema),
  characterController.updateStepsCharacter,
);

router.get(
  '/',
  isConnected,
  characterController.getAllCharactersPage,
);

module.exports = router;
