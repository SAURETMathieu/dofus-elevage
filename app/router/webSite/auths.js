const express = require('express');

const authController = require("../../controllers/authController");
const { isConnected, isAdmin, canSignup } = require("../../middlewares/authorization");
const { paramIdSchema } = require('../../validation/schemas/params');
const  createUserSchema  = require('../../validation/schemas/user');
const validate = require('../../validation');

const router = new express.Router();

router.get("/signup", canSignup, authController.getRegisterPage);
router.get("/signin", authController.getConnectionPage);
router.get("/signout", isConnected, authController.getSignout);
router.get("/profil", isConnected, authController.getProfilPage);
router.post("/signup", validate(createUserSchema), authController.postSignup);
router.post("/signin",  authController.postSignin);

module.exports = router;