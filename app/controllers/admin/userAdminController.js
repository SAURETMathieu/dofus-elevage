const { User } = require('../../models/index.js');
const CoreAdminController = require('./coreAdminController.js');

const userAdminController = new CoreAdminController(
  User,
  'adminTable',
  'profil',
  'user',
);

module.exports = userAdminController;
