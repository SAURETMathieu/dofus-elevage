const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const {
  transportCombinedFile,
  transportErrorFile,
  transportCombinedConsole,
} = require('./transports.logger.js');

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
