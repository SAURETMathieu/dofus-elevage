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
const validate = require('../../validation/index.js');

const router = new express.Router();

router.patch(
  '/mode',
  isConnected,
  validate(updateModeRotateSchema),
  modeController.updateRotateMode,
);

router.patch(
  '/order',
  isConnected,
  validate(updateOrderRotateSchema),
  orderController.updateRotateOrder,
);

router.patch(
  '/steps/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateStepsRotateSchema),
  rotateController.updateStepsRotate,
);

router.patch(
  '/time/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateRotateSchema),
  rotateController.updateTime,
);

router.delete(
  '/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  rotateController.deleteRotate,
);

router.patch(
  '/:id',
  isConnected,
  validate(updateRotateSchema),
  rotateController.updateRotate,
);

router.post(
  '/',
  validate(createRotateSchema),
  rotateController.addRotate,
);

module.exports = router;
