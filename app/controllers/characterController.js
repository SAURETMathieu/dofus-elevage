const { User, Server, Account, Character, Breed } = require("../models");
const dayjs = require("dayjs");
require("dayjs/locale/fr");

const characterController = {
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
      response.render("characters", { characters, breeds, accountId, account });
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

  addCharacter: async (request, response) => {
    try {
      const id = parseInt(request.params.id, 10);
      const accountId = parseInt(request.params.accountId, 10);

      if (id !== request.session.user.id) {
        return response.status(409).render("error", {
          error: {
            statusCode: 409,
            name: "Error",
            message: "Erreur lors de la création du compte",
          },
        });
      }

      const { name, type, spemale, spefemale, classe } = request.body;
      const breedmale = parseInt(request.body.breedmale, 10);
      const breedfemale = parseInt(request.body.breedfemale, 10);

      const character = await Character.create({
        name: name,
        breed_male: breedmale,
        breed_female: breedfemale,
        account_id: accountId,
        speMale: spemale,
        speFemale: spefemale,
        class: classe,
        type: type,
      });

      response.redirect(`/${accountId}/characters`);
    } catch (err) {
      console.log(err);
      return response.status(500).render("error", {
        error: {
          statusCode: 500,
          name: "Error",
          message: "Erreur lors de la création du personnage",
        },
      });
    }
  },

  getAllCharactersPage: async (request, response) => {
    try {
      const serverId = parseInt(request.query.server, 10);

      let includeOptions = [
        {
          association: "account",
          where: { user_id: request.session.user.id },
          include: [
            {
              association: "user",
            },
            {
              association: "server",
              where: {},
            },
          ],
        },
        {
          association: "breedFemale",
        },
        {
          association: "breedMale",
        },
      ];

      if (!isNaN(serverId)) {
        includeOptions[0].include[1].where.id = serverId;
      }

      const characters = await Character.findAll({
        include: includeOptions,
      });

      const breeds = await Breed.findAll();

      const charactersFormatted = characters.map((character) => {
        const updated_at = dayjs(character.updated_at)
          .locale("fr")
          .format("dddd DD/MM/YY [à] HH[h]mm");
        const birth = dayjs(character.updated_at)
          .locale("fr")
          .add(character.breedFemale.gestation, "minute")
          .format("dddd DD/MM/YY [à] HH[h]mm");
        return {
          ...character.toJSON(),
          updated_at,
          birth,
        };
      });
      
      response.render("allCharacters", { characters:charactersFormatted, breeds });
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

module.exports = characterController;
