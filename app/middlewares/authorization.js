const authorizationMiddleware = {
  isConnected(request, response, next) {
    if (request.session?.user) {
      return next();
    }
    return response.status(401).json({ error: 'Veuillez vous connecter pour accéder à ce contenu.' });
  },

  canSignup(request, response, next) {
    if (request.session?.user) {
      response.redirect('/profil');
    } else {
      next();
    }
  },

  isConnectedAndRedirect(request, response, next) {
    if (request.session?.user) {
      return next();
    }
    return response.redirect('/signin');
  },

  isAdmin(request, response, next) {
    // utilisateur non connecté
    if (!request.session?.user) {
      return response.render('error', {
        error: {
          statusCode: 401,
          name: 'Unauthorized',
          message: 'Veuillez vous connecter pour accéder à cette page',
        },
      });
    }
    // utilisateur connecté mais pas admin
    if (request.session.user.role !== 'admin') {
      return response.render('error', {
        error: {
          statusCode: 403,
          name: 'Forbidden',
          message: "Vous n'êtes pas autorisé à accéder à cette page",
        },
      });
    }
    return next();
  },
};

module.exports = authorizationMiddleware;
