const fetch = require('node-fetch');

function requestServer() {
  const url = 'https://odd-dofus.up.railway.app/';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.error(`Échec de la consultation à ${new Date().toLocaleTimeString()} - Code de statut : ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Erreur lors de la consultation à ${new Date().toLocaleTimeString()}: ${error.message}`);
    });
}

setInterval(requestServer, 15 * 60 * 1000);

module.exports = requestServer;
