const express = require('express');
const accountsRouter = require('./accounts');
const authsRouter = require('./auths');
const charatersRouter = require('./characters');
const adminsRouter = require('./admins');

const router = new express.Router();

router.use('/', authsRouter);
router.use('/characters', charatersRouter);
router.use('/accounts', accountsRouter);
router.use('/admin', adminsRouter);

module.exports = router;
