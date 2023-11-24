const { User, Server, Account, Character } = require("../models");

const accountController = {

  getAccountsPage: async (request, response) => {
    try {
      const server = parseInt(request.query.server, 10);
      let whereCondition = {};
      if (server && request.session?.user) {
        whereCondition = {
          server_id:server,
          user_id: request.session.user.id,
        };
      }else{
        whereCondition = {
          user_id: request.session.user.id,
        };
      }
      const accounts = await Account.findAll({
        where: whereCondition,
        order: ["server_id","name"],
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
      return response.render("error", {
        error: {
          statusCode: 409,
          name: "Error",
          message: err,
        },
      });
    }
  },

  addAccount: async (request, response) => {
    try {
      const id = parseInt(request.params.id, 10);
      if (id !== request.session.user.id) {
        response.render("error", {
          error: {
            statusCode: 409,
            name: "Error",
            message: "Erreur lors de la création du compte",
          },
        });
      }
      const { name, color } = request.body;
      const serverId = parseInt(request.body.server, 10);
      const account = await Account.create({
        name: name,
        color: color,
        server_id: serverId,
        user_id: id,
      });
      response.redirect(`/${id}/characters`);
    } catch (err) {
      console.log(err);
      return response.render("error", {
        error: {
          statusCode: 409,
          name: "Error",
          message: err,
        },
      });
    }
  },

};

module.exports = accountController;
