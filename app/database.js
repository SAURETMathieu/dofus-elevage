const { Sequelize } = require('sequelize');

// configure the connection to database with Sequelize
const sequelize = new Sequelize(
  process.env.PG_URL,
  {
    define: {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    logging: false,
  },
);

module.exports = sequelize;
