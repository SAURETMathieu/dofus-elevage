const express = require('express');

const privateController = require('../../controllers/privateController.js');
const { isConnected } = require('../../middlewares/authorization.js');
const { updateCharacterSchema, createCharacterSchema } = require('../../validation/schemas/character.js');
const { paramIdSchema, paramIdAndAccountIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');

const router = new express.Router();

router.get(
  '/',
  isConnected,
  privateController.getPrivatePage,
);

module.exports = router;
