const { driver } = window.driver.js;

export default function accountPageTutorial() {
  const driverObj = driver({
    showProgress: true,
    popoverClass: 'driverjs-theme',
    steps: [
      {
        element: 'h1',
        popover: {
          title: 'La page des comptes',
          description: `Cette page peut afficher tous les comptes 
          ou tous les comptes dans un serveur 
          si vous venez d'y accéder via la page des serveurs.`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.main__container-list',
        popover: {
          title: 'Liste des comptes',
          description: `Cette liste répertorie vos comptes.<br>
                    Plusieurs fonctionnalités sont disponibles, 
                    que nous examinerons une par une.<br>`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.add-button',
        popover: {
          title: 'Ajout de compte',
          description: `
                    Si vous n'avez pas de comptes, 
                    commencez par créer un compte en appuyant sur ce bouton.<br>`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.main__article-account',
        popover: {
          title: 'Le compte',
          description: `
                    Le compte est composé de plusieurs informations.<br>
                    Pour commencer, un compte aura une bordure de la couleur que vous lui avez attribuée lors de sa création.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.article__title',
        popover: {
          title: 'Le compte',
          description: `
                    Le nom du compte.<br>`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.article__logo-server',
        popover: {
          title: 'Le compte',
          description: `
                    Le logo du serveur auquel il appartient.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '[slot="account-server"]',
        popover: {
          title: 'Le compte',
          description: `
                    Le nom du serveur auquel il appartient.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.article__container-logo a',
        popover: {
          title: 'Le compte',
          description: `
            Ce bouton vous dirige vers la page des personnages du compte.<br><br>
            Notez que vous pourrez créer un personnage 
            sur la page vers laquelle vous serez dirigé en cliquant.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.article__container-logo [data-toggle="update-modal"]',
        popover: {
          title: 'Le compte',
          description: `
                    Ce bouton permet de modifier le compte.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.article__container-logo [data-toggle="delete-modal"]',
        popover: {
          title: 'Le compte',
          description: `
            Ce bouton permet de supprimer le compte.<br><br>
            Une fenêtre de confirmation s'ouvrira, 
            vous pourrez annuler la suppression ou la confirmer.<br>
            Confirmer la suppression est une action irréversible.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.input-search',
        popover: {
          title: 'Recherche par nom',
          description: `Vous pouvez rechercher un compte par son nom.<br>
          La recherche inclut tous les comptes 
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
