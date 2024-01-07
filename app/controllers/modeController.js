const { QueryTypes } = require('sequelize');
const sequelize = require('../database.js');

const modeController = {
  updateAccountMode: async (request, response) => {
    try {
      const { accountsMode } = request.body;

      let updateQuery = 'UPDATE account SET "mode" = CASE ';

      accountsMode.forEach((account) => {
        updateQuery += `WHEN id = ${account.accountId} THEN '${account.mode}' `;
      });

      updateQuery += 'ELSE "mode" END ';

      updateQuery += `WHERE user_id = ${request.session.user.id} AND id IN (${accountsMode.map((account) => account.accountId).join(',')})`;
      await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

      response.status(200).json({ message: 'Changement d\'affichage du compte mis à jour avec succès.' });
    } catch (error) {
      response.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'affichage du compte.' });
    }
  },

  updateRotateMode: async (request, response) => {
    try {
      const { rotatesMode } = request.body;

      let updateQuery = 'UPDATE rotate SET "mode" = CASE ';

      rotatesMode.forEach((rotate) => {
        updateQuery += `WHEN id = ${rotate.rotateId} THEN '${rotate.mode}' `;
      });

      updateQuery += 'ELSE "mode" END ';

      updateQuery += `WHERE user_id = ${request.session.user.id} AND id IN (${rotatesMode.map((rotate) => rotate.rotateId).join(',')})`;

      await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

      response.status(200).json({ message: 'Changement d\'affichage de la rotation mis à jour avec succès.' });
    } catch (error) {
      response.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'affichage de la rotation.' });
    }
  },

  updateCharacterMode: async (request, response) => {
    try {
      const { charactersMode } = request.body;

      let updateQuery = 'UPDATE character AS c '
                        + 'SET "mode" = CASE ';

      charactersMode.forEach((character) => {
        updateQuery += `WHEN c.id = ${character.characterId} THEN '${character.mode}' `;
      });

      updateQuery += 'ELSE c."mode" END ';

      updateQuery += 'FROM account AS a '
                   + 'WHERE c.account_id = a.id '
                   + `AND a.user_id = ${request.session.user.id} `
                   + `AND c.id IN (${charactersMode.map((character) => character.characterId).join(',')})`;
      await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

      response.status(200).json({ message: 'Changement d\'affichage du personnage mis à jour avec succès.' });
    } catch (error) {
      response.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'affichage du personnage.' });
    }
  },
};

module.exports = modeController;
