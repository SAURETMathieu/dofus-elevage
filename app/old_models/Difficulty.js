const CoreModel = require("./CoreModel");
const client = require("./client");

class Difficulty extends CoreModel{
  #name;

  static tableName = "difficulty";
  static fields = { name: "name" };

  constructor(obj){
    const {id, createdAt, updatedAt, name} = obj;
    super({id, createdAt, updatedAt})
    this.name = name;
  }

  set name(value){
    if(typeof value !== 'string'){
      throw new Error("Difficulty.name must be a string!");
    }
    this.#name = value;
  }

  get name(){
    return this.#name;
  }

  static async findById(id){
    console.log('findOne')
    try{
      const preparedQuery = {
        text: 'SELECT * FROM difficulty WHERE id = $1',
        values: [id]
      };
      const results = await client.query(preparedQuery);
      const row = results.rows[0];
      return new Difficulty({
        id: row.id,
        createdAt: new Date(row.created_at),
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator
        updatedAt: row.updated_at === null ? null : new Date(row.updated_at),
        name: row.name
      })
    }
    catch(error){
      console.trace(error);
    }
  }

  static async insert(obj){
    const { name }= obj;
    try{
      const preparedQuery = {
        text: `INSERT INTO "difficulty" ("name") VALUES ($1) RETURNING *`,
        values: [name]
      };
      const results = await client.query(preparedQuery);
      const row = results.rows[0];
      return new Difficulty({
        id: row.id,
        createdAt: new Date(row.created_at),
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator
        updatedAt: row.updated_at === null ? null : new Date(row.updated_at),
        name: row.name
      })
    }
    catch(error){
      console.trace(error);
    }
  }

  async update(obj){
    console.log("update");
    // on crée un nouvel objet difficultyUpdate qui contient les propriétés de l'objet difficulty courant (this) et celles de l'objet passé en paramètre (obj)
    const difficultyUpdate = {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      ...obj
    }
    // on met à jour la valeur de la propriété updatedAt
    difficultyUpdate.updatedAt = new Date();
    try{
      // on met à jour toutes les colonnes sauf id et created_at qui sont gérées automatiquement par postgreSQL
      const preparedQuery = {
        text: `UPDATE "difficulty" SET "name" = $1, "updated_at" = $2 WHERE "id" = $3 RETURNING *`,
        values: [difficultyUpdate.name, difficultyUpdate.updatedAt, difficultyUpdate.id]
      };
      const results = await client.query(preparedQuery);
      // on récupére l'objet mis à jour provenant de la table difficulty
      const updatedDifficulty = results.rows[0]; // {id, name, created_at, updated_at}
      // on met à jour les propriétés de l'objet courant (this) avec les propriétés de l'objet updatedDifficulty
      Object.entries(updatedDifficulty).forEach(([key, value]) => {
        if(key !== 'id' && key !== 'created_at' && key !== 'updated_at'){
          this[key] = value;
        }
      })
      this.updatedAt = new Date(updatedDifficulty.updated_at);
    }
    catch(error){
      console.trace(error);
    };
  }

  async delete(){
    console.log("delete");
    try{
      const preparedQuery = {
        text: `DELETE FROM "difficulty" WHERE "id" = $1`,
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

module.exports = Difficulty;
