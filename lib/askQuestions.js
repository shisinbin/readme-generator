const inquirer = require('inquirer');
const generateReadMe = require('./generateReadMe');

function askQuestions() {
  inquirer
    .prompt([
      {
        name: 'username',
        message: 'What is your GitHub username?',
        default: 'shisinbin',
      },
      {
        name: 'email',
        message: 'What is your email address?',
      },
      {
        name: 'title',
        message: "What is your project's name?",
      },
      {
        name: 'description',
        message: 'Please write a short description of your project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
      },
      {
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm install',
      },
      {
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test',
      },
      {
        name: 'usage',
        message: 'What does the user need to know about using the app?',
      },
      {
        name: 'contributing',
        message:
          'What does the user need to know about contributing to the app?',
      },
    ])
    .then((userResponses) => {
      generateReadMe(userResponses);
    });
}

module.exports = askQuestions;
