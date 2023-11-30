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

      response.redirect(`/accounts/${accountId}/characters`);
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
      let serverName = undefined;
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

      if (!isNaN(serverId)) {
        serverName = characters[0].account.server.name;
      }

      const breeds = await Breed.findAll();

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

      response.render("allCharacters", {
        characters: charactersFormatted,
        breeds,
        serverName,
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

  deleteCharacter: async (request, response) => {
    try {
      const characterId = parseInt(request.params.id, 10);
      const foundCharacter = await Character.findByPk(characterId,{include:["account"]});
      if(foundCharacter.account.user_id !== request.session.user.id){
        return response.status(400).render("error", {
          error: {
            statusCode: 400,
            name: "Interdit",
            message:
              "Pas autorisé",
          },
        });
      }
      const result = await foundCharacter.destroy();
      return response.status(204).end();
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
