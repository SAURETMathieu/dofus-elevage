const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('../database.js');
const Session = require('../models/Session.js');

const sessionStore = new SequelizeStore({
  db: sequelize,
  expiration: 24 * 60 * 60 * 1000 * 60,
  table: 'Session',
});

function sessionMiddleware() {
  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { secure: false },
  });
}

module.exports = sessionMiddleware;
