const express = require('express');

const adminController = require('../../controllers/adminController.js');
const { isAdmin } = require('../../middlewares/authorization.js');

const {
  userAdminController,
  rotateAdminController,
  serverAdminController,
  accountAdminController,
  characterAdminController,
  breedAdminController,
} = require('../../controllers/admin/index.js');

const controllerWrapper = require('../../helpers/controller.wrapper.js');

const router = new express.Router();

router.get(
  '/servers/update/:id',
  isAdmin,
  controllerWrapper(serverAdminController.getUpdateServerPage),
);

router.delete(
  '/servers/:id',
  isAdmin,
  controllerWrapper(serverAdminController.delete.bind(serverAdminController)),
);

router.patch(
  '/servers/:id',
  isAdmin,
  controllerWrapper(serverAdminController.update),
);

router.delete(
  '/rotates/:id',
  isAdmin,
  controllerWrapper(rotateAdminController.delete.bind(rotateAdminController)),
);

router.patch(
  '/rotates/:id',
  isAdmin,
  controllerWrapper(rotateAdminController.update.bind(rotateAdminController)),
);

router.delete(
  '/characters/:id',
  isAdmin,
  controllerWrapper(characterAdminController.delete.bind(characterAdminController)),
);

router.patch(
  '/characters/:id',
  isAdmin,
  controllerWrapper(characterAdminController.update.bind(characterAdminController)),
);

router.delete(
  '/accounts/:id',
  isAdmin,
  controllerWrapper(accountAdminController.delete.bind(accountAdminController)),
);

router.patch(
  '/accounts/:id',
  isAdmin,
  controllerWrapper(accountAdminController.update.bind(accountAdminController)),
);

router.delete(
  '/users/:id',
  isAdmin,
  controllerWrapper(userAdminController.delete.bind(userAdminController)),
);

router.patch(
  '/users/:id',
  isAdmin,
  controllerWrapper(userAdminController.update.bind(userAdminController)),
);

// router.delete('/breeds/:id', isAdmin, adminController.deleteBreed);
// router.patch('/breeds/:id', isAdmin, adminController.deleteBreed);

router.post(
  '/servers',
  isAdmin,
  controllerWrapper(serverAdminController.create),
);
// router.post('/users', isAdmin, adminController.addServer);
// router.post('/breeds', isAdmin, adminController.addServer);
// router.post('/accounts', isAdmin, adminController.addServer);
// router.post('/characters', isAdmin, adminController.addServer);
// router.post('/rotates', isAdmin, adminController.addServer);

router.get(
  '/servers',
  isAdmin,
  controllerWrapper(serverAdminController.getAdminServersPage),
);

router.get(
  '/users',
  isAdmin,
  controllerWrapper(userAdminController.getAll.bind(userAdminController)),
);

router.get(
  '/rotates',
  isAdmin,
  controllerWrapper(rotateAdminController.getAll.bind(rotateAdminController)),
);

router.get(
  '/accounts',
  isAdmin,
  controllerWrapper(accountAdminController.getAll.bind(accountAdminController)),
);

router.get(
  '/breeds',
  isAdmin,
  controllerWrapper(breedAdminController.getAll.bind(breedAdminController)),
);

router.get(
  '/characters',
  isAdmin,
  controllerWrapper(characterAdminController.getAll.bind(characterAdminController)),
);

router.get('/', isAdmin, adminController.getAdminPage);

module.exports = router;
