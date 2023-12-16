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
      const updatedData = {};
      let accountExist, breedMaleExist, breedFemaleExist;

      if (!selectedCharacter) {
        return response.status(404).json({ error: "Character not found." });
      }

      if(accountId){
        accountExist = await Account.findByPk(accountId, {
        include: "server",
        });

        if (!accountExist) {
          return response.status(404).json({ error: "Account not found." });
        }
        updatedData.account_id = accountId;
      }
      
      if(breedMale && breedMale){
        breedMaleExist = await Breed.findByPk(breedMale);
        breedFemaleExist = await Breed.findByPk(breedFemale);

        if (!breedMaleExist || !breedFemaleExist) {
          return response.status(404).json({ error: "Breed doesn't exist" });
        }
        updatedData.breed_male = breedMale;
        updatedData.breed_female = breedFemale;
      }

      if (name !== undefined && name !== null) {
        updatedData.name = name;
      }
      if (type !== undefined && type !== null) {
        updatedData.type = type;
      }
      if (nbrepro !== undefined && nbrepro !== null) {
        updatedData.reproduction = nbrepro;
      }
      if (classe !== undefined && classe !== null) {
        updatedData.class = classe;
      }
      if (speMale !== undefined && speMale !== null) {
        updatedData.speMale = speMale;
      }
      if (speFemale !== undefined && speFemale !== null) {
        updatedData.speFemale = speFemale;
      }
    
      const updatedCharacter = await selectedCharacter.update(
        updatedData
      );

      if (!updatedCharacter) {
        return response.status(500).json({ error: "Internal server error" });
      }

      if(breedMaleExist){
         updatedCharacter.breed_male = breedMaleExist;
      }

      if(breedFemaleExist){
        updatedCharacter.breed_female = breedFemaleExist;
      }

      if(accountExist){
        updatedCharacter.account_id = accountExist;
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
        if (server) {
          serverName = server.name;
        } else {
          return response.status(404).render("error", {
            error: {
              statusCode: 403,
              name: "Server not found",
              message: "Le serveur n'existe pas",
            },
          });
        }
      }

      const charactersFormatted = characters.map((character) => {
        character.account.user.password = null;

        let dayRepro = "null", dateRepro, hoursRepro, dayBirth = "null", dateBirth, hoursBirth;
        let condition = "Feconde";
        
        if(character.date){
          if(!dayjs(character.date).isBefore(dayjs(), 'minute')){
            condition = "Fecondee";
          }
          dayRepro = dayjs(character.updated_at)
            .locale("fr")
            .format("dddd");

          dateRepro = dayjs(character.updated_at)
            .locale("fr")
            .format("DD/MM/YY");

          hoursRepro = dayjs(character.updated_at)
            .locale("fr")
            .format("HH[h]mm");

          dayBirth = dayjs(character.updated_at)
            .locale("fr")
            .add(character.breedFemale.gestation, "minute")
            .format("dddd");

          dateBirth = dayjs(character.updated_at)
            .locale("fr")
            .add(character.breedFemale.gestation, "minute")
            .format("DD/MM/YY");

          hoursBirth = dayjs(character.updated_at)
            .locale("fr")
            .add(character.breedFemale.gestation, "minute")
            .format("HH[h]mm");

        }

        return {
          ...character.toJSON(),
          dayRepro,
          dateRepro,
          hoursRepro,
          dayBirth,
          dateBirth,
          hoursBirth,
          condition
        };
      });

      response.render("characters", {
        characters: charactersFormatted,
        breeds,
        serverName,
        accounts,
        account,
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
