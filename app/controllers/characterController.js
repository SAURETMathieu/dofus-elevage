const {
  Server, Account, Character, Breed, Rotate, User,
} = require('../models/index.js');
// eslint-disable-next-line import/extensions
const ApiError = require('../errors/api.error.js');
const formatCharacter = require('../utils/formatCharacter.js');

const characterController = {
  addCharacter: async (request, response, next) => {
    const id = parseInt(request.params.id, 10);
    const accountId = parseInt(request.params.accountId, 10);

    if (!request.session?.user?.id) {
      return response.redirect(`/accounts/${accountId}/characters`);
    }

    if (id !== request.session.user.id) {
      const err = new ApiError(
        'Erreur lors de la création du personnage.',
        { httpStatus: 409 },
      );
      return next(err);
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
      const err = new ApiError(
        'Erreur lors de la création du personnage.',
        { httpStatus: 400 },
      );
      return next(err);
    }
    return response.redirect(`/accounts/${accountId}/characters`);
  },

  deleteCharacter: async (request, response, next) => {
    const characterId = parseInt(request.params.id, 10);
    const foundCharacter = await Character.findByPk(characterId, {
      include: ['account'],
    });
    if (foundCharacter.account.user_id !== request.session.user.id) {
      const err = new ApiError(
        'Vous n\'avez pas le droit de supprimer ce personnage.',
        { httpStatus: 403 },
      );
      return next(err);
    }
    // eslint-disable-next-line no-unused-vars
    const result = await foundCharacter.destroy();
    return response.status(204).end();
  },

  updateCharacter: async (request, response, next) => {
    const {
      accountId,
      breedMale,
      breedFemale,
    } = request.body;

    const selectedCharacter = await Character.findByPk(request.params.id);
    const updatedData = {};
    let accountExist; let breedMaleExist; let
      breedFemaleExist;

    if (!selectedCharacter) {
      const err = new ApiError(
        'Le personnage n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    if (accountId) {
      accountExist = await Account.findByPk(accountId, {
        include: 'server',
      });

      if (!accountExist) {
        const err = new ApiError(
          'Le compte n\'existe pas',
          { httpStatus: 404 },
        );
        return next(err);
      }
      updatedData.account_id = accountId;
    }

    if (breedMale && breedMale) {
      breedMaleExist = await Breed.findByPk(breedMale);
      breedFemaleExist = await Breed.findByPk(breedFemale);

      if (!breedMaleExist || !breedFemaleExist) {
        const err = new ApiError(
          'La race de dragodinde n\'existe pas',
          { httpStatus: 404 },
        );
        return next(err);
      }
      updatedData.breed_male = breedMale;
      updatedData.breed_female = breedFemale;
    }

    // Map fields in the request body that differ from the column names
    // in the character table
    const fieldMappings = {
      classe: 'class',
      nbrepro: 'reproduction',
    };
    const fieldsToCheck = ['name', 'type', 'nbrepro', 'classe', 'speMale', 'speFemale', 'date', 'dateBirth', 'nbMale', 'nbFemale'];

    // Check each column of the character's table to update
    // only the columns with new values
    fieldsToCheck.forEach((field) => {
      const mappedField = fieldMappings[field] || field;
      if (
        Object.prototype.hasOwnProperty.call(request.body, field)
        && request.body[field] !== undefined
        && request.body[field] !== null
      ) {
        if (mappedField === 'type' && request.body[field] === 'private') {
          // If the character's type is private,
          // the character cannot be included in the rotation then null value
          updatedData.rotate_id = null;
        }
        updatedData[mappedField] = request.body[field];
      }
    });
    const updatedCharacter = await selectedCharacter.update(
      updatedData,
    );

    if (!updatedCharacter) {
      const err = new ApiError(
        'Erreur lors de la modification du personnage.',
        { httpStatus: 400 },
      );
      return next(err);
    }

    // join values of Breeds to Characters for the render
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
  },

  updateStepsCharacter: async (request, response, next) => {
    const selectedCharacter = await Character.findByPk(request.params.id);
    const updatedData = {};

    if (!selectedCharacter) {
      const err = new ApiError(
        'Le personnage n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    // Map fields in the request body to check the steps column names
    // in the character table
    const fieldsToCheck = ['mature', 'feed', 'ride', 'agressive',
      'serene', 'lovem', 'endurancem',
      'lovef', 'endurancef'];

    fieldsToCheck.forEach((variable) => {
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
      const err = new ApiError(
        'Erreur lors de la modification du personnage.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    return response.json(updatedCharacter);
  },

  updateRotateCharacter: async (request, response, next) => {
    const { rotateId } = request.body;
    let parsedRotateId = rotateId;
    const selectedCharacter = await Character.findByPk(request.params.id);

    if (!selectedCharacter) {
      const err = new ApiError(
        'La personnage n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    if (rotateId !== null) {
      parsedRotateId = parseInt(rotateId, 10);
      const selectedRotate = await Rotate.findByPk(parsedRotateId);

      if (!selectedRotate) {
        const err = new ApiError(
          'La rotation n\'existe pas.',
          { httpStatus: 404 },
        );
        return next(err);
      }
    }

    const updatedCharacter = await selectedCharacter.update(
      { rotate_id: parsedRotateId },
    );

    if (!updatedCharacter) {
      const err = new ApiError(
        'Erreur lors de la modification du personnage.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    return response.json(updatedCharacter);
  },

  getAllCharactersPage: async (request, response, next) => {
    const serverId = parseInt(request.query.server, 10);
    const accountId = parseInt(request.params.accountId, 10);

    let account;
    let serverName;
    let idToRequest = parseInt(request.session?.user?.id, 10);

    // Assign example values' IDs for the database request
    // if the visitor isn't connected
    if (Number.isNaN(idToRequest)) {
      const exampleUser = await User.findOne({
        attributes: ['id'],
        where: { email: 'example@example.example' },
      });
      idToRequest = exampleUser.id;
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

    // Add options to the request if the account ID is in the URL parameters
    if (accountId) {
      account = await Account.findOne({ where: { id: accountId } });

      if (!account || account.user_id !== idToRequest) {
        const err = new ApiError(
          'Vous n\'avez pas le permission d\'accéder aux personnages de ce compte.',
          { httpStatus: 403 },
        );
        return next(err);
      }
      includeOptions[0].where.id = accountId;
    }

    // Add options to the request if the server ID is in the URL query
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
        const err = new ApiError(
          'Le serveur n\'existe pas.',
          { httpStatus: 404 },
        );
        return next(err);
      }
    }

    // Change the date format and condition for rendering
    const charactersFormatted = characters.map(formatCharacter);

    return response.render('characters', {
      characters: charactersFormatted,
      breeds,
      serverName,
      accounts,
      account,
    });
  },
};

module.exports = characterController;
