const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('../database.js');
// eslint-disable-next-line no-unused-vars
const Session = require('../models/Session.js');

// Initialize session with database storage to keep users connected
// even if the server reboots
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
