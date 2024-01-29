# O'DD

## Description

Ce dépôt contient une application web destinée à la gestion d'élevage de Dragodindes, spécialement conçue pour le jeu **Dofus Rétro**. Il combine une **API** pour la gestion des données en backend et utilise le **moteur de template EJS** pour le rendu côté serveur.

**Temps de projet** : environ 2 mois (tout le long de la formation après les cours), estimation à 120/150h

**Accessible à cette adresse** : [O'DD](https://odd-dofus.up.railway.app/)

## Languages utilisés

- Javascript
- SQL
- HTML
- CSS
- EJS

## Technos utilisées

### Back

- **Node.js**: Plateforme JavaScript côté serveur utilisée pour exécuter du code JavaScript côté serveur.
- **Express**: Framework web Node.js pour la création d'API RESTful.
- **PostgreSQL**: Système de gestion de base de données relationnelles (SGBDR).
- **Sequelize**: ORM (Object-Relational Mapping) utilisé pour simplifier l'interaction avec la base de données PostgreSQL.
- **Joi**: Bibliothèque de validation de données pour la validation des requêtes.
- **Sqitch**: Outil de gestion de schéma de base de données (Database Schema Management Tool) qui permet de versionner et de déployer les schémas de base de données de manière simple et cohérente.
- **Nodemailer**: Module Node.js pour l'envoi d'e-mails.
- **Winston**: Bibliothèque de journalisation pour la gestion des logs.
- **Connect-session (sequelize)**: Middleware de session pour gérer les sessions avec Sequelize.
- **Bcrypt**: Bibliothèque de hachage de mots de passe pour sécuriser les mots de passe stockés.
- **Dayjs**: Bibliothèque pour manipuler et formater les dates de manière plus simple.
- **Multer**: Middleware pour gérer les fichiers uploadés.
- **Child_process**: Module de Node.js qui permet de créer et de manipuler des processus externes, facilitant ainsi l'exécution asynchrone de commandes système depuis une application Node.js.

### Front

- **EJS (Embedded JavaScript)**: Moteur de template pour JavaScript facilitant la génération dynamique de contenu HTML.
- **CSS (Cascading Style Sheets)**: Langage de style pour la présentation des documents HTML.
- **SortTableJs**: Bibliothèque JavaScript pour le tri (drag and drop) des tableaux HTML.
- **Select2**: Bibliothèque JavaScript améliorant les éléments de sélection HTML (dropdown).
- **Driverjs**: Bibliothèque JavaScript permettant de créer des tutoriels interactifs sur une page web.

## Fonctionnalités

- API RESTful
- Template EJS
- Gestion administrateur
- Gestion utilisateur
- CRUD pour les utilisateurs (avec rôle), les serveurs, les personnages, les comptes, les rotations, les races de dragodindes
- Session et sauvegarde de session
- Journalisation
- Architecture de projet
- Migrations de BDD
- Back up de la BDD
- Error handler (centraliser les erreurs)
- Envoi et réception de mails
- CoreController
- Controller wrapper
- Connexion sécurisée et vérification des droits
- Validation de données
- Téléchargement et suppression de fichier
- Rendu dynamique
- Drag and drop
- Responsive
- Chronomètre
- Modal pour le CRUD côté client
- Écran de chargement
- Envoi de messages au support
- Montrer/cacher les mots de passe
- Conversion hexadécimale
- Tutoriel pour chaque page
- Tri de tableau, affichage/caché d'informations
- Pages interactives mises à jour sans rafraîchissement
- Intégration de sons sur le site
- Champ de recherche en temps réel par nombre
- ...
