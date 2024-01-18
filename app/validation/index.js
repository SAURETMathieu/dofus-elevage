const ApiError = require('../errors/api.error.js');

// Dynamize schema validations
function validate(schema, source = 'body') {
  return (request, response, next) => {
    const { error } = schema.validate(request[source]);
    if (error) {
      const err = new ApiError(
        error.message,
        { httpStatus: 400 },
      );
      return next(err);
    }
    return next();
  };
}

module.exports = validate;
