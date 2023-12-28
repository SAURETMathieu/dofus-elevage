const { driver } = window.driver.js;

export default function paddockTutorial() {
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `Vous pouvez cliquer ici pour 
          déclencher un chronomètre.<br> 
           Il y a plusieurs timer disponible: 
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
           ce qui correspond au temps nécessaire 
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
          ce qui correspond au temps nécessaire pour monter une étable Stade 9.<br> `,
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `-Au troisième clic 25min,<br> 
          ce qui correspond au temps nécessaire pour monter une étable de stade 2. Ou finir de monter l'étable 10 (1/4) précédemment monter au 3/4`,
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `-Au quatrième clic 9min,<br> 
          ce qui correspond au temps nécessaire pour
           rendre agressive ou sereine une dinde à l'inverse de son passif,
            sereine pour un male, agressive pour une femelle.`,
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: 'h1',
        popover: {
          title: 'Chronomètre',
          description: `  -Au cinquième clic 3min,<br> 
          ce qui correspond au temps nécessaire pour 
          rendre agressive ou sereine une dinde dans le sens de son passif, 
          sereine pour une femelle, agressive pour un male.`,
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: '.container__list-accounts',
        popover: {
          title: 'La liste des comptes',
          description: 'Voici la liste de vos comptes privé ou public selon la page où vous vous trouvez. \n Plusieurs fonctionnalités vous sont offertes, nous allons les voir une par une.',
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: '.container__account',
        popover: {
          title: 'Le compte',
          description: 'Un compte a une couleur de fond qui représente la couleur de votre compte',
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: '.container__account:nth-child(1) h2',
        popover: {
          title: 'Le nom de compte',
          description: 'Ici se trouve le nom de votre compte',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.container__account:nth-child(1)',
        popover: {
          title: 'Les personnages',
          description: 'A l\'intérieur du compte se trouvent tout vos personnages composés de plusieurs sections.',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.container__account:nth-child(1) .character__title',
        popover: {
          title: 'Les personnages',
          description: 'Le nom du personnage, ainsi que la classe de votre personnage de chaques cotés de celui ci.',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .section-male',
        popover: {
          title: 'Male/Femelle',
          description: 'Ensuite, voici la section male',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .character__breed-img',
        popover: {
          title: 'Male/Femelle 1/3',
          description: 'En premier se trouve la race de vos males, vous avez le logo du genre pour vous repérer.',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .character__number',
        popover: {
          title: 'Male/Femelle 2/3',
          description: `En second, le nombre de males que vous possédez 
          dans votre étable. Vous pouvez le modifier en cliquant dessus 
          et en séléctionnant à la main ou au clavier, 
          le nombre de dragodinde que vous avez dans votre étable. 
          Les valeurs vont de 0 a 125`,
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
          title: 'L\'avancé de votre étable',
          description: `Cette section est composée de 9 icones. 
          Chacune peut être cliquée afin de déterminer ou non, 
          si vous avez réalisé cette étape pour votre étable.<br> 
          Si l'icone est grisé, c'est que l'étape n'a pas été réalisé.<br>
          Si elle est coloré, c'est que vous avez déjà réalisé cette étape.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character .character__container-logos',
        popover: {
          title: 'L\'avancé de votre étable',
          description: `Selon votre avancé, 
          la couleur de fond changera.<br> 
          Du rouge quand l'étable ne sera pas prête, 
          jusqu'au vert quand l'intégralité des étapes seront fini.<br>
          A noter que l'avancé des étapes: maturité, 
          énergie et niveau 5 n'influent pas sur la couleur de fond.`,
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
          Détermine si l'étable est au niveau 5 minimum pour chaques dragodindes.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="agressive"]',
        popover: {
          title: 'Le baffeur',
          description: `
          Détermine si les dragodindes dans l'étable sont agressives pour celles qui en ont besoin.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="endurance"]',
        popover: {
          title: 'Le foudroyeur',
          description: `
          Détermine si l'étable a l'endurance au max.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="serene"]',
        popover: {
          title: 'Le caresseur',
          description: `
          Détermine si les dragodindes dans l'étable sont sereines pour celles qui en ont besoin.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="love"]',
        popover: {
          title: 'La dragofesse',
          description: `
          Détermine si l'étable a l'amour au max.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="reset"]',
        popover: {
          title: 'RESET',
          description: `
          Remet à 0 toutes les étapes sauf la maturité, l'énergie, et le niveau 5.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.article__character [data-type="valid-all"]',
        popover: {
          title: 'VALIDE',
          description: `
          Valide toutes les étapes en dehors de la maturité, l'énergie, et le niveau 5.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.help',
        popover: {
          title: 'Le tutoriel est terminé !',
          description: 'Vous pouvez à nouveau jouer le tutoriel en cliquant sur l\'aide',
        },
      },
    ],
  });

  driverObj.drive();
}
