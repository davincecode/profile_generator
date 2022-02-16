const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question1 = "What's your name? Nicknames are also acceptable :)";
const question2 = "What's an activity you like doing?";
const question3 = "What do you listen to while doing that?";
const question4 = "Which meal is your favourite (eg: dinner, brunch, etc.)";
const question5 = "What's your favourite thing to eat for that meal?";
const question6 = "Which sport is your absolute favourite?";
const question7 =
  "What is your superpower? In a few words, tell us what you are amazing at!";

const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
];
let result = [];
const survey = (index) => {
  if (index < questions.length) {
    console.log(index);
    rl.question(questions[index], (answer) => {
      result += "\n" + answer;
      survey(index + 1);
    });
  } else {
    console.log(`Thank you for your valuable feedback: ${result}`);
    rl.close();
  }
};
survey(0);
