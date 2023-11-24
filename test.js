require("dotenv").config();
const {
  Answer,
  Difficulty,
  Question,
  Quizz,
  Tag,
  User,
} = require("./app/models");

async function test() {
  const question = await Question.findByPk(9);

  const goodAnswer = await question.getGoodAnswer();

  console.log(question.content);
  console.log(goodAnswer.content);

  /*
  const tag = await Tag.findByPk(5, {
    include: [
      {
        association: "quizzes",
        include: ["author"],
      },
    ],
  });
  console.log(tag.quizzes[0].author.firstname);
  */
}
test();

/*
// IIFE : Immediately Invoked Function Expression
// https://developer.mozilla.org/fr/docs/Glossary/IIFE
(async () => {
  const question = await Question.findByPk(1);
  console.log(question);
})();
*/
