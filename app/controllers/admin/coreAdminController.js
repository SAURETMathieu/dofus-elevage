const ApiError = require('../../errors/api.error.js');

class CoreAdminController {
  constructor(model, view, route, type) {
    this.model = model;
    this.view = view;
    this.route = route;
    this.type = type;
  }

  async getAll(_, response) {
    const rows = await this.model.findAll();
    const { type } = this;
    const attributes = Object.keys(this.model.rawAttributes)
      .filter((attributeName) => this.model
        .rawAttributes[attributeName]
        .type
        .key !== 'BOOLEAN');
    return response.render(this.view, { rows, attributes, type });
  }

  async getByPk({ params }, response, next) {
    const { id } = params;
    const row = await this.model.findByPk(id);
    if (!row) {
      return next();
    }
    return response.status(200).json(row);
  }

  async create({ body }, response) {
    const row = await this.model.create(body);
    response.status(200).json(row);
  }

  async update({ params, body }, response, next) {
    const { id } = params;
    const elementToUpdate = await this.model.findByPk(id);
    if (!elementToUpdate) {
      const err = new ApiError(
        'L\'élement n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }
    const row = await this.model.update(id, body);
    if (!row) {
      return next();
    }
    return response.status(200).json(row);
  }

  async delete({ params }, response, next) {
    const { id } = params;
    const elementToDelete = await this.model.findByPk(id);
    if (!elementToDelete) {
      const err = new ApiError(
        'L\'élement n\'existe pas.',
        { httpStatus: 404 },
      );
      return next(err);
    }
    const deleted = await elementToDelete.destroy();
    if (!deleted) {
      return next();
    }
    return response.status(204).end();
  }
}

module.exports = CoreAdminController;
