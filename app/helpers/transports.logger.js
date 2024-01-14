const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const {
  combine, timestamp: now, label: category, printf, json, colorize,
} = winston.format;

const consoleFormat = printf(({
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level}: ${message}`);

const transportCombinedFile = new winston.transports.DailyRotateFile({
  level: 'http',
  filename: './logs/combined.log',
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: true,
  frequency: '1d',
  maxFiles: '5d',
  format: combine(
    now(),
    json(),
  ),
});

const transportErrorFile = new winston.transports.DailyRotateFile({
  level: 'error',
  filename: './logs/error.log',
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: true,
  frequency: '1d',
  maxFiles: '5d',
  format: combine(
    now(),
    json(),
  ),
});

const transportCombinedConsole = new winston.transports.Console({
  level: 'http',
  format: combine(
    category({ label: 'all' }),
    now(),
    colorize(),
    consoleFormat,
  ),
});

module.exports = { transportCombinedFile, transportErrorFile, transportCombinedConsole };
