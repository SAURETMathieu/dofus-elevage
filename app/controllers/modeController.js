const { QueryTypes } = require('sequelize');
const sequelize = require('../database.js');

const modeController = {
  updateAccountMode: async (request, response) => {
    const { accountsMode } = request.body;

    let updateQuery = 'UPDATE account SET "mode" = CASE ';

    accountsMode.forEach((account) => {
      updateQuery += `WHEN id = ${account.accountId} THEN '${account.mode}' `;
    });

    updateQuery += 'ELSE "mode" END ';

    updateQuery += `WHERE user_id = ${request.session.user.id} AND id IN (${accountsMode.map((account) => account.accountId).join(',')})`;
    await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

    response.status(200).json({ message: 'Changement d\'affichage du compte mis à jour avec succès.' });
  },

  updateRotateMode: async (request, response) => {
    const { rotatesMode } = request.body;

    let updateQuery = 'UPDATE rotate SET "mode" = CASE ';

    rotatesMode.forEach((rotate) => {
      updateQuery += `WHEN id = ${rotate.rotateId} THEN '${rotate.mode}' `;
    });

    updateQuery += 'ELSE "mode" END ';

    updateQuery += `WHERE user_id = ${request.session.user.id} AND id IN (${rotatesMode.map((rotate) => rotate.rotateId).join(',')})`;

    await sequelize.query(updateQuery, { type: QueryTypes.UPDATE });

    response.status(200).json({ message: 'Changement d\'affichage de la rotation mis à jour avec succès.' });
  },

  updateCharacterMode: async (request, response) => {
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
  },
};

module.exports = modeController;
