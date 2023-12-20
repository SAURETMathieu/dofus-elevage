const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database.js');

class Account extends Model {}

Account.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'order',
    },
  },
  {
    sequelize,
    modelName: 'Account',
    tableName: 'account',
  },
);

module.exports = Account;
