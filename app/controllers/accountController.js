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

  getCharactersOnAccountPage: async (request, response) => {
    try {
      const accountId = parseInt(request.params.accountId, 10);

      const account = await Account.findOne({ where: { id: accountId } });

      if (!account || account.user_id !== request.session.user.id) {
        return response.status(403).render("error", {
          error: {
            statusCode: 403,
            name: "Acces interdit",
            message:
              "Vous n'avez pas le permission d'accéder aux personnagesde ce compte",
          },
        });
      }
      const characters = await Character.findAll({
        where: { account_id: accountId },
        include: [
          {
            association: "account",
            include: [
              {
                association: "user",
              },
              {
                association: "server",
              },
            ],
          },
          {
            association: "breedFemale",
          },
          {
            association: "breedMale",
          },
        ],
      });
      const breeds = await Breed.findAll();
      const accounts = await Account.findAll({where:{user_id:request.session.user.id}});
      const charactersFormatted = characters.map((character) => {
        character.account.user.password=null;
        const dayRepro = dayjs(character.updated_at)
          .locale("fr")
          .format("dddd");

        const dateRepro = dayjs(character.updated_at)
          .locale("fr")
          .format("DD/MM/YY");

        const hoursRepro = dayjs(character.updated_at)
          .locale("fr")
          .format("HH[h]mm");

        const dayBirth = dayjs(character.updated_at)
          .locale("fr")
          .add(character.breedFemale.gestation, "minute")
          .format("dddd");

        const dateBirth = dayjs(character.updated_at)
          .locale("fr")
          .add(character.breedFemale.gestation, "minute")
          .format("DD/MM/YY");

        const hoursBirth = dayjs(character.updated_at)
          .locale("fr")
          .add(character.breedFemale.gestation, "minute")
          .format("HH[h]mm");

        return {
          ...character.toJSON(),
          dayRepro,
          dateRepro,
          hoursRepro,
          dayBirth,
          dateBirth,
          hoursBirth,
        };
      });
      response.render("characters", {
        characters: charactersFormatted,
        breeds,
        accountId,
        account,
        accounts
      });
    } catch (err) {
      console.log(err);
      return response.status(500).render("error", {
        error: {
          statusCode: 500,
          name: "Internal Server Error",
          message:
            "Une erreure est survenue lors de la récupération des personnages",
        },
      });
    }
  },
};

module.exports = accountController;
