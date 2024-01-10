const express = require('express');

const authController = require('../../controllers/authController.js');
const { isConnected, canSignup } = require('../../middlewares/authorization.js');
const { createUserSchema, connectUserSchema } = require('../../validation/schemas/user.js');
const validate = require('../../validation/index.js');

const router = new express.Router();

router.get('/signup', canSignup, authController.getRegisterPage);
router.get('/signin', authController.getConnectionPage);
router.get('/signout', isConnected, authController.getSignout);
router.get('/profil', isConnected, authController.getProfilPage);
router.post('/signup', /* validate(createUserSchema), */ authController.postSignup);
router.post('/signin', /* validate(connectUserSchema), */ authController.postSignin);

module.exports = router;
