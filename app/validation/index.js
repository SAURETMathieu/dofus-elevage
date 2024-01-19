// Dynamize schema validations
function validate(schema, source = 'body') {
  return (request, response, next) => {
    const { error } = schema.validate(request[source]);
    if (error) {
      return response.status(400).json({ error: error.message });
    }
    return next();
  };
}

module.exports = validate;
