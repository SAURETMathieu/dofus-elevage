const path = require("path");
const fs = require("fs");

function deleteImage(urlImage) {
  const absolutePath = path.resolve("./public/images/");
  if (fs.existsSync(absolutePath + urlImage)) {
    fs.unlink(absolutePath + urlImage, (err) => {
      if (err) {
        console.error("Erreur lors de la suppression du fichier :", err);
      } else {
        console.log("Fichier supprimé avec succès.");
      }
    });
  } else {
    console.log("Le fichier n'existe pas.");
  }
}

module.exports={deleteImage};
