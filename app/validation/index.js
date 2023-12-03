function validate(schema, source = 'body'){
  return (request, response, next) => {
    const { error } = schema.validate(request[source]);
    if (error) {
      return response.status(400).render("error", {
        error: {
          statusCode: 400,
          name: "Erreur",
          message: error.message,
        },
      });
    }
    next();
  }
}

module.exports = validate;