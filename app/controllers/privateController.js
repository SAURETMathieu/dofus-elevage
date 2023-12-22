/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const dayjs = require('dayjs');
const {
  Account,
} = require('../models/index.js');
require('dayjs/locale/fr');

const privateController = {
  getPrivatePage: async (request, response) => {
    try {
      const server = parseInt(request.query.server, 10);
      const userId = request.session?.user?.id;
      const whereCondition = { user_id: userId };

      if (server && userId) {
        whereCondition.server_id = server;
      }

      const accounts = await Account.findAll({
        where: whereCondition,
        order: ['order'],
        include: [
          {
            association: 'characters',
            where: { type: 'private' },
            include: [
              {
                association: 'breedFemale',
              },
              {
                association: 'breedMale',
              },
            ],
          },
        ],
      });
      return response.render('private', { accounts });
    } catch (err) {
      return response.status(500).render('error', {
        error: {
          statusCode: 500,
          name: 'Internal Server Error',
          message:
            'Une erreur est survenue lors de la récupération des comptes',
        },
      });
    }
  },
};

module.exports = privateController;
