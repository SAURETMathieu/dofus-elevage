const bcrypt = require("bcrypt");

const { User } = require("../models");

const authController = {
  getRegisterPage: (request, response) => {
    response.render("signup");
  },

  getConnectionPage: (request, response) => {
    response.render("signin");
  },

  getProfilPage: (request, response) => {
    response.render("profil");
  },

  postSignup: async (request, response) => {
    try {
      const { firstname, lastname, email, pseudo, password, passwordConfirm } =
        request.body;
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return response.status(409).json({ error: "Email déjà utilisé" });
      }
      if (password !== passwordConfirm) {
        return response
          .status(422)
          .json({ error: "Les mots de passes ne sont pas identiques" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstname,
        lastname,
        email,
        pseudo,
        password: hashedPassword,
      });
      response.status(201).json({ message: "Compte crée avec succès" });
    } catch (err) {
      console.log(err);
      return response
        .status(500)
        .json({ error: "Erreur lors de la création du compte" });
    }
  },

  postSignin: async (request, response) => {
    try {
      const { email, password, remember } = request.body;
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        const isValidPassword = await bcrypt.compare(
          password,
          existingUser.password
        );
        if (isValidPassword) {
          if (remember === "on") {
            request.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7;
          }
          request.session.user = existingUser;
          request.session.user.password = null;

          return response.status(200).json({ message: "Connexion réussie" });
        }
      }

      return response
        .status(401)
        .json({ error: "Mot de passe ou email incorrect" });
    } catch (err) {
      console.log(err);
      return response
        .status(500)
        .json({ error: "Erreur lors de la connexion" });
    }
  },

  getSignout: (request, response) => {
    request.session.destroy(() => {
      response.redirect("/");
    });
  },
};

module.exports = authController;
