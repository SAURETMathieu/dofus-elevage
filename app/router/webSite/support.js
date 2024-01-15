const express = require('express');

const { isConnectedAndRedirect } = require('../../middlewares/authorization.js');
const supportController = require('../../controllers/supportController.js');
const controllerWrapper = require('../../helpers/controller.wrapper.js');
const { paramIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');
const { createSupportSchema } = require('../../validation/schemas/support.js');

const router = new express.Router();

router.post(
  '/:id',
  validate(paramIdSchema, 'params'),
  validate(createSupportSchema),
  isConnectedAndRedirect,
  controllerWrapper(supportController.postSupport),
);

router.get(
  '/',
  isConnectedAndRedirect,
  controllerWrapper(supportController.getSupportPage),
);

module.exports = router;
