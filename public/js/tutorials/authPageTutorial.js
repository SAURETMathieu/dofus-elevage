const { driver } = window.driver.js;

export default function authPageTutorial() {
  const driverObj = driver({
    showProgress: true,
    popoverClass: 'driverjs-theme',
    steps: [
      {
        element: '.header__top-left li:first-child',
        popover: {
          title: 'Barre de navigation',
          description: `Vous pouvez cliquer sur ce logo 
          Ankama pour aller sur le site officiel de Dofus.`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.header__top-left li:nth-child(2)',
        popover: {
          title: 'Barre de navigation',
          description: `Vous pouvez cliquer ici pour aller sur 
          la page du support en cas de problèmes comme un bug ou autre.`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.header__top-right li:nth-child(2)',
        popover: {
          title: 'Barre de navigation',
          description: `Vous pouvez cliquer ici pour aller sur 
          la page de connexion.<br>
          Si vous êtes connecté, les boutons pour accéder au profil et se déconnecter seront a cet endroit.`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.header__top-right li:nth-child(3)',
        popover: {
          title: 'Barre de navigation',
          description: `Vous pouvez cliquer ici pour aller sur 
          la page d'inscription.<br>`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.header__navbar-left li:first-child',
        popover: {
          title: 'Barre de navigation',
          description: `Lien vers la page d'accueil.
          <br>`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.header__navbar-left li:nth-child(2)',
        popover: {
          title: 'Barre de navigation',
          description: `Lien vers la page des enclos publics.
          <br>`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.header__navbar-left li:nth-child(3)',
        popover: {
          title: 'Barre de navigation',
          description: `Lien vers la page des enclos privés.
          <br>`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.header__navbar-right li:first-child',
        popover: {
          title: 'Barre de navigation',
          description: `Lien vers la page des personnages.
          <br>`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.header__navbar-right li:nth-child(2)',
        popover: {
          title: 'Barre de navigation',
          description: `Lien vers la page des comptes.
          <br>`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.header__navbar-right li:nth-child(3)',
        popover: {
          title: 'Barre de navigation',
          description: `Lien vers la page des serveurs.
          <br>`,
          side: 'top',
          align: 'center',
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
