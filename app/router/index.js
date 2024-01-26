const express = require('express');
const webSiteRouter = require('./webSite/index.js');
const mainController = require('../controllers/mainController.js');
const errorHandler = require('../helpers/error.handler.js');

const router = new express.Router();

router.get('/', mainController.getHomePage);

router.get('/servers', mainController.getServersPage);

router.use('/', webSiteRouter);

router.use(errorHandler);

router.use('*', mainController.getErrorPage);

module.exports = router;
