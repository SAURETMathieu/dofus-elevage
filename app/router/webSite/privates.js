const express = require('express');

const privateController = require('../../controllers/privateController.js');

const router = new express.Router();

router.get(
  '/',
  privateController.getPrivatePage,
);

module.exports = router;
