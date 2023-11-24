const client = require("./client");

class CoreModel {
  #id;
  #createdAt;
  #updatedAt;

  static tableName = null;
  static fields = null;

  constructor(obj) {
    const { id, createdAt, updatedAt } = obj;
    this.#id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static async findAll() {
    console.log("findAll");
    try{
      const preparedQuery = {
        text: `SELECT * FROM "${this.tableName}"`
      };
      const results = await client.query(preparedQuery);
      const entities = results.rows.map(row => {
        const obj = {
          id: row.id,
          createdAt: new Date(row.created_at),
          updatedAt: row.updated_at === null ? null : new Date(row.updated_at),
        };
        Object.entries(this.fields).forEach(([key, value]) => {
          obj[key] = row[value];
        })
        return new this(obj);
      })
      return entities;
    } catch(error){
      console.trace(error);
    }
  }
  
  /*
  set id(value) {
    if (isNaN(parseInt(value, 10))) {
      throw new Error("Model.id must be a integer!");
    }
    this.#id = value;
  }
  */

  get id() {
    return this.#id;
  }

  set createdAt(value) {
    if (!(value instanceof Date)) {
      throw new Error("Model.createdAt must be a Date!");
    }
    this.#createdAt = value;
  }

  get createdAt() {
    return this.#createdAt;
  }

  set updatedAt(value) {
    if (value !== null && !(value instanceof Date)) {
      throw new Error("Model.updatedAt must be null or a Date!");
    }
    this.#updatedAt = value;
  }

  get updatedAt() {
    return this.#updatedAt;
  }
}

module.exports = CoreModel;