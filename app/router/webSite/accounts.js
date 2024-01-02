const express = require('express');

const accountController = require('../../controllers/accountController.js');
const characterController = require('../../controllers/characterController.js');
const orderController = require('../../controllers/orderController.js');
const { isConnected } = require('../../middlewares/authorization.js');
const { createAccountSchema, updateAccountSchema, updateOrderAccountSchema } = require('../../validation/schemas/account.js');
const { paramIdSchema, paramAccountIdSchema } = require('../../validation/schemas/params.js');
const validate = require('../../validation/index.js');

const router = new express.Router();

router.patch('/order', isConnected, validate(updateOrderAccountSchema), orderController.updateAccountOrder);
router.get('/:accountId/characters', validate(paramAccountIdSchema, 'params'), characterController.getAllCharactersPage);
router.delete('/:id', isConnected, validate(paramIdSchema, 'params'), accountController.deleteAccount);
router.patch('/:id', isConnected, validate(updateAccountSchema), accountController.updateAccount);
router.post('/', validate(createAccountSchema), accountController.addAccount);
router.get('/', accountController.getAccountsPage);

module.exports = router;
