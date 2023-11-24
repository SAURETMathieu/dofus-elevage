const { User, Server } = require("../models");
const path = require("path");
const { deleteImage } = require("../middlewares/deleteServerImage");
const { uploadImage } = require("../middlewares/uploadServerImage");
const multer = require("multer");
const { Op } = require('sequelize');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/serversImages");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

const adminController = {
  getAdminServersPage: async (request, response) => {
    const servers = await Server.findAll({
      order: ["name"],
    });
    response.render("adminServers", { servers });
  },

  getAdminUsersPage: async (request, response) => {
    const { search } = request.query;
    let whereCondition = {};
    
    if (search) {
      whereCondition = {
        lastname: {
          [Op.iLike]: `%${search}%`
        }
      };
    }

    const users = await User.findAll({
      where: whereCondition,
      order: ["lastname"],
    });
    const attributes = Object.keys(User.tableAttributes);
    response.render("adminUsers", { users,attributes });
  },

  addServer: async (request, response, next) => {
    upload.single("serverImage")(request, response, async (err) => {
      try {
        uploadImage(err, request, response);
        const imageUrl = "/serversImages/" + request.file.filename;
        const { serverName, game } = request.body;
        await Server.create({
          name: serverName,
          game: game,
          img: imageUrl,
        });
        response.redirect("/admin/servers");
      } catch (err) {
        console.log(err);
        return response.render("error", {
          error: {
            statusCode: 409,
            name: "Error",
            message: err,
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
          id: id,
        },
      });

      if (serversDeleted) {
        console.log("Serveur supprimé avec succès.");
      } else {
        console.log("Aucun serveur n'a été supprimé.");
      }

      deleteImage(server.img);

      response.redirect("/admin/servers");
    } catch (error) {
      console.error("Erreur lors de la suppression du serveur :", error);
      next();
    }
  },

  getUpdateServerPage: async (request, response, next) => {
    const { id } = request.params;
    try {
      const server = await Server.findByPk(id);
      response.render("adminUpdateServer", { server });
    } catch (error) {
      next();
    }
  },

  updateServer: async (request, response, next) => {
    upload.single("serverImage")(request, response, async (err) => {
      try {
        const { id } = request.params;
        const { serverName, game } = request.body;
        const server = await Server.findByPk(id);
        let imageUrl = "";
        if (request.file) {
          deleteImage(server.img);
          uploadImage(err, request, response);
          imageUrl = "/serversImages/" + request.file.filename;
        } else {
          imageUrl = server.img;
        }
        const serverUpdated = await Server.update(
          {
            name: serverName,
            game: game,
            img: imageUrl,
          },
          {
            where: {
              id: id,
            },
          }
        );
        response.redirect("/admin/servers");
      } catch (error) {
        next();
      }
    });
  },
};

module.exports = adminController;
