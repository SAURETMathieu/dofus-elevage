const { QueryTypes } = require('sequelize');
const sequelize = require('../database.js');

const orderController = {
  updateAccountOrder: async (request, response) => {
    try {
      const { accountsOrder } = request.body;

      let updateQuery = 'UPDATE account SET "order" = CASE ';

      accountsOrder.forEach((account, index) => {
        updateQuery += `WHEN id = ${account.accountId} THEN ${index} `;
      });

      updateQuery += 'ELSE "order" END ';

      updateQuery += `WHERE user_id = ${request.session.user.id} AND id IN (${accountsOrder.map((account) => account.accountId).join(',')})`;

      await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

      response.status(200).json({ message: 'Les ordres des comptes ont été mis à jour avec succès.' });
    } catch (error) {
      response.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour des ordres des comptes.' });
    }
  },

  // updateCharactersOrder: async (request, response) => {
  //   try {
  //     const { charactersOrder } = request.body;

  //     let updateQuery = 'UPDATE account SET "order" = CASE ';

  //     charactersOrder.forEach((account, index) => {
  //       updateQuery += `WHEN id = ${account.accountId} THEN ${index} `;
  //     });

  //     updateQuery += 'ELSE "order" END ';

  //     updateQuery += `WHERE user_id = ${request.session.user.id} AND id IN (${charactersOrder.map((account) => account.accountId).join(',')})`;

  //     await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

  //     response.status(200).json({ message: 'Les ordres des personnages ont été mis à jour avec succès.' });
  //   } catch (error) {
  //     response.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour des ordres des personnages.' });
  //   }
  // },

};

module.exports = orderController;
