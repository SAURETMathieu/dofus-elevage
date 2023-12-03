const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class User extends Model {}

User.init(
  {
    firstname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    pseudo: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(50),
      defaultValue: "member",
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
  }
);

module.exports = User;

