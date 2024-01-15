/* eslint-disable no-unused-vars */
const Sequelize = require('sequelize');

const { User } = require('../models/index.js');

const ApiError = require('../errors/api.error.js');

const { sendEmail } = require('../helpers/nodemailer.js');

const supportController = {

  getSupportPage: (request, response) => {
    response.render('support');
  },

  postSupport: async (request, response, next) => {
    const userId = parseInt(request.params.id, 10);

    if (userId !== request.session.user.id) {
      const err = new ApiError(
        'Erreur lors de l\'envoi du message au support. Action interdite.',
        { httpStatus: 403 },
      );
      return next(err);
    }

    const user = await User.findByPk(userId);

    if (!user) {
      const err = new ApiError(
        'Erreur lors de la récupération de votre e-mail.',
        { httpStatus: 404 },
      );
      return next(err);
    }

    const currentDate = new Date();
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(currentDate);

    const {
      subject, message,
    } = request.body;

    const userEmail = user.email;
    const destinataire = process.env.MAIL;
    const contenu = `${subject}\n${formattedDate}\nEmail: ${userEmail}\n\n\n ${message}\n\n\n${user.lastname} ${user.firstname}`;

    const envoiReussi = await sendEmail(destinataire, subject, contenu);

    if (!envoiReussi) {
      const err = new ApiError(
        'Erreur lors de l\'envoi du message au support.',
        { httpStatus: 500 },
      );
      return next(err);
    }

    return response.status(204).end();
  },

};

module.exports = supportController;
