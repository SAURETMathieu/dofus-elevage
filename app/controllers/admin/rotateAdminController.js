const { Rotate } = require('../../models/index.js');
const CoreAdminController = require('./coreAdminController.js');

const rotateAdminController = new CoreAdminController(
  Rotate,
  'adminTable',
  '/admin/rotates',
  'rotate',
);

module.exports = rotateAdminController;
