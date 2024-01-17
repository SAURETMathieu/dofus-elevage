const { Account } = require('../../models/index.js');
const CoreAdminController = require('./coreAdminController.js');

const accountAdminController = new CoreAdminController(
  Account,
  'adminTable',
  '/admin/accounts',
  'account',
);

module.exports = accountAdminController;
