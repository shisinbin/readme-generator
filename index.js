const askQuestions = require('./lib/askQuestions');

function init() {
  console.log(
    "-----------------------------------------------------------\nWelcome to the README.md file generator. Let's get started!\n-----------------------------------------------------------"
  );

  askQuestions();
}

init();
