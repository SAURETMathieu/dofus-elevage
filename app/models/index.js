const Account = require("./Account");
const Breed = require("./Breed");
const Character = require("./Character");
const Server = require("./Server");
const User = require("./User");

// Associations

//Un compte a un serveur
Account.belongsTo(Server, {
  foreignKey: "server_id",
  as: "server",
});

//Un serveur a plusieurs comptes
Server.hasMany(Account, {
  foreignKey: "server_id",
  as: "accounts",
});

//Un personnage a un compte
Character.belongsTo(Account, {
  foreignKey: "account_id",
  as: "account",
});

//Un compte a plusieurs personnages
Account.hasMany(Character, {
  foreignKey: "account_id",
  as: "characters",
});

//Un personnage(male) a une race
Character.belongsTo(Breed, {
  foreignKey: "breed_male",
  as: "breedMale",
});

//Une race a plusieurs personnages
Breed.hasMany(Character, {
  foreignKey: "breed_male",
  as: "charactersMale",
});

// Un personnage(femelle) a une race
Character.belongsTo(Breed, {
  foreignKey: "breed_female",
  as: "breedFemale",
});

//Une race a plusieurs personnages
Breed.hasMany(Character, {
  foreignKey: "breed_female",
  as: "charactersFemale",
});

//Un compte a un utilisateur
Account.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

//un utilisateur a plusieurs comptes
User.hasMany(Account, {
  foreignKey: "user_id",
  as: "accounts",
});

module.exports = { Account, Breed, Character, Server, User };
