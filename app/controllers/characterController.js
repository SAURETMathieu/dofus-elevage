const dayjs = require('dayjs');
const {
  Server, Account, Character, Breed, Rotate,
} = require('../models/index.js');
// eslint-disable-next-line import/extensions
require('dayjs/locale/fr');

const characterController = {
  addCharacter: async (request, response) => {
    try {
      const id = parseInt(request.params.id, 10);
      const accountId = parseInt(request.params.accountId, 10);

      if (!request.session?.user?.id) {
        return response.status(403).render('error', {
          error: {
            statusCode: 403,
            name: 'Error',
            message: 'Vous devez être connecté pour créer un personnage.',
          },
        });
      }

      if (id !== request.session.user.id) {
        return response.status(409).render('error', {
          error: {
            statusCode: 409,
            name: 'Error',
            message: 'Erreur lors de la création du personnage.',
          },
        });
      }

      const {
        name, type, speMale, speFemale, classe,
      } = request.body;
      const breedMale = parseInt(request.body.breedMale, 10);
      const breedFemale = parseInt(request.body.breedFemale, 10);

      const character = await Character.create({
        name,
        breed_male: breedMale,
        breed_female: breedFemale,
        account_id: accountId,
        speMale,
        speFemale,
        class: classe,
        type,
      });

      if (!character) {
        throw new Error('Erreur lors de la création du personnage');
      }

      return response.redirect(`/accounts/${accountId}/characters`);
    } catch (err) {
      return response.status(500).render('error', {
        error: {
          statusCode: 500,
          name: 'Error',
          message: 'Erreur lors de la création du personnage',
        },
      });
    }
  },

  deleteCharacter: async (request, response) => {
    try {
      const characterId = parseInt(request.params.id, 10);
      const foundCharacter = await Character.findByPk(characterId, {
        include: ['account'],
      });
      if (foundCharacter.account.user_id !== request.session.user.id) {
        return response.status(400).render('error', {
          error: {
            statusCode: 400,
            name: 'Interdit',
            message: 'Pas autorisé',
          },
        });
      }
      // eslint-disable-next-line no-unused-vars
      const result = await foundCharacter.destroy();
      return response.status(204).end();
    } catch (err) {
      return response.status(500).render('error', {
        error: {
          statusCode: 500,
          name: 'Internal Server Error',
          message:
            'Une erreure est survenue lors de la récupération des personnages',
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
        date,
        dateBirth,
        nbMale,
        nbFemale,
      } = request.body;

      const selectedCharacter = await Character.findByPk(request.params.id);
      const updatedData = {};
      let accountExist; let breedMaleExist; let
        breedFemaleExist;

      if (!selectedCharacter) {
        return response.status(404).json({ error: 'Character not found.' });
      }

      if (accountId) {
        accountExist = await Account.findByPk(accountId, {
          include: 'server',
        });

        if (!accountExist) {
          return response.status(404).json({ error: 'Account not found.' });
        }
        updatedData.account_id = accountId;
      }

      if (breedMale && breedMale) {
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
        if (type === 'private') {
          updatedData.rotate_id = null;
        }
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
      if (date !== undefined && date !== null) {
        updatedData.date = date;
      }
      if (dateBirth !== undefined && dateBirth !== null) {
        updatedData.dateBirth = dateBirth;
      }
      if (nbMale !== undefined && nbMale !== null) {
        updatedData.nbMale = nbMale;
      }
      if (nbFemale !== undefined && nbFemale !== null) {
        updatedData.nbFemale = nbFemale;
      }

      const updatedCharacter = await selectedCharacter.update(
        updatedData,
      );

      if (!updatedCharacter) {
        return response.status(500).json({ error: 'Internal server error' });
      }

      if (breedMaleExist) {
        updatedCharacter.breed_male = breedMaleExist;
      }

      if (breedFemaleExist) {
        updatedCharacter.breed_female = breedFemaleExist;
      }

      if (accountExist) {
        updatedCharacter.account_id = accountExist;
      }

      return response.json(updatedCharacter);
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  },

  updateStepsCharacter: async (request, response) => {
    try {
      const selectedCharacter = await Character.findByPk(request.params.id);
      const updatedData = {};

      if (!selectedCharacter) {
        return response.status(404).json({ error: 'Character not found.' });
      }

      const variablesToCheck = ['mature', 'feed', 'ride', 'agressive',
        'serene', 'lovem', 'endurancem',
        'lovef', 'endurancef'];

      variablesToCheck.forEach((variable) => {
        if (Object.prototype.hasOwnProperty.call(request.body, variable)
         && request.body[variable] !== undefined
         && request.body[variable] !== null) {
          updatedData[variable] = request.body[variable];
        }
      });

      const updatedCharacter = await selectedCharacter.update(
        updatedData,
      );

      if (!updatedCharacter) {
        return response.status(500).json({ error: 'Internal server error' });
      }

      return response.json(updatedCharacter);
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  },

  updateRotateCharacter: async (request, response) => {
    try {
      const { rotateId } = request.body;
      let parsedRotateId = rotateId;
      const selectedCharacter = await Character.findByPk(request.params.id);

      if (!selectedCharacter) {
        return response.status(404).json({ error: 'Character not found.' });
      }

      if (rotateId !== null) {
        parsedRotateId = parseInt(rotateId, 10);
        const selectedRotate = await Rotate.findByPk(parsedRotateId);

        if (!selectedRotate) {
          return response.status(404).json({ error: 'Rotate not found.' });
        }
      }

      const updatedCharacter = await selectedCharacter.update(
        { rotate_id: parsedRotateId },
      );

      if (!updatedCharacter) {
        return response.status(500).json({ error: 'Internal server error' });
      }

      return response.json(updatedCharacter);
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  },

  getAllCharactersPage: async (request, response) => {
    try {
      const serverId = parseInt(request.query.server, 10);
      const accountId = parseInt(request.params.accountId, 10);

      let account;
      let serverName;
      let idToRequest = parseInt(request.session?.user?.id, 10);
      if (Number.isNaN(idToRequest)) {
        idToRequest = 16;
      }

      const includeOptions = [
        {
          association: 'account',
          where: { user_id: idToRequest },
          include: [
            {
              association: 'user',
            },
            {
              association: 'server',
              where: {},
            },
          ],
        },
        {
          association: 'breedFemale',
        },
        {
          association: 'breedMale',
        },
      ];

      if (accountId) {
        account = await Account.findOne({ where: { id: accountId } });

        if (!account || account.user_id !== idToRequest) {
          return response.status(403).render('error', {
            error: {
              statusCode: 403,
              name: 'Acces interdit',
              message:
                "Vous n'avez pas le permission d'accéder aux personnages de ce compte",
            },
          });
        }
        includeOptions[0].where.id = accountId;
      }

      if (!Number.isNaN(serverId)) {
        includeOptions[0].include[1].where.id = serverId;
      }

      const characters = await Character.findAll({
        include: includeOptions,
      });

      const breeds = await Breed.findAll();
      const accounts = await Account.findAll({
        where: { user_id: idToRequest },
        include: [
          {
            association: 'server',
          },
        ],
      });

      if (!Number.isNaN(serverId)) {
        const server = await Server.findOne({ where: { id: serverId } });
        if (server) {
          serverName = server.name;
        } else {
          return response.status(404).render('error', {
            error: {
              statusCode: 403,
              name: 'Server not found',
              message: "Le serveur n'existe pas",
            },
          });
        }
      }

      const charactersFormatted = characters.map((character) => {
        // eslint-disable-next-line no-param-reassign
        character.account.user.password = null;

        let dayRepro = 'null';
        let dateRepro;
        let hoursRepro;
        let dayBirth = 'null';
        let dateBirth;
        let hoursBirth;
        let condition = 'Feconde';

        const time = new Date(character.date).getTime();
        const timestamp = new Date(character.dateBirth).getTime();

        if (character.date) {
          if (!dayjs(character.dateBirth).isBefore(dayjs(), 'minute')) {
            condition = 'Fecondee';
          }
          const dayReproFormat = dayjs(character.date)
            .locale('fr')
            .format('dddd');
          dayRepro = dayReproFormat.charAt(0).toUpperCase() + dayReproFormat.slice(1);

          dateRepro = dayjs(character.date)
            .locale('fr')
            .format('DD/MM/YY');

          hoursRepro = dayjs(character.date)
            .locale('fr')
            .format('HH[h]mm');

          const dayBirthFormat = dayjs(character.dateBirth)
            .locale('fr')
            .format('dddd');
          dayBirth = dayBirthFormat.charAt(0).toUpperCase() + dayBirthFormat.slice(1);

          dateBirth = dayjs(character.dateBirth)
            .locale('fr')
            .format('DD/MM/YY');

          hoursBirth = dayjs(character.dateBirth)
            .locale('fr')
            .format('HH[h]mm');
        }

        if (character.reproduction > 19) {
          condition = 'Sterile';
        }

        return {
          ...character.toJSON(),
          dayRepro,
          dateRepro,
          hoursRepro,
          dayBirth,
          dateBirth,
          hoursBirth,
          condition,
          timestamp,
          time,
        };
      });

      return response.render('characters', {
        characters: charactersFormatted,
        breeds,
        serverName,
        accounts,
        account,
      });
    } catch (err) {
      return response.status(500).render('error', {
        error: {
          statusCode: 500,
          name: 'Internal Server Error',
          message:
            'Une erreure est survenue lors de la récupération des personnages',
        },
      });
    }
  },
};

module.exports = characterController;
