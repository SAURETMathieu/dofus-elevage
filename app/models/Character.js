const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Character extends Model {}

Character.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nbMale: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'nb_male',
    },
    nbFemale: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'nb_female',
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    speMale: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
      field: 'spe_male',
    },
    speFemale: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
      field: 'spe_female',
    },
    reproduction: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'nb_reproduction',
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: true,
      field: 'date_reproduction',
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "Character",
    tableName: "character",
  }
);

module.exports = Character;
