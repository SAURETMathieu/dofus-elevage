/* eslint-disable import/extensions */
require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const errorHandler = require('./app/helpers/error.handler.js');
const httpLogger = require('./app/middlewares/httpLogger.js');
const sessionMiddleware = require('./app/middlewares/sessions.js');
const { initBackup } = require('./app/helpers/saveDatabase.js');

const PORT = process.env.PORT || 4000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));
app.use(express.json());

app.use(httpLogger);

app.use(sessionMiddleware());

app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
  if (request.session.user) {
    response.locals.user = request.session.user;
  }
  next();
});

app.use(router);

app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  initBackup();
}

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});
