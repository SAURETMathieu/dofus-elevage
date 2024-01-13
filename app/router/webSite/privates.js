const express = require('express');

const privateController = require('../../controllers/privateController.js');

const router = new express.Router();

const controllerWrapper = require('../../helpers/controller.wrapper.js');

router.get(
  '/',
  controllerWrapper(privateController.getPrivatePage),
);

module.exports = router;
