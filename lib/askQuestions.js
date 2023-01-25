const inquirer = require('inquirer');
const generateReadMe = require('./generateReadMe');

// Function that uses the inquirer package to help grab user input from the terminal
function askQuestions() {
  inquirer
    .prompt([
      {
        name: 'username',
        message: 'What is your GitHub username?',
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
        choices: [
          {
            name: 'MIT',
            value:
              '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
          },
          {
            name: 'Apache 2.0',
            value:
              '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
          },
          {
            name: 'GPL 3.0',
            value:
              '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
          },
          {
            name: 'BSD',
            value:
              '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
          },
          {
            name: 'None',
            value: 'none',
          },
        ],
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
