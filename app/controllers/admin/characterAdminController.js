const { Character } = require('../../models/index.js');
const CoreAdminController = require('./coreAdminController.js');

const characterAdminController = new CoreAdminController(
  Character,
  'adminTable',
  '/admin/characters',
  'character',
);

module.exports = characterAdminController;
