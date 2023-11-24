const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Account extends Model {}

Account.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "Account",
    tableName: "account",
  }
);

module.exports = Account;
