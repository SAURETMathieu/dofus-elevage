const express = require('express');
const webSiteRouter = require('./webSite');
const mainController = require("../controllers/mainController");

const router = new express.Router();

router.get("/", mainController.getHomePage);
router.get("/public", mainController.getPublicPage);
router.get("/private", mainController.getPrivatePage);
router.get("/gestion", mainController.getGestionPage);

router.get("/servers", mainController.getServersPage);

router.use('/', webSiteRouter);

router.use("*", mainController.getErrorPage);

module.exports = router;
