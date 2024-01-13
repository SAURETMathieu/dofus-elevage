const bcrypt = require('bcrypt');
const ApiError = require('../errors/api.error.js');
const { User } = require('../models/index.js');

const authController = {
  getRegisterPage: (request, response) => {
    response.render('signup');
  },

  getConnectionPage: (request, response) => {
    response.render('signin');
  },

  getProfilPage: (request, response) => {
    response.render('profil');
  },

  postSignup: async (request, response, next) => {
    const {
      firstname, lastname, email, pseudo, password, passwordconfirm,
    } = request.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      const err = new ApiError(
        'Email déjà utilisé.',
        { httpStatus: 409 },
      );
      return next(err);
    }
    if (password !== passwordconfirm) {
      const err = new ApiError(
        'Les mots de passes ne sont pas identiques.',
        { httpStatus: 422 },
      );
      return next(err);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      email,
      pseudo,
      password: hashedPassword,
    });
    if (!user) {
      const err = new ApiError(
        'Erreur lors de la création du compte.',
        { httpStatus: 400 },
      );
      return next(err);
    }
    return response.status(201).json({ message: 'Compte crée avec succès' });
  },

  postSignin: async (request, response, next) => {
    const { email, password, remember } = request.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password,
      );
      if (isValidPassword) {
        if (remember === 'on') {
          request.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7;
        }
        request.session.user = existingUser;
        request.session.user.password = null;

        return response.status(200).json({ message: 'Connexion réussie' });
      }
    }

    const err = new ApiError(
      'Mot de passe ou email incorrect.',
      { httpStatus: 401 },
    );
    return next(err);
  },

  getSignout: (request, response) => {
    request.session.destroy(() => {
      response.redirect('/');
    });
  },

};

module.exports = authController;
