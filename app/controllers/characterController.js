const { User, Server, Account, Character, Breed } = require("../models");

const characterController = {
  getCharactersOnAccountPage: async (request, response) => {
    try {
      const accountId = parseInt(request.params.accountId, 10);

      const characters = await Character.findAll({
        where: { account_id: accountId },
        include: [
          {
            association: "account",
            include: [
              {
                association: "user",
              },
            ],
          },
          {
            association: "breedFemale",
          },
          {
            association: "breedMale",
          },
        ],
      });

      console.log(characters);
      const attributes = Object.keys(Character.tableAttributes);
      const breeds = await Breed.findAll();
      response.render("characters", { characters, breeds, accountId, attributes });
    } catch (err) {
      console.log(err);
      return response.render("error", {
        error: {
          statusCode: 409,
          name: "Error",
          message: err,
        },
      });
    }
  },

  addCharacter: async (request, response) => {
    try {
      const id = parseInt(request.params.id, 10);
      const accountId = parseInt(request.params.accountId, 10);
      if (id !== request.session.user.id) {
        response.render("error", {
          error: {
            statusCode: 409,
            name: "Error",
            message: "Erreur lors de la création du compte",
          },
        });
      }
      const { name, type, spemale, spefemale } = request.body;
      const breedmale = parseInt(request.body.breedmale, 10);
      const breedfemale = parseInt(request.body.breedfemale, 10);

      const character = await Character.create({
        name: name,
        breed_male: breedmale,
        breed_female: breedfemale,
        account_id: accountId,
        speMale: spemale,
        speFemale: spefemale,
        type: type,
      });
      response.redirect("/accounts");
    } catch (err) {
      console.log(err);
      return response.render("error", {
        error: {
          statusCode: 409,
          name: "Error",
          message: err,
        },
      });
    }
  },

  getCharactersPage: async (request, response) => {
    try {
      const characters = await Character.findAll({
        include: [
          {
            association: "account",
            include: [
              {
                association: "user",
              },
            ],
          },
        ],
      });

      const breeds = await Breed.findAll();

      console.log(characters);
      response.render("characters", { characters, breeds });
    } catch (err) {
      console.log(err);
      return response.render("error", {
        error: {
          statusCode: 409,
          name: "Error",
          message: err,
        },
      });
    }
  },
};

module.exports = characterController;
