const { driver } = window.driver.js;

export default function paddockTutorial() {
  const driverObj = driver({
    showProgress: true,
    popoverClass: 'driverjs-theme',
    steps: [
      {
        element: '.container__list-accounts',
        popover: {
          title: 'Liste des comptes',
          description: `Voici la liste de vos comptes privés ou publics 
          selon la page où vous vous trouvez.<br>
          Plusieurs fonctionnalités vous sont offertes, 
          nous allons les voir une par une.`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.container__list-accounts',
        popover: {
          title: 'Ajout de personnage',
          description: `
                    Si vous n'avez pas de personnages, 
                    commencez par créer un compte sur un serveur.<br>
                    Ensuite, accédez à la page de ce compte 
                    pour créer un personnage en cliquant sur le bouton '+' en vert.<br>
                    Ce bouton est exclusivement accessible 
                    depuis la page de personnages d'un compte unique.<br>
                    Si vous avez déjà créé votre compte, 
                    accédez à la 
                    <a href="/accounts" style="text-decoration:underline; color:blue;">
                    page des comptes</a>.<br>
                    Une fois sur cette page, cliquez sur le bouton jaune 
                    avec un logo de personnage.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.container__account',
        popover: {
          title: 'Le compte',
          description: 'Un compte a une couleur de fond qui représente la couleur de votre compte',
          side: 'top',
          align: 'start',
        },
      },
      {
        element: '.container__account h2',
        popover: {
          title: 'Le nom de compte',
          description: `Ici se trouve le nom de votre compte.<br>
          Vous avez la possibilité de sélectionner et de déplacer 
          cette partie pour organiser vos comptes selon votre préférence.<br><br>
          Cette fonctionnalité est basée sur le glisser-déposer (drag and drop).`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.container__account',
        popover: {
          title: 'Les personnages',
          description: 'A l\'intérieur du compte se trouvent tout vos personnages composés de plusieurs sections.',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.container__account .character__title',
        popover: {
          title: 'Le nom du personnage',
          description: `
          Ici, vous trouverez le nom ainsi que la classe de votre personnage 
          de chaque côté.<br>
          De la même manière que pour les comptes, 
          vous pouvez sélectionner et déplacer cette partie afin d'organiser 
          vos personnages à l'intérieur de chaque compte 
          dans l'ordre que vous souhaitez.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .section-male',
        popover: {
          title: 'Male/Femelle',
          description: 'Ensuite, voici la section mâle',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .character__breed-img',
        popover: {
          title: 'Male/Femelle 1/3',
          description: 'En premier se trouve la race de vos mâles, vous avez le logo du genre pour vous repérer.',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .character__number',
        popover: {
          title: 'Male/Femelle 2/3',
          description: `Ensuite, 
          le nombre de mâles que vous possédez dans votre étable.<br> 
          Vous pouvez le modifier en cliquant dessus 
          et en sélectionnant à la main ou au clavier 
          le nombre de dragodindes que vous avez dans votre étable.<br><br>
          Les valeurs vont de 0 à 125.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .section-female',
        popover: {
          title: 'Male/Femelle 3/3',
          description: 'La même chose pour la section des femelles.',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .character__container-logos',
        popover: {
          title: 'L\'avancée de votre étable',
          description: `Cette section se compose de 9 icônes, 
          chacune pouvant être cliquée pour indiquer 
          si vous avez réalisé ou non une étape pour votre étable.<br>
          Une icône grisée indique une étape non réalisée, 
          tandis qu'une icône colorée signifie que l'étape a déjà été complétée.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .character__container-logos',
        popover: {
          title: 'L\'avancée de votre étable',
          description: `Selon votre progression, 
          la couleur de fond variera, 
          passant du rouge lorsque l'étable n'est pas prête, 
          au vert une fois toutes les étapes terminées.<br>
          Il est à noter que la progression des étapes telles que la maturité, 
          l'énergie et le niveau 5 n'affecte pas la couleur de fond.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="mature"]',
        popover: {
          title: 'L\'abreuvoir',
          description: `
          Détermine si la maturité est au max.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="feed"]',
        popover: {
          title: 'La mangeoire',
          description: `
          Détermine si l'énergie est au max.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="ride"]',
        popover: {
          title: 'La monture',
          description: `
          Détermine si chaque dragodinde dans l'étable a atteint un niveau minimum de 5.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="endurancem"]',
        popover: {
          title: 'Le foudroyeur',
          description: `
          Détermine si les mâles ont l'endurance au max.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="agressive"]',
        popover: {
          title: 'Le baffeur',
          description: `
          Détermine si les dragodindes dans l'étable ont besoin d'être agressives.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="endurancef"]',
        popover: {
          title: 'Le foudroyeur',
          description: `
          Détermine si les femelles ont l'endurance au max.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="lovem"]',
        popover: {
          title: 'La dragofesse',
          description: `
          Détermine si les mâles ont l'amour au max.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="serene"]',
        popover: {
          title: 'Le caresseur',
          description: `
          Détermine si les dragodindes dans l'étable ont besoin d'être sereines.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="lovef"]',
        popover: {
          title: 'La dragofesse',
          description: `
          Détermine si les femelles ont l'amour au max.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `Vous pouvez cliquer ici pour 
          déclencher un chronomètre.<br> 
           Il y a plusieurs timers disponibles : 
           ces timers fonctionnent uniquement avec 5 objets de qualité 9000.<br>`,
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `- Au premier clic 53min,<br> 
           correspond au temps nécessaire 
           pour monter une étable Stade 10 au 3/4 ( fatigue au max ).<br>`,
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `- Au second clic 45min,<br> 
          correspond au temps nécessaire pour monter une étable Stade 9.<br> `,
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `-Au troisième clic 25min,<br> 
          correspond au temps nécessaire pour monter une étable de stade 2. Ou finir de monter l'étable 10 (1/4) précédemment monter au 3/4`,
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `-Au quatrième clic 9min,<br> 
          correspond au temps nécessaire pour
           rendre agressive ou sereine une dinde à l'inverse de son passif.<br>
           Sereine pour un mâle, agressive pour une femelle.`,
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `  -Au cinquième clic 3min,<br> 
          correspond au temps nécessaire pour 
          rendre agressive ou sereine une dinde dans le sens de son passif.<br> 
          Sereine pour une femelle, agressive pour un mâle.`,
          side: 'bottom',
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
