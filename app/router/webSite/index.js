const express = require('express');
const accountsRouter = require('./accounts.js');
const authsRouter = require('./auths.js');
const charatersRouter = require('./characters.js');
const adminsRouter = require('./admins.js');
const privateRouter = require('./privates.js');
const publicRouter = require('./publics.js');

const router = new express.Router();

router.use('/', authsRouter);
router.use('/characters', charatersRouter);
router.use('/accounts', accountsRouter);
router.use('/admin', adminsRouter);
router.use('/private', privateRouter);
router.use('/public', publicRouter);

module.exports = router;
