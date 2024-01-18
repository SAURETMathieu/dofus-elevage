// Centralize errors
class ApiError extends Error {
  constructor(message, info) {
    super(message);
    this.name = 'ApiError';
    if (info) {
      Object.entries(info).forEach(([key, value]) => {
        this[key] = value;
      });
    }
  }
}

module.exports = ApiError;
