const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

const { User } = require('../models/index.js');

const userController = {
  // getUsers: async (request, response) => {
  //   const users = await User.findAll({
  //     order: ['id'],
  //   });
  //   response.json(users);
  // },

  // getUser: async (request, response) => {
  //   const user = await User.findByPk(request.params.id);
  //   response.json(user);
  // },

  // postUser: async (request, response) => {
  //   const user = await User.create(request.body);
  //   response.json(user);
  // },

  updateUser: async (request, response) => {
    try {
      const {
        firstname, lastname, email, pseudo, password, passwordconfirm,
      } = request.body;
      // TODO finir
      const updatedData = {};

      const id = parseInt(request.params.id, 10);

      if (id !== request.session.user.id) {
        return response.status(403).render('error', {
          error: {
            statusCode: 403,
            name: 'Acces interdit',
            message:
              "Vous n'avez pas le permission d'accéder aux personnages de ce compte",
          },
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return response.status(404).json({ error: 'Utilisateur introuvable.' });
      }

      if (email) {
        const existingUser = await User.findOne({
          where: {
            email,
            id: {
              [Sequelize.Op.ne]: request.session.user.id,
            },
          },
        });
        if (existingUser) {
          return response.status(409).json({ error: 'Email déjà utilisé' });
        }
        updatedData.email = email;
      }

      if (password && passwordconfirm) {
        if (password !== passwordconfirm) {
          return response
            .status(422)
            .json({ error: 'Les mots de passes ne sont pas identiques' });
        }
        updatedData.password = await bcrypt.hash(password, 10);
      }

      if (firstname) {
        updatedData.firstname = firstname;
      }

      if (lastname) {
        updatedData.lastname = lastname;
      }

      if (pseudo) {
        updatedData.pseudo = pseudo;
      }

      const updatedUser = await user.update(
        updatedData,
      );
      if (!updatedUser) {
        return response
          .status(500)
          .json({ error: 'Erreur lors de la modification du compte' });
      }

      updatedUser.password = null;
      request.session.user = updatedUser;

      return response.status(200).json(updatedUser);
    } catch (err) {
      return response
        .status(500)
        .json({ error: 'Erreur lors de la modification du compte' });
    }
  },

  deleteUser: async (request, response) => {
    try {
      const userIdToDelete = parseInt(request.params.id, 10);
      const loggedInUserId = request.session.user.id;

      if (userIdToDelete !== loggedInUserId) {
        return response.status(403).json({ message: 'Acces interdit' });
      }

      const userToDelete = await User.findByPk(userIdToDelete);

      if (!userToDelete) {
        return response.status(404).json({ message: 'Utilisateur introuvable' });
      }

      const isDeleted = await userToDelete.destroy();

      if (!isDeleted) {
        return response.status(500).json({ message: 'Echec lors de la suppression de votre compte' });
      }

      request.session.destroy();
      return response.status(204).end();
    } catch (err) {
      return response.status(500).json({ error: 'Erreur lors de la suppression du compte' });
    }
  },
};

module.exports = userController;
