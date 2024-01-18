/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const {
  Account,
  User,
} = require('../models/index.js');

const privateController = {
  getPrivatePage: async (request, response) => {
    const server = parseInt(request.query.server, 10);
    const userId = parseInt(request.session?.user?.id, 10);
    let idToRequest = userId;

    // Assign example values' IDs for the database request
    // if the visitor isn't connected
    if (Number.isNaN(idToRequest)) {
      const exampleUser = await User.findOne({
        attributes: ['id'],
        where: { email: 'example@example.example' },
      });
      idToRequest = exampleUser.id;
    }

    const whereCondition = { user_id: idToRequest };

    if (server && idToRequest) {
      whereCondition.server_id = server;
    }

    const accounts = await Account.findAll({
      where: whereCondition,
      order: [['order', 'ASC']],
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

    // Sort characters by order for each account
    accounts.forEach((account) => {
      account.characters = account.characters.sort((a, b) => a.order - b.order);
    });

    return response.render('private', { accounts });
  },
};

module.exports = privateController;
