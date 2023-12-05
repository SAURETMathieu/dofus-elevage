const express = require('express');

const accountController = require("../../controllers/accountController");
const characterController = require("../../controllers/characterController");
const { isConnected, isAdmin, canSignup } = require("../../middlewares/authorization");
const { createAccountSchema, updateAccountSchema } = require('../../validation/schemas/account');
const { paramIdSchema, paramAccountIdSchema } = require('../../validation/schemas/params');
const validate = require('../../validation');

const router = new express.Router();

router.get("/:accountId/characters", isConnected, validate(paramAccountIdSchema, "params"), characterController.getAllCharactersPage);
router.delete("/:id", validate(paramIdSchema,'params'), accountController.deleteAccount);
router.patch("/:id",isConnected, validate(updateAccountSchema), accountController.updateAccount);
router.post("/",isConnected, validate(createAccountSchema), accountController.addAccount);
router.get("/", isConnected, accountController.getAccountsPage);

module.exports = router;