const express = require("express");
const mainController = require("./controllers/mainController");
const authController = require("./controllers/authController");
const adminController = require("./controllers/adminController");
const accountController = require("./controllers/accountController");
const characterController = require("./controllers/characterController");
const { isConnected, isAdmin, canSignup } = require("./middlewares/authorization");

const router = express.Router();

// can without connexion
router.get("/", mainController.getHomePage);
router.get("/public", mainController.getPublicPage);
router.get("/private", mainController.getPrivatePage);
router.get("/gestion", mainController.getGestionPage);
router.get("/servers", mainController.getServersPage);

// need to be connected
router.post("/account-add/:id",isConnected, accountController.addAccount);
router.post("/character-add/:id/:accountId",isConnected, characterController.addCharacter);
router.get("/accounts/:accountId/characters", isConnected, characterController.getCharactersOnAccountPage);
router.delete("/characters/:id", isConnected, characterController.deleteCharacter);
router.get("/characters", isConnected, characterController.getAllCharactersPage);
router.get("/accounts", isConnected, accountController.getAccountsPage);

// authentification
router.get("/signup", canSignup, authController.getRegisterPage);
router.get("/signin", authController.getConnectionPage);
router.get("/signout", isConnected, authController.getSignout);
router.get("/profil", isConnected, authController.getProfilPage);
router.post("/signup", authController.postSignup);
router.post("/signin", authController.postSignin);

//admin features
router.get("/admin/servers/delete/:id", adminController.deleteServer);
router.get("/admin/servers/update/:id", adminController.getUpdateServerPage);
router.post("/admin/servers/update/:id", adminController.updateServer);
router.get("/admin/servers", adminController.getAdminServersPage);
router.get("/admin/users", adminController.getAdminUsersPage);
router.post("/admin/servers-add", adminController.addServer);
router.get("/admin", authController.getAdminPage);

router.use("*", mainController.getErrorPage);

module.exports = router;
