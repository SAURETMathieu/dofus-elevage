/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const dayjs = require('dayjs');
const {
  Server, Account,
} = require('../models/index.js');
require('dayjs/locale/fr');

const accountController = {
  getAccountsPage: async (request, response) => {
    try {
      const serverId = parseInt(request.query.server, 10);
      const userId = request.session?.user?.id;

      const servers = await Server.findAll();

      if (!userId) {
        const conditions = { user_id: 16 };
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

  addAccount: async (request, response) => {
    try {
      const userId = parseInt(request.session?.user?.id, 10);

      if (Number.isNaN(userId) || userId <= 0) {
        return response.status(403).render('error', {
          error: {
            statusCode: 403,
            name: 'Error',
            message: 'Vous devez être connecté pour créer un compte.',
          },
        });
      }

      const { name, color, server } = request.body;

      const account = await Account.create({
        name,
        color,
        server_id: server,
        user_id: userId,
      });

      return response.redirect('/accounts');
    } catch (err) {
      return response.status(500).render('error', {
        error: {
          statusCode: 500,
          name: 'Internal Server Error',
          message: 'Une erreur est survenue lors de la création du compte',
        },
      });
    }
  },

  deleteAccount: async (request, response, next) => {
    try {
      const { id } = request.params;
      const account = await Account.findByPk(id);
      if (!account) {
        return response.status(404).json({ error: 'Account not found.' });
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
      return response.status(400).json({ error: 'Erreur lors de la suppression du compte' });
    } catch (error) {
      return next();
    }
  },

  updateAccount: async (request, response) => {
    try {
      const {
        name,
        color,
        server,
      } = request.body;

      const selectedAccount = await Account.findByPk(request.params.id);

      if (!selectedAccount) {
        return response.status(404).json({ error: 'Account not found.' });
      }

      const serverExist = await Server.findByPk(server);

      if (!serverExist) {
        return response.status(404).json({ error: 'Server not found.' });
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
      return response.status(404).json({ error: 'Account not found.' });
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = accountController;
