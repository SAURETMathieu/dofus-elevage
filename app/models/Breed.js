const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database.js');

class Breed extends Model {}

Breed.init(
  {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    stade: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gestation: {
      type: DataTypes.INTEGER,
      defaultValue: 2880,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Breed',
    tableName: 'breed',
  },
);

module.exports = Breed;
