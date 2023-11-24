const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mime = require("mime-types");

function uploadImage(err, request, response) {
  if (err instanceof multer.MulterError) {
    console.log(err);
    return response.render("error", {
      error: {
        statusCode: 400,
        name: "Multer Error",
        message: err.message,
      },
    });
  } else if (err) {
    console.log(err);
    return response.render("error", {
      error: {
        statusCode: 500,
        name: "Error",
        message: err.message,
      },
    });
  }

  const fileMimeType = mime.lookup(request.file.originalname);

  if (!fileMimeType.startsWith("image/")) {
    fs.unlinkSync(request.file.path);
    return response.render("error", {
      error: {
        statusCode: 400,
        name: "Invalid File Type",
        message: "Le fichier téléchargé n'est pas une image.",
      },
    });
  }
}

module.exports = { uploadImage };
