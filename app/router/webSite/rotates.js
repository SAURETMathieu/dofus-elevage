const express = require('express');

const rotateController = require('../../controllers/rotateController.js');
const orderController = require('../../controllers/orderController.js');
const modeController = require('../../controllers/modeController.js');
const { isConnected } = require('../../middlewares/authorization.js');
const {
  createRotateSchema,
  updateRotateSchema,
  updateModeRotateSchema,
  updateStepsRotateSchema,
  updateOrderRotateSchema,
} = require('../../validation/schemas/rotate.js');
const { paramIdSchema } = require('../../validation/schemas/params.js');

const controllerWrapper = require('../../helpers/controller.wrapper.js');
const validate = require('../../validation/index.js');

const router = new express.Router();

router.patch(
  '/mode',
  isConnected,
  validate(updateModeRotateSchema),
  controllerWrapper(modeController.updateRotateMode),
);

router.patch(
  '/order',
  isConnected,
  validate(updateOrderRotateSchema),
  controllerWrapper(orderController.updateRotateOrder),
);

router.patch(
  '/steps/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateStepsRotateSchema),
  controllerWrapper(rotateController.updateStepsRotate),
);

router.patch(
  '/time/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateRotateSchema),
  controllerWrapper(rotateController.updateTime),
);

router.delete(
  '/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  controllerWrapper(rotateController.deleteRotate),
);

router.patch(
  '/:id',
  isConnected,
  validate(updateRotateSchema),
  controllerWrapper(rotateController.updateRotate),
);

router.post(
  '/',
  validate(createRotateSchema),
  controllerWrapper(rotateController.addRotate),
);

module.exports = router;
