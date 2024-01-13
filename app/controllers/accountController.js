/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const ApiError = require('../errors/api.error.js');

const {
  Server, Account, User,
} = require('../models/index.js');

const accountController = {
  getAccountsPage: async (request, response) => {
    const serverId = parseInt(request.query.server, 10);
    const userId = request.session?.user?.id;
    let idToRequest = userId;
    const servers = await Server.findAll();

    if (!userId) {
      const exampleUser = await User.findOne({
        attributes: ['id'],
        where: { email: 'example@example.example' },
      });
      idToRequest = exampleUser.id;
      const conditions = { user_id: idToRequest };
      if (serverId) {
        conditions.server_id = serverId;
      }
      const exempleAccounts = await Account.findAll({
        where: conditions,
        order: ['server_id', 'name'],
        include: [
          {
            association: 'server',
          },
        ],
      });
      return response.render('accounts', { accounts: exempleAccounts, servers });
    }

    const whereCondition = { user_id: userId };

    if (serverId && userId) {
      whereCondition.server_id = serverId;
    }

    const accounts = await Account.findAll({
      where: whereCondition,
      order: ['server_id', 'name'],
      include: [
        {
          association: 'server',
        },
      ],
    });

    return response.render('accounts', { accounts, servers });
  },

  addAccount: async (request, response, next) => {
    const userId = parseInt(request.session?.user?.id, 10);

    if (Number.isNaN(userId) || userId <= 0) {
      return response.redirect('/accounts');
    }

    const { name, color, server } = request.body;

    const account = await Account.create({
      name,
      color,
      server_id: server,
      user_id: userId,
    });

    return response.redirect('/accounts');
  },

  deleteAccount: async (request, response, next) => {
    const { id } = request.params;
    const account = await Account.findByPk(id);
    if (!account) {
      const err = new ApiError(
        'Echec lors de la suppression du compte: Le compte n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }
    const accountDeleted = await Account.destroy({
      where: {
        id,
        user_id: request.session.user.id,
      },
    });

    if (accountDeleted) {
      return response.status(204).json();
    }
    const err = new ApiError(
      'Echec lors de la suppression du compte.',
      { httpStatus: 400 },
    );
    return next(err);
  },

  updateAccount: async (request, response, next) => {
    const {
      name,
      color,
      server,
    } = request.body;

    const selectedAccount = await Account.findByPk(request.params.id);

    if (!selectedAccount) {
      const err = new ApiError(
        'Echec lors de la modification du compte: Le compte n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    const serverExist = await Server.findByPk(server);

    if (!serverExist) {
      const err = new ApiError(
        'Echec lors de la modification du compte: Le serveur n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    const updatedAccount = await selectedAccount.update({
      name,
      color,
      server_id: server,
    });

    if (updatedAccount) {
      const { server_id, ...updatedData } = updatedAccount.toJSON();
      updatedData.server = serverExist;
      return response.json(updatedData);
    }
    const err = new ApiError(
      'Echec lors de la modification du compte',
      { httpStatus: 400 },
    );
    return next(err);
  },
};

module.exports = accountController;
