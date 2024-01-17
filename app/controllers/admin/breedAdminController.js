const { Breed } = require('../../models/index.js');
const CoreAdminController = require('./coreAdminController.js');

const breedAdminController = new CoreAdminController(
  Breed,
  'adminTable',
  '/admin/breeds',
  'breed',
);

module.exports = breedAdminController;
