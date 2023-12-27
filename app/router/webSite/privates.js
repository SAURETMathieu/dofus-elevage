const express = require('express');

const privateController = require('../../controllers/privateController.js');
const { isConnected } = require('../../middlewares/authorization.js');

const router = new express.Router();

router.get(
  '/',
  isConnected,
  privateController.getPrivatePage,
);

module.exports = router;
