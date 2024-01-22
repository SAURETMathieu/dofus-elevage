const fetch = require('node-fetch');

function requestServer() {
  const url = 'https://www.votresite.com';
  
  fetch(url)
      .then(response => {
          if (!response.ok) {
              console.error(`Échec de la consultation à ${new Date().toLocaleTimeString()} - Code de statut : ${response.status}`);
          }
          if(response.ok){
            console.log("ok");
          }
      })
      .catch(error => {
          console.error(`Erreur lors de la consultation à ${new Date().toLocaleTimeString()}: ${error.message}`);
      });
}

setInterval(requestServer, 15 * 60 * 1000);

module.exports = requestServer;