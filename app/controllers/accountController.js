const { User, Server, Account, Character, Breed } = require("../models");
const dayjs = require("dayjs");
require("dayjs/locale/fr");

const accountController = {
  getAccountsPage: async (request, response) => {
    try {
      const server = parseInt(request.query.server, 10);
      const userId = request.session?.user?.id;

      let whereCondition = { user_id: userId };

      if (server && userId) {
        whereCondition.server_id = server;
      }

      const accounts = await Account.findAll({
        where: whereCondition,
        order: ["server_id", "name"],
        include: [
          {
            association: "server",
          },
        ],
      });

      const servers = await Server.findAll();

      response.render("accounts", { accounts, servers });
    } catch (err) {
      console.log(err);
      return response.status(500).render("error", {
        error: {
          statusCode: 500,
          name: "Internal Server Error",
          message:
            "Une erreur est survenue lors de la récupération des comptes",
        },
      });
    }
  },

  addAccount: async (request, response) => {
    try {
      const userId = parseInt(request.session.user.id,10);

      if (!userId) {
        return response.status(409).render("error", {
          error: {
            statusCode: 409,
            name: "Error",
            message: "Erreur lors de la création du compte",
          },
        });
      }

      const { name, color,server } = request.body;

      const account = await Account.create({
        name: name,
        color: color,
        server_id: server,
        user_id: userId
      });

      response.redirect(`/accounts/${account.id}/characters`);
    } catch (err) {
      console.log(err);
      return response.status(500).render("error", {
        error: {
          statusCode: 500,
          name: "Internal Server Error",
          message: "Une erreur est survenue lors de la création du compte",
        },
      });
    }
  },

  deleteAccount: async (request, response, next) => {
    try {
      const { id } = request.params;
      const account = await Account.findByPk(id);
      if(!account){
        return response.status(404).json({ error: "Account not found." });
      }
      const accountDeleted = await Account.destroy({
        where: {
          id: id,
        },
      });

      if (accountDeleted) {
        return response.status(201).json();
      } else {
        return response.status(400).json({ error: "Erreur lors de la suppression du compte" });
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du serveur :", error);
      next();
    }
  },

  updateAccount: async (request, response) => {
    try {
      const {
        name,
        color,
        server
      } = request.body;

      const selectedAccount = await Account.findByPk(request.params.id);

      if (!selectedAccount) {
        return response.status(404).json({ error: "Account not found." });
      }

      const serverExist = await Server.findByPk(server);

      if (!serverExist) {
        return response.status(404).json({ error: "Server not found." });
      }

      const updatedAccount = await selectedAccount.update({
        name,
        color,
        server_id:server
      });

      if (updatedAccount) {
        const { server_id, ...updatedData } = updatedAccount.toJSON();
        updatedData.server = serverExist; 
        response.json(updatedData);
      } else {
        return response.status(404).json({ error: "Account not found." });
      }
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = accountController;
