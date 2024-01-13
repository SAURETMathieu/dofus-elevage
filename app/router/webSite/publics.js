const express = require('express');

const publicController = require('../../controllers/publicController.js');

const router = new express.Router();

const controllerWrapper = require('../../helpers/controller.wrapper.js');

router.get(
  '/',
  controllerWrapper(publicController.getPublicPage),
);

module.exports = router;
