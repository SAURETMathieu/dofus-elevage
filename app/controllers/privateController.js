/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const {
  Account,
  Server,
  Rotate,
  User,
} = require('../models/index.js');

const privateController = {
  getPrivatePage: async (request, response) => {
    const server = parseInt(request.query.server, 10);
    const userId = parseInt(request.session?.user?.id, 10);
    let idToRequest = userId;

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

    accounts.forEach((account) => {
      account.characters = account.characters.sort((a, b) => a.order - b.order);
    });

    return response.render('private', { accounts });
  },
};

module.exports = privateController;
