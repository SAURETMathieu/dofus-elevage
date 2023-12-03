const express = require('express');

const characterController = require("../../controllers/characterController");
const { isConnected, isAdmin, canSignup } = require("../../middlewares/authorization");
const { updateCharacterSchema } = require('../../validation/schemas/character');
const { paramIdSchema, paramAccountIdSchema } = require('../../validation/schemas/params');
const validate = require('../../validation');

const router = new express.Router();

router.post("/:id/:accountId",isConnected,  characterController.addCharacter);
router.delete("/:id", isConnected, characterController.deleteCharacter);
router.patch("/:id", isConnected, validate(paramIdSchema, "params"), characterController.updateCharacter);
router.get("/", isConnected, characterController.getAllCharactersPage);

module.exports = router;