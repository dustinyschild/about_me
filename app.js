'use strict';

var userName = prompt('What is your name?');
console.log('User name is: ' + userName);
var game = confirm('Welcome ' + userName + '! Would you like to play a game?');
var questions = ['Am I 20 years old?',
  'Did I used to be an electrician?',
  'Is DeltaV my first exposure to programming?',
  'Do I consider myself a morning person?',
  'Do I have 6 siblings?',
  'What is my lucky number?',
  'Name one of the two sports I enjoy the most.'
];
var userGuesses = [];
var answerCorrect = ['no', //Answer 1
  'yes', //Answer 2
  'no', //Answer 3
  'no', //Answer 4
  'yes', //Answer 5
  '7', //Answer 6
  'running', //Answer 7
  'frisbee' //Also answer 7
];
var userGuessesLowerCase = [];
var userGuessesFinalState = [];
var score = 0;
var questionNumber = 0;

while (game) {
  runGame();
  alert(userName + ', you answered ' + score + ' out of 7 questions correctly!');
  game = confirm('Thank you ' + userName + ' for playing. Would you like to play again?');
  score = 0;
}

function runGame() {
  for (var i = 0; i < questions.length; i++) {
    console.log(questionNumber);
    storeAnswers();
    console.log(userGuesses[questionNumber]);
    getLowerCase();
    console.log(userGuesses[questionNumber]);
    normalizeAnswers();
    console.log(userGuesses[questionNumber]);
    checkAnswer();
    questionNumber++;
  }
}

function storeAnswers() {
//Loop displays questions and collects answer
//   for (var i = 0; i < questions.length; i++) {
  userGuesses[questionNumber] = prompt(questions[questionNumber]);
  console.log('Question ' + questionNumber);
  console.log('Answer stored as: ' + userGuesses[questionNumber]);
  if (questionNumber === 6) {
         //do a guessing loop?
  }
  if (questionNumber === 7) {
         //do another guessing loop
//     }
  }
}

function getLowerCase() {
//  for (var i = 0; i < questions.length; j++) {
  if (userGuesses[questionNumber] !== null) {
    userGuesses[questionNumber] = userGuesses[questionNumber].toLowerCase();
  }
  //}
}

function normalizeAnswers() {
  for(var i = 0; i < questions.length; i++) {
    if (userGuessesLowerCase[i] === 'y') {
      userGuessesFinalState[i] = 'yes';
    }
    if (userGuessesLowerCase[i] === 'n') {
      userGuessesFinalState[i] = 'no';
    }
  }
  console.log('Ran Normaize Function' + userGuessesFinalState);
}

//This function checks user answer is true or false, then returns out a score
function checkAnswer() {
  console.log(userGuesses);
  console.log(answerCorrect);
  for(var i = 0; i < questions.length; i++) {
    if (userGuessesFinalState[i] == answerCorrect[i] ||
    userGuessesFinalState[6] === answerCorrect[7]) {
      score++;
      console.log('Answer #' + (i + 1) + ' is correct. Score: ' + score);
    } else {
      console.log('Answer #' + (i + 1) + ' is incorrect. Score: ' + score);
    }
  }
}
