const { driver } = window.driver.js;

export default function serverPageTutorial() {
  const driverObj = driver({
    showProgress: true,
    popoverClass: 'driverjs-theme',
    steps: [
      {
        element: '.main__container-list',
        popover: {
          title: 'La page des serveurs',
          description: `Cette page affiche tous les serveurs 
          disponibles sur le site.`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.main__article',
        popover: {
          title: 'Le serveur',
          description: `
                    Le serveur est composé de plusieurs informations.<br>`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.main__article-title',
        popover: {
          title: 'Le serveur',
          description: `
                    Le nom du serveur.<br>`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.article__logo-server',
        popover: {
          title: 'Le serveur',
          description: `
                    Le logo du serveur.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.main__article-input',
        popover: {
          title: 'Le serveur',
          description: `
                    En cliquant ici vous serez dirrigé 
                    vers tous vos comptes sur le serveur cliqué.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.button-container a:nth-child(2)',
        popover: {
          title: 'Le compte',
          description: `
            Ce bouton vous dirige vers la page 
            des personnages sur le serveur cliqué.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.input-search',
        popover: {
          title: 'Recherche par nom',
          description: `Vous pouvez rechercher un serveur par son nom.<br>
          La recherche inclut tous les serveurs 
          contenant l'élément recherché dans leur nom 
          et masque ceux qui ne correspondent pas.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.help',
        popover: {
          title: 'Le tutoriel est terminé !',
          description: `Vous pouvez à nouveau lancer le tutoriel 
          en cliquant sur l'aide.<br>`,
        },
      },
    ],
  });

  driverObj.drive();
}
