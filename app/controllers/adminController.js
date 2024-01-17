const adminController = {
  getAdminPage: (request, response) => {
    response.render('admin');
  },
};

module.exports = adminController;
