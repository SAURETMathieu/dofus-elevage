const express = require('express');

const publicController = require('../../controllers/publicController.js');
const { isConnected } = require('../../middlewares/authorization.js');

const router = new express.Router();

router.get(
  '/',
  isConnected,
  publicController.getPublicPage,
);

module.exports = router;
