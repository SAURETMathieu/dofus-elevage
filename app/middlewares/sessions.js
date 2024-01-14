const session = require('express-session');

function sessionMiddleware() {
  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  });
}

module.exports = sessionMiddleware;
