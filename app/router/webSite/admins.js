const express = require('express');

const adminController = require('../../controllers/adminController');
const { isConnected, isAdmin, canSignup } = require('../../middlewares/authorization');

const router = new express.Router();

router.delete('/servers/:id', isAdmin, adminController.deleteServer);
router.get('/servers/update/:id', isAdmin, adminController.getUpdateServerPage);
router.patch('/servers/:id', isAdmin, adminController.updateServer);
router.get('/servers', isAdmin, adminController.getAdminServersPage);
router.get('/users', isAdmin, adminController.getAdminUsersPage);
router.post('/servers', isAdmin, adminController.addServer);
router.get('/', isAdmin, adminController.getAdminPage);

module.exports = router;
