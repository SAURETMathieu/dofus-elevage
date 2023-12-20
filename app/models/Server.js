const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database.js');

class Server extends Model {}

Server.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    game: {
      type: DataTypes.STRING(20),
      defaultValue: 'Dofus Rétro',
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Server',
    tableName: 'server',
  },
);

module.exports = Server;
