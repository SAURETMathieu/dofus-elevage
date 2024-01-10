const { User } = require('../models/index.js');

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
    const user = await User.create(request.body);
    response.json(user);
  },
  async patchUser(request, response) {
    const user = await User.findByPk(request.params.id);
    await user.update(request.body);
    response.json(user);
  },
  async deleteUser(request, response) {
    const user = await User.findByPk(request.params.id);
    if (!user) {
      response.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    response.json({ message: `user ${request.params.id} deleted` });
  },
};

module.exports = userController;
