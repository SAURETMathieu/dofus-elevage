const { User, Server, Account, Character, Breed } = require("../models");
const dayjs = require("dayjs");
require("dayjs/locale/fr");

const characterController = {
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

      const { name, type, speMale, speFemale, classe } = request.body;
      const breedMale = parseInt(request.body.breedMale, 10);
      const breedFemale = parseInt(request.body.breedFemale, 10);

      const character = await Character.create({
        name: name,
        breed_male: breedMale,
        breed_female: breedFemale,
        account_id: accountId,
        speMale,
        speFemale,
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

  deleteCharacter: async (request, response) => {
    try {
      const characterId = parseInt(request.params.id, 10);
      const foundCharacter = await Character.findByPk(characterId, {
        include: ["account"],
      });
      if (foundCharacter.account.user_id !== request.session.user.id) {
        return response.status(400).render("error", {
          error: {
            statusCode: 400,
            name: "Interdit",
            message: "Pas autorisé",
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

  updateCharacter: async (request, response) => {
    try {
      const {
        name,
        type,
        nbrepro,
        accountId,
        classe,
        speMale,
        speFemale,
        breedMale,
        breedFemale,
      } = request.body;

      const selectedCharacter = await Character.findByPk(request.params.id);

      if (!selectedCharacter) {
        return response.status(404).json({ error: "Character not found." });
      }

      const account = await Account.findByPk(accountId);

      if (!account) {
        return response.status(404).json({ error: "Account not found." });
      }

      const breedMaleExist = await Breed.findByPk(breedMale);
      const breedFemaleExist = await Breed.findByPk(breedFemale);

      if (!breedMaleExist || !breedFemaleExist) {
        return response.status(404).json({ error: "Breed doesn't exist" });
      }
      const updatedCharacter = await selectedCharacter.update({
        name,
        type,
        reproduction: nbrepro,
        account_id: accountId,
        class: classe,
        speMale,
        speFemale,
        breed_male: breedMale,
        breed_female: breedFemale,
      });
      if (updatedCharacter) {
        updatedCharacter.breed_male = breedMaleExist;
        updatedCharacter.breed_female = breedFemaleExist;
      }
      response.json(updatedCharacter);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: "Internal server error" });
    }
  },

  getAllCharactersPage: async (request, response) => {
    try {
      const serverId = parseInt(request.query.server, 10);
      const accountId = parseInt(request.params.accountId, 10);

      let account = undefined;
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

      if (accountId) {
        account = await Account.findOne({ where: { id: accountId } });

        if (!account || account.user_id !== request.session.user.id) {
          return response.status(403).render("error", {
            error: {
              statusCode: 403,
              name: "Acces interdit",
              message:
                "Vous n'avez pas le permission d'accéder aux personnages de ce compte",
            },
          });
        }
        includeOptions[0].where.id = accountId;
      }

      if (!isNaN(serverId)) {
        includeOptions[0].include[1].where.id = serverId;
      }

      const characters = await Character.findAll({
        include: includeOptions,
      });

      const breeds = await Breed.findAll();
      const accounts = await Account.findAll({
        where: { user_id: request.session.user.id },
        include: [
          {
            association: "server",
          },
        ],
      });

      if (!isNaN(serverId)) {
        server = await Server.findOne({ where: { id: serverId } });
        if(server){
          serverName=server.name;
        }else{
          return response.status(404).render("error", {
            error: {
              statusCode: 403,
              name: "Server not found",
              message:
                "Le serveur n'existe pas",
            },
          });
        }
      }

      const charactersFormatted = characters.map((character) => {
        character.account.user.password = null;
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
        serverName,
        accounts,
        account
      });
    } catch (err) {
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
