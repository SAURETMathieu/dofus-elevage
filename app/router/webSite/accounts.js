const express = require('express');

const accountController = require("../../controllers/accountController");
const { isConnected, isAdmin, canSignup } = require("../../middlewares/authorization");

const router = new express.Router();

router.post("/:id",isConnected, accountController.addAccount);
router.get("/", isConnected, accountController.getAccountsPage);
router.get("/:accountId/characters", isConnected, accountController.getCharactersOnAccountPage);

module.exports = router;