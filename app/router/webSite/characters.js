const express = require('express');

const orderController = require('../../controllers/orderController.js');
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
const controllerWrapper = require('../../helpers/controller.wrapper.js');

const router = new express.Router();

router.patch(
  '/mode',
  isConnected,
  validate(updateModeCharacterSchema),
  controllerWrapper(modeController.updateCharacterMode),
);

router.patch(
  '/rotate/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateStepsCharacterSchema),
  controllerWrapper(characterController.updateRotateCharacter),
);

router.patch(
  '/steps/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateStepsCharacterSchema),
  controllerWrapper(characterController.updateStepsCharacter),
);

router.patch(
  '/order/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateOrderCharacterSchema),
  controllerWrapper(orderController.updateCharacterOrder),
);

router.post(
  '/:id/:accountId',
  validate(paramIdAndAccountIdSchema, 'params'),
  validate(createCharacterSchema),
  controllerWrapper(characterController.addCharacter),
);

router.delete(
  '/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  controllerWrapper(characterController.deleteCharacter),
);

router.patch(
  '/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateCharacterSchema),
  controllerWrapper(characterController.updateCharacter),
);

router.get(
  '/',
  controllerWrapper(characterController.getAllCharactersPage),
);

module.exports = router;
