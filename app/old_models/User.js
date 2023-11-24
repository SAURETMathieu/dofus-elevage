const CoreModel = require("./CoreModel");
const client = require("./client");

class User extends CoreModel{
  #firstname;
  #lastname;
  #email;
  #password;

  static tableName = "user";
  static fields = { firstname: "firstname", lastname: "lastname", email: "email", password: "password" };

  // pour les quizz... {title: "title", description: "description", authorId: "author_id"}
  
  constructor(obj){
    const { id, firstname, lastname, email, password, createdAt, updatedAt } = obj;
    super({id, createdAt, updatedAt});
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }

  set firstname(value){
    if(typeof value !== 'string'){
      throw new Error("User.firstname must be a string!");
    }
    this.#firstname = value;
  }

  get firstname(){
    return this.#firstname;
  }

  set lastname(value){
    if(typeof value !== 'string'){
      throw new Error("User.lastnamme must be a string!");
    }
    this.#lastname = value;
  }

  get lastname(){
    return this.#lastname;
  }

  set email(value){
    if(typeof value !== 'string'){
      throw new Error("User.email must be a string!");
    }
    this.#email = value;
  }

  get email(){
    return this.#email;
  }

  set password(value){
    if(typeof value !== 'string'){
      throw new Error("User.password must be a string!");
    }
    this.#password = value;
  }

  get password(){
    return this.#password;
  }

  static async findById(id){
    console.log('findById')
    try{
      const preparedQuery = {
        text: 'SELECT * FROM "user" WHERE id = $1',
        values: [id]
      };
      const results = await client.query(preparedQuery);
      const user = results.rows[0];
      if(user){
        return new User({
          id: user.id,
          createdAt: new Date(user.created_at),
          updatedAt: user.updated_at === null ? null : new Date(user.updated_at),
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          password: user.password,
        })
      }
      return null;
    }
    catch(error){
      console.trace(error);
    }
  }

  static async insert(obj){
    const { firstname, lastname, email, password }= obj;
    try{
      const preparedQuery = {
        text: `INSERT INTO "user" ("firstname", "lastname", "email", "password") VALUES ($1, $2, $3, $4) RETURNING *`,
        values: [firstname, lastname, email, password]
      };
      const results = await client.query(preparedQuery);
      const row = results.rows[0];
      return new User({
        id: row.id,
        createdAt: new Date(row.created_at),
        updatedAt: row.updated_at === null ? null : new Date(row.updated_at),
        firstname: row.firstname,
        lastname: row.lastname,
        email: row.email,
        password: row.password,
      })
    }
    catch(error){
      console.trace(error);
    }
  }

  async update(obj){
    console.log("update");
    // on crée un nouvel objet userUpdate qui contient les propriétés de l'objet user courant (this) et celles de l'objet passé en paramètre (obj)
    const userUpdate = {
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      ...obj
    }
    // on met à jour la valeur de la propriété updatedAt
    userUpdate.updatedAt = new Date();
    try{
      // on met à jour toutes les colonnes sauf id et created_at qui sont gérées automatiquement par postgreSQL
      const preparedQuery = {
        text: `UPDATE "user" SET "firstname" = $1, "lastname" = $2, "email" = $3, "password" = $4, "updated_at" = $5 WHERE "id" = $6 RETURNING *`,
        values: [userUpdate.firstname, userUpdate.lastname, userUpdate.email, userUpdate.password, userUpdate.updatedAt, userUpdate.id]
      };
      const results = await client.query(preparedQuery);
      // on récupére l'objet mis à jour provenant de la table user
      const updatedUser = results.rows[0]; // {id, firstname, lastname, email, password, created_at, updated_at}
      // on met à jour les propriétés de l'objet courant (this) avec les propriétés de l'objet updatedUser
      Object.entries(updatedUser).forEach(([key, value]) => {
        if(key !== 'id' && key !== 'created_at' && key !== 'updated_at'){
          this[key] = value;
        }
      })
      this.updatedAt = new Date(updatedUser.updated_at);
    }
    catch(error){
      console.trace(error);
    };
  }

  async delete(){
    console.log("delete");
    try{
      const preparedQuery = {
        text: `DELETE FROM "user" WHERE "id" = $1`,
        values: [this.id]
      };
      const results = await client.query(preparedQuery);
      console.log(results);
    }
    catch(error){
      console.trace(error);
    };
  }
}

module.exports = User;
