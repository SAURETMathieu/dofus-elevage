const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

const { User } = require('../models/index.js');

const ApiError = require('../errors/api.error.js');

const userController = {

  updateUser: async (request, response, next) => {
    const {
      firstname, lastname, email, pseudo, password, passwordconfirm,
    } = request.body;
    const updatedData = {};

    const id = parseInt(request.params.id, 10);

    if (id !== request.session.user.id) {
      const err = new ApiError(
        'Vous n\'avez pas le permission d\'accéder aux personnages de ce compte.',
        { httpStatus: 403 },
      );
      return next(err);
    }

    const user = await User.findByPk(id);

    if (!user) {
      const err = new ApiError(
        'Utilisateur introuvable.',
        { httpStatus: 404 },
      );
      return next(err);
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
        const err = new ApiError(
          'Email déjà utilisé.',
          { httpStatus: 409 },
        );
        return next(err);
      }
      updatedData.email = email;
    }

    if (password && passwordconfirm) {
      if (password !== passwordconfirm) {
        const err = new ApiError(
          'Les mots de passes ne sont pas identiques.',
          { httpStatus: 422 },
        );
        return next(err);
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
      const err = new ApiError(
        'Erreur lors de la modification du compte.',
        { httpStatus: 400 },
      );
      return next(err);
    }

    // Reassign new values for the session and set the password session value to null
    updatedUser.password = null;
    request.session.user = updatedUser;

    return response.status(200).json(updatedUser);
  },

  deleteUser: async (request, response, next) => {
    const userIdToDelete = parseInt(request.params.id, 10);
    const loggedInUserId = request.session.user.id;

    if (userIdToDelete !== loggedInUserId) {
      const err = new ApiError(
        'Vous n\'avez pas le droit de supprimer ce compte.',
        { httpStatus: 403 },
      );
      return next(err);
    }

    const userToDelete = await User.findByPk(userIdToDelete);

    if (!userToDelete) {
      const err = new ApiError(
        'Utilisateur introuvable.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    const isDeleted = await userToDelete.destroy();

    if (!isDeleted) {
      const err = new ApiError(
        'Echec lors de la suppression de votre compte.',
        { httpStatus: 400 },
      );
      return next(err);
    }

    request.session.destroy();
    return response.status(204).end();
  },
};

module.exports = userController;
