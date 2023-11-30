const { User, Server, Account, Character } = require("../models");

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
      const userId = parseInt(request.params.id, 10);
      const sessionId = request.session.user.id;

      if (userId !== sessionId) {
        return response.status(409).render("error", {
          error: {
            statusCode: 409,
            name: "Error",
            message: "Erreur lors de la création du compte",
          },
        });
      }

      const { name, color,server } = request.body;
      const serverId = parseInt(server, 10);

      const account = await Account.create({
        name: name,
        color: color,
        server_id: serverId,
        user_id: userId,
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
};

module.exports = accountController;
