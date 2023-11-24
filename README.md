# OQuizz

## Scrum (une méthode agile parmi d'autres)

Méthode de gestion agile d'un projet.

1. on établit le backlog (la liste des fonctionnalité à réaliser)
2. on détermine la durée de réalisation de chaque fonctionnalité grâce à un scrum poker
3. on découpe la réalisation du projet en sprint (des itérations d'une durée fixées, généralement entre 1 et 4 semaines)
4. on attaque le premier sprint

   - en début de sprint les membres de l'équipe choisissent la tâche sur laquel ils veulent travailler
   - chaque matin une petite réunion (une mélée) pour échanger sur les progrès accomplis ou les difficultés rencontrées
   - on passe ensuite la journée à plancher sur la tache courante
   - on recommence jusqu'à la fin du sprint

5. à la fin d'un sprint, on se retrouve avec le PO (product owner) pour lui présenter les nouvelles fonctionnalités réalisée et s'assurer qu'on travaille dans la bonne direction (ie ce qu'on produit correspond bien aux attentes/besoins du client)
6. on passe au sprint suivant, et ainsi de suite jusqu'a épuisement du backlog

## Backlog

Un backlog, dans le contexte de la gestion de projets et spécialement dans les méthodologies agiles comme Scrum, est une liste priorisée de tâches, fonctionnalités, exigences techniques, améliorations, et corrections à apporter à un produit ou projet. Voici quelques aspects clés d'un backlog :

1. **Liste de Tâches :** Le backlog contient toutes les tâches qui doivent être réalisées. Ces tâches peuvent inclure des fonctionnalités spécifiques, des bugs à corriger, des travaux techniques, et d'autres types de travail nécessaire pour le projet.

2. **Priorisation :** Les éléments du backlog sont généralement priorisés. Les tâches les plus importantes ou les plus critiques sont placées en haut de la liste, indiquant qu'elles doivent être traitées en premier.

3. **Flexibilité et Évolution :** Le backlog est un document vivant qui évolue au cours du temps. De nouveaux éléments peuvent être ajoutés au fur et à mesure que de nouvelles exigences apparaissent, et des éléments existants peuvent être modifiés, reportés, ou même supprimés.

4. **Planification :** Dans les méthodologies agiles, les éléments du backlog sont souvent utilisés pour planifier les sprints, qui sont des périodes de travail de courte durée (généralement de deux à quatre semaines) pendant lesquelles des tâches spécifiques du backlog sont choisies et réalisées.

5. **Clarté et Transparence :** Un backlog bien géré offre une vision claire de ce qui doit être fait et de l'état d'avancement du projet. Cela aide à maintenir l'équipe alignée sur les objectifs et permet aux parties prenantes de suivre les progrès.

6. **Propriétaire du Backlog :** Dans des cadres comme Scrum, il y a souvent un rôle dédié, tel que le Product Owner, qui est responsable de la gestion du backlog, s'assurant qu'il est à jour et reflète les besoins et les priorités du projet ou du produit.

Le backlog est donc un outil central pour la gestion et la planification agile, permettant aux équipes de rester concentrées et organisées, et de s'assurer que leur travail est aligné avec les objectifs globaux du projet ou du produit.

| En tant que... | J'ai besoin de...                             | afin de...                               | sprint |
| -------------- | --------------------------------------------- | ---------------------------------------- | ------ |
| visiteur       | un page d'accueil                             | d'accéder au contenu du site, m'inscrire | 1      |
| visiteur       | d'un lien vers la page d'accueil              | pouvoir revenir au choix du quizz        | 1      |
| visiteur       | visualiser les quizz, les thémes, les auteurs | visualiser les quizz disponibles         | 1      |
| visiteur       | filtrer les quizz en fonction des thémes      | visualiser les quizz disponibles         | 1      |
| visiteur       | m'inscrire sur le site                        | jouer aux quizz                          | 2      |
| visiteur       | me connecter                                  | répondre aux quizz                       | 2      |
| membre         | me déconnecter                                |                                          | 2      |
| membre         | accéder à son profil                          | pouvoir le visualiser                    | 2      |
| membre         | accéder aux questions d'un quizz              | répondre aux questions                   | 3      |
| membre         | visualiser mes réponses et mon score          | savoir si j'ai bien répondu              | 3      |

### Propositions

| En tant que... | J'ai besoin de...                                            | afin de... | sprint |
| -------------- | ------------------------------------------------------------ | ---------- | ------ |
| membre         | sauvegarder mes réponses et mes scores, les quizz déjà joués |            | 4      |
| admin          | CRUD des quizz                                               |            | 4      |
| admin          | CRUD des questions                                           |            | 4      |
| admin          | CRUD des tags                                                |            | 4      |
| admin          | CRUD des membres et de leurs statistiques                    |            | 4      |
| membre         | faire des suggestions de quizz/themes                        |            | 5      |
| membre         | partager mon score sur les réseaux sociaux                   |            | 5      |
| membre         | consulter ma progression                                     |            | 5      |

## Wireframes

Un wireframe est une sorte de plan ou de maquette conceptuelle qui représente la structure de base d'un site web ou d'une application. Voici quelques caractéristiques clés des wireframes :

1. **Structure de base :** Les wireframes sont utilisés pour planifier la disposition des éléments sur une page web, tels que les zones de texte, les images, les boutons, etc.

2. **Focus sur la fonctionnalité :** Ils se concentrent sur ce que fera la page et comment elle s'organisera, plutôt que sur le style ou le design graphique. Les wireframes sont généralement présentés en noir et blanc et sont dépourvus d'éléments de style comme les couleurs ou les images détaillées.

3. **Outil de communication :** Ils servent de moyen de communication entre les membres de l'équipe de développement, les designers, les clients, et d'autres parties prenantes. Ils permettent de visualiser et de discuter de la structure et de la fonctionnalité du site avant de passer à la phase de conception et de développement plus détaillée.

4. **Révision et validation :** Les wireframes facilitent la révision des plans du site web. Ils permettent d'apporter des modifications facilement avant de commencer le développement et la conception détaillée.

5. **Simplicité :** Ils sont relativement simples à créer et peuvent être dessinés à la main ou avec l'aide de logiciels spécifiques.

6. **Étape préliminaire :** Les wireframes sont souvent utilisés au début du processus de développement web, avant la création de maquettes (mockups) plus élaborées et le développement final.

Les wireframes sont un outil essentiel dans le développement web, permettant de planifier et de communiquer les aspects structurels et fonctionnels d'un site ou d'une application avant de s'engager dans des étapes plus avancées de conception et de développement.

### Quelques outils pour produire des wireframes

- https://wireframe.cc/
- https://draw.io/
- https://whimsical.com/wireframes
- https://marvelapp.com/features/wireframing
- https://www.figma.com/wireframe-tool
- https://balsamiq.com/

Une extension VSC pour profiter de draw.io depuis VSC :

- https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio

## Modèle Conceptuel des Données (MCD)

La création d'un Modèle Conceptuel de Données (MCD), qui est une représentation abstraite de la structure de données d'un système informatique, suit plusieurs règles importantes pour assurer sa pertinence et son efficacité :

1. **Identification des Entités :** Identifier clairement les entités (ou objets) du système. Une entité représente un ensemble d'informations que l'on souhaite stocker, comme un client, un produit, ou une commande.

2. **Définition des Attributs :** Chaque entité doit avoir des attributs définis, qui sont les caractéristiques individuelles de l'entité, comme le nom d'un client ou le prix d'un produit.

3. **Établissement des Associations :** Déterminer les relations entre les entités. Ces relations montrent comment les entités interagissent les unes avec les autres, comme une commande passée par un client.

4. **Cardinalités :** Spécifier les cardinalités pour chaque relation, indiquant le nombre d'instances d'une entité qui peuvent être associées à une autre. Les cardinalités sont souvent exprimées sous la forme 1:1 (on to one), 1:N (one to many), ou N:N (many to many).

5. **Nommer Clairement :** Utiliser des noms clairs et explicites pour les entités, attributs et relations, pour que le MCD soit facile à comprendre.

6. **Discriminant :** Attribuer une discriminant à chaque entité. Le discriminant est un attribut unique qui permet d'identifier de manière univoque chaque instance de l'entité.

7. **Normalisation :** Appliquer les principes de normalisation pour réduire la redondance des données et améliorer l'intégrité des données.

8. **Cohérence et Simplicité :** Veiller à ce que le MCD soit cohérent et aussi simple que possible tout en capturant toutes les informations nécessaires.

9. **Revue et Validation :** Faire réviser le MCD par des parties prenantes clés pour s'assurer qu'il répond bien aux exigences du système.

En suivant ces règles, on peut s'assurer que le MCD est bien structuré, facile à comprendre et efficace pour la conception de bases de données ou de systèmes d'information.

### Normalisation

La normalisation dans le contexte des bases de données est un processus crucial visant à organiser les données pour réduire la redondance et améliorer l'intégrité des données. Voici une explication des principes fondamentaux de la normalisation :

1. **But de la Normalisation :**

   - Réduire la redondance des données (éviter les données en double).
   - Éliminer les anomalies de données (problèmes lors de l'insertion, de la suppression ou de la mise à jour des données).
   - Assurer une meilleure organisation des données.
   - Améliorer l'efficacité et la performance de la base de données.

2. **Formes Normales :**
   La normalisation est généralement effectuée en appliquant une série de "formes normales" (1NF, 2NF, 3NF, etc.). Chaque forme normale a des exigences spécifiques :

   - **Première Forme Normale (1NF) :**

     - Chaque colonne doit contenir des valeurs atomiques (non divisibles).
     - Chaque enregistrement doit être unique (pas de doublons).

   - **Deuxième Forme Normale (2NF) :**

     - Doit être en 1NF.
     - Tous les attributs non-clés doivent dépendre entièrement de la clé primaire (pas de dépendance partielle).

   - **Troisième Forme Normale (3NF) :**

     - Doit être en 2NF.
     - Il ne doit y avoir aucune dépendance transitive pour les attributs non-clés (un attribut non-clé ne doit dépendre que de la clé primaire).

   - **Formes Normales Supérieures :**
     - Il existe des formes normales au-delà de la 3NF, comme la Forme Normale de Boyce-Codd (BCNF), la 4NF, et la 5NF, chacune abordant des cas de complexité croissante et des types spécifiques de dépendances entre les données.

3. **Impact de la Normalisation :**

   - Tout en améliorant l'intégrité des données et en réduisant la redondance, la normalisation peut parfois conduire à une plus grande complexité dans la structure de la base de données.
   - Dans la pratique, la normalisation est souvent équilibrée avec des considérations de performance et d'utilité. Par exemple, une dénormalisation partielle peut être effectuée pour optimiser les performances des requêtes.

4. **Application Pratique :**
   - La normalisation est un processus itératif. On commence souvent par une forme normale inférieure et on progresse vers des formes plus élevées en analysant et en ajustant la structure des données.
   - La décision de jusqu'où normaliser dépend souvent des exigences spécifiques du système et du contexte d'utilisation des données.

En résumé, la normalisation est une méthode structurée pour organiser les données dans une base de données. Elle joue un rôle crucial dans la conception efficace des bases de données, assurant l'intégrité, réduisant la redondance, et facilitant la maintenance des données.
