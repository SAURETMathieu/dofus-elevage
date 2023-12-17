const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Character extends Model {}

Character.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING(20),
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
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'order',
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    speMale: {
      type: DataTypes.STRING(10),
      defaultValue: null,
      allowNull: true,
      field: 'spe_male',
    },
    speFemale: {
      type: DataTypes.STRING(10),
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
    dateBirth: {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: true,
      field: 'date_birth',
    },
    type: {
      type: DataTypes.STRING(10),
      defaultValue: "private",
      allowNull: true,
    }
  },
  
  {
    sequelize,
    modelName: "Character",
    tableName: "character",
    defaultScope: {
      order: [['dateBirth', 'ASC']]
    },
  }
);

module.exports = Character;
