const { QueryTypes } = require('sequelize');
const sequelize = require('../database.js');

const orderController = {
  updateAccountOrder: async (request, response) => {
    try {
      const { order } = request.body;

      let updateQuery = 'UPDATE account SET "order" = CASE ';

      order.forEach((account, index) => {
        updateQuery += `WHEN id = ${account.accountId} THEN ${index} `;
      });

      updateQuery += 'ELSE "order" END ';

      updateQuery += `WHERE user_id = ${request.session.user.id} AND id IN (${order.map((account) => account.accountId).join(',')})`;

      await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

      response.status(200).json({ message: 'Les ordres des comptes ont été mis à jour avec succès.' });
    } catch (error) {
      response.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'ordre des comptes.' });
    }
  },

  updateCharacterOrder: async (request, response) => {
    try {
      const { order } = request.body;
      const { id } = request.params;

      let updateQuery = 'UPDATE character AS c '
                        + 'SET "order" = CASE ';

      order.forEach((character, index) => {
        updateQuery += `WHEN c.id = ${character.characterId} THEN ${index} `;
      });

      updateQuery += 'ELSE c."order" END ';

      updateQuery += 'FROM account AS a '
                   + 'WHERE c.account_id = a.id '
                   + `AND a.user_id = ${request.session.user.id} `
                   + `AND c.id IN (${order.map((character) => character.characterId).join(',')}) `
                   + `AND c.account_id = ${id}`;

      await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

      response.status(200).json({ message: 'Les ordres des personnages ont été mis à jour avec succès.' });
    } catch (error) {
      response.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'ordre des personnages.' });
    }
  },

  updateRotateOrder: async (request, response) => {
    try {
      const { order } = request.body;

      let updateQuery = 'UPDATE rotate SET "order" = CASE ';

      order.forEach((rotate, index) => {
        updateQuery += `WHEN id = ${rotate.rotateId} THEN ${index} `;
      });

      updateQuery += 'ELSE "order" END ';

      updateQuery += `WHERE user_id = ${request.session.user.id} AND id IN (${order.map((rotate) => rotate.rotateId).join(',')})`;

      await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

      response.status(200).json({ message: 'Les ordres des rotations ont été mis à jour avec succès.' });
    } catch (error) {
      response.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'ordre des rotations.' });
    }
  },
};

module.exports = orderController;
