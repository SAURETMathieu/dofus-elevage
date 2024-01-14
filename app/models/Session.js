const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Session = sequelize.define('Session', {
  sid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  expires: {
    type: DataTypes.DATE,
  },
  data: {
    type: DataTypes.TEXT,
  },
});

Session.sync();

module.exports = Session;
