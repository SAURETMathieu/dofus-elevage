const express = require('express');

const rotateController = require('../../controllers/rotateController.js');
// const orderController = require('../../controllers/orderController.js');
// const modeController = require('../../controllers/modeController.js');
const { isConnected } = require('../../middlewares/authorization.js');
const {
  createRotateSchema,
  updateRotateSchema,
} = require('../../validation/schemas/rotate.js');
// const { paramIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');

const router = new express.Router();

// router.patch(
//   '/mode',
//   isConnected,
//   validate(updateModeRotateSchema),
//   modeController.updateRotateMode,
// );

// router.patch(
//   '/order',
//   isConnected,
//   validate(updateOrderRotateSchema),
//   orderController.updateRotateOrder,
// );

// router.delete(
//   '/:id',
//   isConnected,
//   validate(paramIdSchema, 'params'),
//   rotateController.deleteRotate,
// );

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
