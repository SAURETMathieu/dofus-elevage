const express = require('express');

const accountController = require('../../controllers/accountController.js');
const characterController = require('../../controllers/characterController.js');
const orderController = require('../../controllers/orderController.js');
const modeController = require('../../controllers/modeController.js');
const { isConnected } = require('../../middlewares/authorization.js');
const {
  createAccountSchema,
  updateAccountSchema,
  updateOrderAccountSchema,
  updateModeAccountSchema,
} = require('../../validation/schemas/account.js');
const { paramIdSchema, paramAccountIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');
const controllerWrapper = require('../../helpers/controller.wrapper.js');

const router = new express.Router();

router.patch(
  '/mode',
  isConnected,
  validate(updateModeAccountSchema),
  controllerWrapper(modeController.updateAccountMode),
);

router.patch(
  '/order',
  isConnected,
  validate(updateOrderAccountSchema),
  controllerWrapper(orderController.updateAccountOrder),
);

router.get(
  '/:accountId/characters',
  validate(paramAccountIdSchema, 'params'),
  controllerWrapper(characterController.getAllCharactersPage),
);

router.delete(
  '/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  controllerWrapper(accountController.deleteAccount),
);

router.patch(
  '/:id',
  isConnected,
  validate(updateAccountSchema),
  controllerWrapper(accountController.updateAccount),
);

router.post(
  '/',
  validate(createAccountSchema),
  controllerWrapper(accountController.addAccount),
);

router.get(
  '/',
  controllerWrapper(accountController.getAccountsPage),
);

module.exports = router;
