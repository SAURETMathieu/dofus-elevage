const express = require('express');

const adminController = require('../../controllers/adminController.js');
const { isAdmin } = require('../../middlewares/authorization.js');
const { paramIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');

const {
  userAdminController,
  rotateAdminController,
  serverAdminController,
  accountAdminController,
  characterAdminController,
  breedAdminController,
} = require('../../controllers/admin/index.js');

const {
  updateUserSchema,
} = require('../../validation/schemas/user.js');

const controllerWrapper = require('../../helpers/controller.wrapper.js');

const router = new express.Router();

// get update pages for admins

router.get(
  '/servers/update/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(serverAdminController.getUpdateServerPage),
);

router.get(
  '/users/update/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(userAdminController.getByPk.bind(userAdminController)),
);

// delete for admins

router.delete(
  '/servers/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(serverAdminController.delete.bind(serverAdminController)),
);

router.delete(
  '/rotates/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(rotateAdminController.delete.bind(rotateAdminController)),
);

router.delete(
  '/characters/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(characterAdminController.delete.bind(characterAdminController)),
);

router.delete(
  '/accounts/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(accountAdminController.delete.bind(accountAdminController)),
);

router.delete(
  '/users/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(userAdminController.delete.bind(userAdminController)),
);

// patch for admins

router.patch(
  '/servers/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(serverAdminController.update),
);

router.patch(
  '/users/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  validate(updateUserSchema),
  controllerWrapper(userAdminController.update.bind(userAdminController)),
);

router.patch(
  '/rotates/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(rotateAdminController.update.bind(rotateAdminController)),
);

router.patch(
  '/characters/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(characterAdminController.update.bind(characterAdminController)),
);

router.patch(
  '/accounts/:id',
  isAdmin,
  validate(paramIdSchema, 'params'),
  controllerWrapper(accountAdminController.update.bind(accountAdminController)),
);

// post for admins

router.post(
  '/servers',
  isAdmin,
  controllerWrapper(serverAdminController.create),
);

// get home page admin for each classes

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

// get home admin's page

router.get('/', isAdmin, adminController.getAdminPage);

module.exports = router;
