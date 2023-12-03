const express = require('express');

const accountController = require("../../controllers/accountController");
const { isConnected, isAdmin, canSignup } = require("../../middlewares/authorization");
const  createAccountSchema  = require('../../validation/schemas/account');
const { paramIdSchema, paramAccountIdSchema } = require('../../validation/schemas/params');
const validate = require('../../validation');

const router = new express.Router();

router.get("/:accountId/characters", isConnected, validate(paramAccountIdSchema, "params"), accountController.getCharactersOnAccountPage);
router.delete("/:id", validate(paramIdSchema,'params'), accountController.deleteAccount);
router.post("/",isConnected, validate(createAccountSchema), accountController.addAccount);
router.get("/", isConnected, accountController.getAccountsPage);

module.exports = router;