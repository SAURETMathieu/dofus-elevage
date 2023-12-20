const { User } = require('../models/index.js');

// https://sequelize.org/docs/v6/core-concepts/model-instances/

const userController = {
  async getUsers(request, response) {
    const users = await User.findAll({
      order: ['id'],
    });
    response.json(users);
  },
  async getUser(request, response) {
    const user = await User.findByPk(request.params.id);
    response.json(user);
  },
  async postUser(request, response) {
    // on crée l'objet User et on le sauvegarde en DB
    const user = await User.create(request.body);
    response.json(user);
  },
  async patchUser(request, response) {
    const user = await User.findByPk(request.params.id);
    // on modifie l'objet User et on le sauvegarde en DB
    await user.update(request.body);
    response.json(user);
  },
  async deleteUser(request, response) {
    const user = await User.findByPk(request.params.id);
    // on efface l'objet User de la DB
    await user.destroy();
    response.json({ message: `user ${request.params.id} deleted` });
  },
};

module.exports = userController;
