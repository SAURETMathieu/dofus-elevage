/* eslint-disable no-unused-vars */
const path = require('path');
const multer = require('multer');
const { Server } = require('../../models/index.js');
const { deleteImage } = require('../../middlewares/deleteServerImage.js');
const { uploadImage } = require('../../middlewares/uploadServerImage.js');
const ApiError = require('../../errors/api.error.js');

// define the storage dir and file name for new server
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images/serversImages');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});
const upload = multer({ storage });

const serverAdminController = {

  getAdminServersPage: async (request, response) => {
    const servers = await Server.findAll({
      order: ['name'],
    });
    response.render('adminServers', { servers });
  },

  create: async (request, response) => {
    // create server and upload image
    upload.single('serverImage')(request, response, async (err) => {
      uploadImage(err, request, response);
      const imageUrl = `/serversImages/${request.file.filename}`;
      const { serverName, game } = request.body;
      await Server.create({
        name: serverName,
        game,
        img: imageUrl,
      });
      return response.redirect('/admin/servers');
    });
  },

  delete: async (request, response, next) => {
    const { id } = request.params;
    const server = await Server.findByPk(id);

    if (!server) {
      const err = new ApiError(
        'Le serveur est introuvable.',
        { httpStatus: 404 },
      );
      return next(err);
    }
    const serversDeleted = await server.destroy();

    deleteImage(server.img);

    return response.status(204).end();
  },

  getUpdateServerPage: async (request, response, next) => {
    const { id } = request.params;
    const server = await Server.findByPk(id);
    response.render('adminUpdateServer', { server });
  },

  update: async (request, response, next) => {
    upload.single('serverImage')(request, response, async (err) => {
      const { id } = request.params;
      const { serverName, game } = request.body;
      const server = await Server.findByPk(id);
      let imageUrl = '';
      if (request.file) {
        // delete current image of server and upload the new image
        deleteImage(server.img);
        uploadImage(err, request, response);
        imageUrl = `/serversImages/${request.file.filename}`;
      } else {
        imageUrl = server.img;
      }
      const serverUpdated = await Server.update(
        {
          name: serverName,
          game,
          img: imageUrl,
        },
        {
          where: {
            id,
          },
        },
      );
      response.redirect('/admin/servers');
    });
  },
};

module.exports = serverAdminController;
