const express = require('express');

const publicController = require('../../controllers/publicController.js');

const router = new express.Router();

router.get(
  '/',
  publicController.getPublicPage,
);

module.exports = router;
