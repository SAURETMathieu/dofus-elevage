const logger = require('../helpers/index.logger.js');

function httpLogger(request, response, next) {
  response.on('finish', () => {
    const clientIP = request.ip;

    const actualStatus = response.statusCode;

    const logInfo = {
      httpStatus: actualStatus,
      level: 'http',
      message: `${clientIP} ${request.method} ${request.originalUrl}`,
      timestamp: new Date().toISOString(),
    };

    logger.http(logInfo);
  });

  next();
}

module.exports = httpLogger;
