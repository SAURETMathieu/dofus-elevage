const userAdminController = require('./userAdminController.js');
const rotateAdminController = require('./rotateAdminController.js');
const serverAdminController = require('./serverAdminController.js');
const accountAdminController = require('./accountAdminController.js');
const characterAdminController = require('./characterAdminController.js');
const breedAdminController = require('./breedAdminController.js');

const adminControllers = {
  userAdminController,
  rotateAdminController,
  serverAdminController,
  accountAdminController,
  characterAdminController,
  breedAdminController,
};

module.exports = adminControllers;
