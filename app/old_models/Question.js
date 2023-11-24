const CoreModel = require('./CoreModel');

class Question extends CoreModel {
  #content;
  #context;
  #difficulty_id;
  #good_answer_id;
  #quizz_id

  static tableName = "question";

  constructor(obj){
    const {id, createdAt, updatedAt, content, context, difficulty_id, good_answer_id, quizz_id} = obj;
    super({id, createdAt, updatedAt});
    this.content = content;
    this.context = context;
    this.difficulty_id = difficulty_id;
    this.good_answer_id = good_answer_id;
    this.quizz_id = quizz_id;
  }

  set content(value){
    if(typeof value !== 'string'){
      throw new Error("Question.content must be a string!");
    }
    this.#content = value;
  }

  get content(){
    return this.#content;
  }

  set context(value){
    if(typeof value !== 'string'){
      throw new Error("Question.context must be a string!");
    }
    this.#context = value;
  }

  get context(){
    return this.#context;
  }

  set difficulty_id(value){
    if(typeof value !== 'number'){
      throw new Error("Question.difficulty_id must be a number!");
    }
    this.#difficulty_id = value;
  }

  get difficulty_id(){
    return this.#difficulty_id;
  }

  set good_answer_id(value){
    if(typeof value !== 'number'){
      throw new Error("Question.good_answer_id must be a number!");
    }
    this.#good_answer_id = value;
  }

  get good_answer_id(){
    return this.#good_answer_id;
  }

  set quizz_id(value){
    if(typeof value !== 'number'){
      throw new Error("Question.quizz_id must be a number!");
    }
    this.#quizz_id = value;
  }

  get quizz_id(){
    return this.#quizz_id;
  }
}

module.exports = Question;
