const express = require('express');

const characterController = require("../../controllers/characterController");
const { isConnected, isAdmin, canSignup } = require("../../middlewares/authorization");

const router = new express.Router();

router.post("/:id/:accountId",isConnected, characterController.addCharacter);
router.delete("/:id", isConnected, characterController.deleteCharacter);
router.get("/", isConnected, characterController.getAllCharactersPage);

module.exports = router;