const path = require('path');
const multer = require('multer');
const { Op } = require('sequelize');
const { User, Server } = require('../models/index.js');
const { deleteImage } = require('../middlewares/deleteServerImage.js');
const { uploadImage } = require('../middlewares/uploadServerImage.js');

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

const adminController = {
  getAdminPage: (request, response) => {
    response.render('admin');
  },

  getAdminServersPage: async (request, response) => {
    const servers = await Server.findAll({
      order: ['name'],
    });
    response.render('adminServers', { servers });
  },

  getAdminUsersPage: async (request, response) => {
    const { search } = request.query;
    let whereCondition = {};

    if (search) {
      whereCondition = {
        lastname: {
          [Op.iLike]: `%${search}%`,
        },
      };
    }

    const users = await User.findAll({
      where: whereCondition,
      order: ['lastname'],
    });
    const attributes = Object.keys(User.tableAttributes);
    response.render('adminUsers', { users, attributes });
  },

  addServer: async (request, response) => {
    upload.single('serverImage')(request, response, async (err) => {
      try {
        uploadImage(err, request, response);
        const imageUrl = `/serversImages/${request.file.filename}`;
        const { serverName, game } = request.body;
        await Server.create({
          name: serverName,
          game,
          img: imageUrl,
        });
        return response.redirect('/admin/servers');
      } catch (error) {
        return response.render('error', {
          error: {
            statusCode: 409,
            name: 'Error',
            message: error,
          },
        });
      }
    });
  },

  deleteServer: async (request, response, next) => {
    const { id } = request.params;
    try {
      const server = await Server.findByPk(id);
      const serversDeleted = await Server.destroy({
        where: {
          id,
        },
      });

      deleteImage(server.img);

      response.redirect('/admin/servers');
    } catch (error) {
      next();
    }
  },

  getUpdateServerPage: async (request, response, next) => {
    const { id } = request.params;
    try {
      const server = await Server.findByPk(id);
      response.render('adminUpdateServer', { server });
    } catch (error) {
      next();
    }
  },

  updateServer: async (request, response, next) => {
    upload.single('serverImage')(request, response, async (err) => {
      try {
        const { id } = request.params;
        const { serverName, game } = request.body;
        const server = await Server.findByPk(id);
        let imageUrl = '';
        if (request.file) {
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
      } catch (error) {
        next();
      }
    });
  },
};

module.exports = adminController;
