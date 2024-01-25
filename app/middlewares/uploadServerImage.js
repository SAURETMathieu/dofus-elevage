/* eslint-disable import/no-extraneous-dependencies */
const multer = require('multer');
// eslint-disable-next-line no-unused-vars
const path = require('path');
const fs = require('fs');
const mime = require('mime-types');

// Upload images and store them in the directory 'public/images'
function uploadImage(err, request, response) {
  if (err instanceof multer.MulterError) {
    return response.render('error', {
      error: {
        statusCode: 400,
        name: 'Multer Error',
        message: err.message,
      },
    });
  } if (err) {
    return response.render('error', {
      error: {
        statusCode: 500,
        name: 'Error',
        message: err.message,
      },
    });
  }

  const fileMimeType = mime.lookup(request.file.originalname);

  if (!fileMimeType.startsWith('image/')) {
    fs.unlinkSync(request.file.path);
    return response.render('error', {
      error: {
        statusCode: 400,
        name: 'Invalid File Type',
        message: "Le fichier téléchargé n'est pas une image.",
      },
    });
  }
  return true;
}

module.exports = { uploadImage };
