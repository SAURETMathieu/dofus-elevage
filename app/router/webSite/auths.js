const express = require('express');

const authController = require('../../controllers/authController.js');
const { isConnected, canSignup, isConnectedAndRedirect } = require('../../middlewares/authorization.js');
const { createUserSchema, connectUserSchema } = require('../../validation/schemas/user.js');
const { paramIdSchema } = require('../../validation/schemas/params.js');

const validate = require('../../validation/index.js');
const controllerWrapper = require('../../helpers/controller.wrapper.js');

const router = new express.Router();

router.get(
  '/signup',
  canSignup,
  controllerWrapper(authController.getRegisterPage),
);

router.get(
  '/signin',
  controllerWrapper(authController.getConnectionPage),
);

router.get(
  '/signout',
  isConnected,
  controllerWrapper(authController.getSignout),
);

router.get(
  '/profil',
  isConnectedAndRedirect,
  controllerWrapper(authController.getProfilPage),
);

router.post(
  '/signup',
  validate(createUserSchema),
  controllerWrapper(authController.postSignup),
);

router.post(
  '/signin',
  validate(connectUserSchema),
  controllerWrapper(authController.postSignin),
);

module.exports = router;
