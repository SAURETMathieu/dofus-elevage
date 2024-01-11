// eslint-disable-next-line no-unused-vars
const { Op } = require('sequelize');
const { Server } = require('../models/index.js');

const mainController = {
  getHomePage: (request, response) => {
    response.render('homepage');
  },

  getPublicPage: (request, response) => {
    response.render('public');
  },

  getPrivatePage: (request, response) => {
    response.render('private');
  },

  getGestionPage: (request, response) => {
    response.render('gestion');
  },

  getNaissancesPage: (request, response) => {
    response.render('naissances');
  },

  getProfilPage: (request, response) => {
    response.render('profil');
  },

  getServersPage: async (request, response, next) => {
    try {
      const servers = await Server.findAll();
      response.render('servers', { servers });
    } catch {
      next();
    }
  },

  getErrorPage: (request, response) => {
    response.render('404');
  },
};

module.exports = mainController;
