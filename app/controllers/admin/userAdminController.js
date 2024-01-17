const { User } = require('../../models/index.js');
const CoreAdminController = require('./coreAdminController.js');

const userAdminController = new CoreAdminController(
  User,
  'adminTable',
  '/admin/users',
  'user',
);

module.exports = userAdminController;
