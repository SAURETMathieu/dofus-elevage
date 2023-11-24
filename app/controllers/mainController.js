const { User, Server, Account } = require("../models");
const { Op } = require('sequelize');

const mainController = {
  getHomePage: (request, response) => {
    response.render("homepage");
  },

  getPublicPage: (request, response) => {
    response.render("public");
  },

  getPrivatePage: (request, response) => {
    response.render("private");
  },

  getGestionPage: (request, response) => {
    response.render("gestion");
  },

  getNaissancesPage: (request, response) => {
    response.render("naissances");
  },

  getProfilPage: (request, response) => {
    response.render("profil");
  },

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
        order: ["id"],
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

  getServersPage: async (request, response) => {
    const servers = await Server.findAll();
    response.render("servers", { servers });
  },

  getErrorPage: (request, response) => {
    response.render("404");
  },
};

module.exports = mainController;
