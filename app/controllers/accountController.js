const { User, Server, Account, Character } = require("../models");

const accountController = {
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
      response.redirect("/accounts");
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
