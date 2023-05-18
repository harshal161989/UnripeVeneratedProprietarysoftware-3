var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("what's your name? ");
console.log("welcome " + userName + " to DO YOU KNOW HARSHAL?");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);


  if (userAnswer === answer) {
    console.log("right");
    score = score + 1;


  } else {
    console.log("wrong");
  }
  console.log("current score:", score);
  console.log("------------")

}
var questions = [{
  question: "wher do I Live?",
  answer: "Indore"

}, {
  question: "my super hero whould be?",
  answer: "dhruv"

}, {
  question: "your current working place?",
  answer: "ips acdemy"
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

