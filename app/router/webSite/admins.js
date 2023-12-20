const express = require('express');

const adminController = require('../../controllers/adminController');
const { isConnected, isAdmin, canSignup } = require('../../middlewares/authorization');

const router = new express.Router();

router.delete('/servers/:id', adminController.deleteServer);
router.get('/servers/update/:id', adminController.getUpdateServerPage);
router.patch('/servers/:id', adminController.updateServer);
router.get('/servers', adminController.getAdminServersPage);
router.get('/users', adminController.getAdminUsersPage);
router.post('/servers', adminController.addServer);
router.get('/', adminController.getAdminPage);

module.exports = router;
