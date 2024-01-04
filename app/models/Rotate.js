const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database.js');

class Rotate extends Model {}

Rotate.init(
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
    mode: {
      type: DataTypes.TEXT,
      defaultValue: 'up',
      field: 'mode',
    },
    time: {
      type: DataTypes.TIME,
      defaultValue: null,
      allowNull: true,
      field: 'time',
    },
    mature: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    ride: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    feed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    serene: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    agressive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    lovem: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    endurancem: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    lovef: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    endurancef: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Rotate',
    tableName: 'rotate',
  },
);

module.exports = Rotate;
