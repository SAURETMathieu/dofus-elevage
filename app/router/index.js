const express = require('express');
const webSiteRouter = require('./webSite/index.js');
const mainController = require('../controllers/mainController.js');

const router = new express.Router();

router.get('/', mainController.getHomePage);
router.get('/public', mainController.getPublicPage);

router.get('/gestion', mainController.getGestionPage);

router.get('/servers', mainController.getServersPage);

router.use('/', webSiteRouter);

router.use('*', mainController.getErrorPage);

module.exports = router;
