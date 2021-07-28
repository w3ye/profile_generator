const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userDetail = {};

const userKey = [
  "name",
  "hobby",
  "music",
  "meal",
  "sport",
  "superpower"
];
let questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activiy you like doing",
  "What Do you listen to while doing that",
  "Which meal is your favourite?",
  "Which sports is your absolute favourite",
  "What is your super power"
];

const askQuestions = (index) => {
  if (index === questions.length) {
    console.log(`Hi my name is ${userDetail.name}, I enjoy ${userDetail.activity} and love to listen to ${userDetail.music} while doing ${userDetail.activity}. My favourite food is ${userDetail.meal} and my favourite sport is ${userDetail.sport}. Don't tell anyone I can ${userDetail.superpower}`);
    rl.close();
    return null;
  }
  rl.question(questions[index], (answer) => {
    userDetail[userKey[index]] = answer;
    askQuestions(index + 1);
  });
};

askQuestions(0);
