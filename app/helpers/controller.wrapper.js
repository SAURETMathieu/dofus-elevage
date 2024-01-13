const ApiError = require('../errors/api.error.js');

module.exports = (controller) => async (request, response, next) => {
  try {
    await controller(request, response, next);
  } catch (err) {
    next(new ApiError(err.message, { httpStatus: 500 }));
  }
};
