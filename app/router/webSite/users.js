const express = require('express');

const userController = require('../../controllers/userController.js');
const { isConnected } = require('../../middlewares/authorization.js');
const {
  updateUserSchema,
} = require('../../validation/schemas/user.js');
const { paramIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');

const router = new express.Router();

router.patch(
  '/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  validate(updateUserSchema),
  userController.updateUser,
);

router.delete(
  '/:id',
  isConnected,
  validate(paramIdSchema, 'params'),
  userController.deleteUser,
);

module.exports = router;
