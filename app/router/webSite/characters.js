const express = require('express');

const characterController = require("../../controllers/characterController");
const { isConnected, isAdmin, canSignup } = require("../../middlewares/authorization");
const { updateCharacterSchema, createCharacterSchema } = require('../../validation/schemas/character');
const { paramIdSchema, paramAccountIdSchema, paramIdAndAccountIdSchema } = require('../../validation/schemas/params');
const validate = require('../../validation');

const router = new express.Router();

router.post("/:id/:accountId",
  isConnected,  
  validate(paramIdAndAccountIdSchema, "params"), 
  validate(createCharacterSchema), 
  characterController.addCharacter);

router.delete("/:id", isConnected,
  validate(paramIdSchema, "params"),
  characterController.deleteCharacter);

router.patch("/:id",
  isConnected,
  validate(paramIdSchema, "params"),
  validate(updateCharacterSchema),
  characterController.updateCharacter);

router.get("/",
 isConnected, 
 characterController.getAllCharactersPage);

module.exports = router;