/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const {
  Rotate,
} = require('../models/index.js');

const ApiError = require('../errors/api.error.js');

const rotateController = {

  addRotate: async (request, response, next) => {
    const userId = parseInt(request.session?.user?.id, 10);

    if (Number.isNaN(userId) || userId <= 0) {
      const err = new ApiError(
        'Vous devez être connecté pour créer une rotation.',
        { httpStatus: 401 },
      );
      return next(err);
    }
    const {
      name, color, classe,
    } = request.body;

    const rotate = await Rotate.create({
      name,
      color,
      class: classe,
      user_id: userId,
    });

    return response.redirect('/public');
  },

  deleteRotate: async (request, response, next) => {
    const { id } = request.params;
    const rotate = await Rotate.findByPk(id);
    if (!rotate) {
      const err = new ApiError(
        'La rotation n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }
    const rotateDeleted = await Rotate.destroy({
      where: {
        id,
        user_id: request.session.user.id,
      },
    });
    if (rotateDeleted) {
      return response.status(204).json();
    }
    const err = new ApiError(
      'Erreur lors de la suppression de la rotation.',
      { httpStatus: 400 },
    );
    return next(err);
  },

  updateRotate: async (request, response, next) => {
    const {
      name,
      color,
      classe,
    } = request.body;

    const selectedRotate = await Rotate.findByPk(request.params.id);

    if (!selectedRotate) {
      const err = new ApiError(
        'La rotation n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    const updatedRotate = await selectedRotate.update({
      name,
      color,
      class: classe,
    });

    if (updatedRotate) {
      const { ...updatedData } = updatedRotate.toJSON();
      return response.json(updatedData);
    }
    const err = new ApiError(
      'Erreur lors de la modification de la rotation.',
      { httpStatus: 400 },
    );
    return next(err);
  },

  updateStepsRotate: async (request, response, next) => {
    const selectedRotate = await Rotate.findByPk(request.params.id);
    const updatedData = {};

    if (!selectedRotate) {
      const err = new ApiError(
        'La rotation n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
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

    const updatedRotate = await selectedRotate.update(
      updatedData,
    );

    if (!updatedRotate) {
      const err = new ApiError(
        'Erreur lors de la modification des étapes de la rotation.',
        { httpStatus: 400 },
      );
      return next(err);
    }

    return response.json(updatedRotate);
  },

  updateTime: async (request, response, next) => {
    const {
      time,
    } = request.body;

    const selectedRotate = await Rotate.findByPk(request.params.id);

    if (!selectedRotate) {
      const err = new ApiError(
        'La rotation n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    const updatedRotate = await selectedRotate.update({
      time,
    });

    if (updatedRotate) {
      return response.json(updatedRotate);
    }

    const err = new ApiError(
      'Erreur lors de la modification de l\'heure de la rotation.',
      { httpStatus: 400 },
    );
    return next(err);
  },
};

module.exports = rotateController;
