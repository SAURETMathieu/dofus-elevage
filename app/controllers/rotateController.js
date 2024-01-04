/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const {
  Server, Rotate,
} = require('../models/index.js');

const rotateController = {

  addRotate: async (request, response) => {
    try {
      const userId = parseInt(request.session?.user?.id, 10);

      if (Number.isNaN(userId) || userId <= 0) {
        return response.status(403).render('error', {
          error: {
            statusCode: 403,
            name: 'Error',
            message: 'Vous devez être connecté pour créer une rotation.',
          },
        });
      }

      const { name, color, server } = request.body;

      const rotate = await Rotate.create({
        name,
        color,
        server_id: server,
        user_id: userId,
      });

      return response.redirect('/private');
    } catch (err) {
      return response.status(500).render('error', {
        error: {
          statusCode: 500,
          name: 'Internal Server Error',
          message: 'Une erreur est survenue lors de la création de la rotation',
        },
      });
    }
  },

  deleteRotate: async (request, response, next) => {
    try {
      const { id } = request.params;
      const rotate = await Rotate.findByPk(id);
      if (!rotate) {
        return response.status(404).json({ error: 'Rotate not found.' });
      }
      const rotateDeleted = await Rotate.destroy({
        where: {
          id,
        },
      });

      if (rotateDeleted) {
        return response.status(201).json();
      }
      return response.status(400).json({ error: 'Erreur lors de la suppression de la rotation' });
    } catch (error) {
      return next();
    }
  },

  updateRotate: async (request, response) => {
    try {
      const {
        name,
        color,
        server,
      } = request.body;

      const selectedRotate = await Rotate.findByPk(request.params.id);

      if (!selectedRotate) {
        return response.status(404).json({ error: 'Rotate not found.' });
      }

      const serverExist = await Server.findByPk(server);

      if (!serverExist) {
        return response.status(404).json({ error: 'Server not found.' });
      }

      const updatedRotate = await selectedRotate.update({
        name,
        color,
        server_id: server,
      });

      if (updatedRotate) {
        const { server_id, ...updatedData } = updatedRotate.toJSON();
        updatedData.server = serverExist;
        return response.json(updatedData);
      }
      return response.status(404).json({ error: 'Rotate not found.' });
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = rotateController;
