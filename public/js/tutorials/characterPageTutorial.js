const { driver } = window.driver.js;

export default function characterPageTutorial() {
  const driverObj = driver({
    showProgress: true,
    popoverClass: 'driverjs-theme',
    steps: [
      {
        element: '.table-container',
        popover: {
          title: 'Liste des personnages',
          description: `Cette liste répertorie vos personnages.<br>
                    Plusieurs fonctionnalités sont disponibles, 
                    que nous examinerons une par une.<br>`,
          side: 'top',
          align: 'center',
        },
      },
      {
        element: '.add-button',
        popover: {
          title: 'Ajout de personnage',
          description: `
                    Si vous n'avez pas de personnages, 
                    commencez par créer un compte sur un serveur.<br>
                    Ensuite, accédez à la page de ce compte 
                    pour créer un personnage en cliquant sur le bouton '+' en vert.<br><br>
                    <span class="warning">
                    Ce bouton est exclusivement accessible 
                    depuis la page des personnages d'un compte unique.
                    </span><br><br>
                    Si vous avez déjà créé votre compte, 
                    accédez à la 
                    <a href="/accounts" style="text-decoration:underline; color:blue;">
                    page des comptes</a> .<br>
                    Une fois sur cette page, cliquez sur le bouton jaune 
                    avec un logo de personnage.`,
          side: 'bottom',
          align: 'center',
        },
      },
      {
        element: 'tbody tr .td-server',
        popover: {
          title: 'Le serveur',
          description: `En fond, vous verrez la couleur du compte 
          auquel le personnage appartient.<br>
          Ainsi que l'image de son serveur.<br>
          Cliquez dessus pour accéder à la page de vos comptes
           appartenant à ce serveur.`,
          side: 'top',
          align: 'start',
        },
      },
      {
        element: 'tbody tr .td-name',
        popover: {
          title: 'Le personnage',
          description: `Cette cellule est divisée en 3 parties :<br>
          - Le nom du compte.<br>
          - La classe du personnage.<br>
          - Le nom du personnage.<br><br>
          De plus, vous remarquerez que le fond 
          de la cellule correspond à la couleur de votre compte.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.date-repro',
        popover: {
          title: 'La date de reproduction',
          description: `Initialement, la date sera définie sur 'null'.<br>
          Une fois l'étable reproduite, 
          sa valeur sera la date et l'heure actuelles.<br>`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.date-birth',
        popover: {
          title: 'La date d\'accouchement',
          description: `Initialement, la date sera définie sur 'null'.<br>
          Une fois que l'étable est en reproduction, 
          cette valeur devient la date prévue pour l'accouchement.<br>
          Remarquez que l'ordre des personnages dans le tableau 
          est organisé par date d'accouchement croissante.<br>
          Ainsi, les premiers personnages seront ceux 
          dont l'accouchement est prévu le plus tôt.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.breed-male',
        popover: {
          title: 'Les races',
          description: `Image représentant la race du mâle.
          <br>`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.breed-female',
        popover: {
          title: 'Les races',
          description: `Image représentant la race de la femelle.<br>
          A noter que la date d'accouchement dépend 
          exclusivement de la race de la femelle.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.table__spe',
        popover: {
          title: 'Les spécialités',
          description: `En haut, la spécialité du mâle est affichée, suivie de celle de la femelle.<br>
          Vous pouvez cliquer sur l'un des boutons pour modifier directement leur spécialité.<br>
          L'ordre logique des changements est le suivant : 'AUCUNE', 'REPRO', 'CAME'.<br>
          La couleur du bouton varie en fonction de la spécialité sélectionnée.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.table__reproduction',
        popover: {
          title: 'La reproduction',
          description: `Ce bouton déclenche l'accouplement 
          de l'étable du personnage concerné.<br>
          Cela mettra à jour le nombre de reproductions que nous verrons ensuite.<br>
          Le statut passera de "féconde" à "fécondée".<br>
          De plus, cela actualisera les dates de reproduction 
          et d'accouchement en fonction de la femelle.<br>
          Notez que la reproduction d'une étable réinitialise 
          toutes les étapes sur les pages 'ENCLOS'.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.condition',
        popover: {
          title: 'Le statut',
          description: `Le statut varie selon l'état actuel de l'étable.<br>
          Par défaut, l'étable est considérée comme "féconde".<br>
          Une fois accouplée, son statut devient "fécondée" 
          si la date d'accouchement est postérieure à la date actuelle.<br>
          Si le nombre de reproductions a atteint le maximum de 20, 
          le statut sera "Stérile".<br>
          Notez que même en étant stérile, 
          vous pourrez toujours réaccoupler votre étable, 
          mais cela n'impactera que les dates.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.nb-repro',
        popover: {
          title: 'Le nombre de reproductions',
          description: `Le maximum autorisé est de 20 reproductions 
          (Dofus Rétro).<br>
          Lorsque ce nombre est atteint, la valeur devient "Stérile".<br>
          Notez qu'au-delà de 15 reproductions, 
          la couleur changera pour vous avertir 
          que l'étable sera bientôt stérile.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.type',
        popover: {
          title: 'Public ou privé',
          description: `Ce cadenas vous permet de définir 
          si l'enclos est public ou privé.<br>
          Cadenas vert et ouvert : enclos public.<br>
          Cadenas jaune et fermé : enclos privé.<br><br>
          Cliquez sur le cadenas pour changer le type d'enclos.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.table__td-update',
        popover: {
          title: 'Modifier le personnage',
          description: `Cliquez sur ce bouton pour ouvrir un 
          formulaire avec les informations de ce personnage.<br>
          Vous pourrez ainsi modifier ses informations, 
          y compris le transférer vers un autre compte.<br>
          Si vous êtes sur une page de compte unique, 
          le personnage ne sera plus visible sur la page actuelle, 
          mais ne sera pas supprimé.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.table__td-delete',
        popover: {
          title: 'Supprimer le personnage',
          description: `En cliquant sur ce bouton, 
          vous supprimez le personnage.<br>
          Une confirmation s'affichera, 
          vous permettant d'annuler cette action.<br>
          Cependant, une fois confirmée, 
          cette action sera irréversible.`,
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.input-search',
        popover: {
          title: 'Recherche par nom',
          description: `Vous pouvez rechercher un personnage par son nom.<br>
          La recherche inclut tous les personnages 
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
