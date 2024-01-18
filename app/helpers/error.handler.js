/* eslint-disable no-console */
const logger = require('./index.logger.js');
const { sendEmail } = require('./nodemailer.js');

// eslint-disable-next-line no-unused-vars

// Send an email to us to alert about errors and server crashes
module.exports = async (err, request, response) => {
  try {
    if (err.httpStatus === 500) {
      logger.error('Error 500', err);
      const destinataire = process.env.MAIL;
      const sujet = 'Erreur 500 sur le site';
      const contenu = `Le site rencontre des problèmes. 
      Détails de l'erreur :\n\n${err.stack}`;

      const envoiReussi = await sendEmail(destinataire, sujet, contenu);

      if (!envoiReussi) {
        console.error('Erreur lors de l\'envoi de l\'e-mail.');
      }
    }

    return response.status(err.httpStatus).json({ error: err.message });
  } catch (error) {
    logger.error('Error in error handling middleware', error);
    return response.status(500).json('Erreur lors de la gestion de l\'erreur.');
  }
};
