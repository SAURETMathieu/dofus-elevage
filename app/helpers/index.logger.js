const winston = require('winston');
// eslint-disable-next-line no-unused-vars
const DailyRotateFile = require('winston-daily-rotate-file');
const {
  transportCombinedFile,
  transportErrorFile,
  transportCombinedConsole,
} = require('./transports.logger.js');

// Logging in the 'logs' directory to keep a record of what is happening
// on the site
const transports = [];
if (process.env.NODE_ENV === 'production') {
  transports.push(transportCombinedFile, transportErrorFile);
} else {
  transports.push(transportCombinedConsole);
}

const logger = winston.createLogger({
  transports,
});

module.exports = logger;
