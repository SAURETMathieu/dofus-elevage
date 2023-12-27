/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const {
  Account,
} = require('../models/index.js');

const publicController = {
  getPublicPage: async (request, response) => {
    try {
      const server = parseInt(request.query.server, 10);
      const userId = request.session?.user?.id;
      const whereCondition = { user_id: userId };

      if (server && userId) {
        whereCondition.server_id = server;
      }

      const accounts = await Account.findAll({
        where: whereCondition,
        order: [['order', 'ASC']],
        include: [
          {
            association: 'characters',
            where: { type: 'public' },
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

      accounts.forEach((account) => {
        account.characters = account.characters.sort((a, b) => a.order - b.order);
      });

      return response.render('public', { accounts });
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

module.exports = publicController;
