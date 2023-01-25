const fs = require('fs').promises;

// Function that uses the user responses to generate an appropriate README.md file
function generateReadMe(userResponses) {
  console.log('-----------------------------------------------------------');
  console.log('Generating README...');

  // initialise an empty array which will hold all sections of README
  const sections = [];

  // title
  sections.push(`# ${userResponses.title}`);

  // license badge
  if (userResponses.license !== 'none') {
    sections.push(`${userResponses.license}`);
  }

  // description
  sections.push(`## Description\n\n${userResponses.description}`);

  // contents
  sections.push(
    `## Table of contents\n\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)`
  );

  // installation
  sections.push(
    `## Installation\n\nTo install dependencies, run the following command: \`\`\`${userResponses.installation}\`\`\``
  );

  // usage
  sections.push(`## Usage\n\n${userResponses.usage}`);

  // contributing
  sections.push(`## Contributing\n\n${userResponses.contributing}`);

  // tests
  sections.push(
    `## Tests\n\nTo run tests, run the following command: \`\`\`${userResponses.tests}\`\`\``
  );

  // questions
  sections.push(
    `## Questions\n\nIf you have any questions, please send me an [email](mailto:${userResponses.email}). You can also find me on [GitHub](https://github.com/${userResponses.username}).`
  );

  // transform the sections into a really, really long string
  let reallyLongStringThatContainsAllSections = '';
  for (const section of sections) {
    reallyLongStringThatContainsAllSections += section + '\n\n';
  }

  // use the string to write the readme file
  fs.writeFile('./README.md', reallyLongStringThatContainsAllSections)
    .then(
      console.log(
        '... README generated successfully!\n-----------------------------------------------------------'
      )
    )
    .catch((err) => console.log(err));
}

module.exports = generateReadMe;
