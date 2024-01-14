const logger = require('./index.logger.js');

// eslint-disable-next-line no-unused-vars
module.exports = (err, request, response, next) => {
  if (err.httpStatus === 500) {
    logger.error(null, err);
  }
  return response.status(err.httpStatus).json({ error: err.message });
};
