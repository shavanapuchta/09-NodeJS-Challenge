// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of the project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a description for this project:",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please provide the installation instructions for this project:",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide usage instructions for this project:",
    },
    {
        type: 'input',
        name: 'license',
        message: "What license will be used for this project?",
        choices: ['Apache 2.0', 'GNU v3.0', 'MIT', 'BSD 2-Clause Simplified', 'BSD 3-Clause New or Revised', 'Boost', 'Creative Commons', 'Eclipse', 'GNU Affero v3.0', 'GNU v2.0', 'GNU v2.1', 'Mozilla', 'The Unilicense', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please provide constribution instructions for this project:",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Pleae provide testing instructions for this project:",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return `# ${fileName.title}
    ## Description
    ${data.description}
    
    ## Table of Contents
    
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contributing](#contributing)
    -[License](#license)
    -[Tests](#tests)
    -[Questions](#questions)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
    ## Contributing
    
    ${data.contributing}
    
    ## License
    
    ${data.license}
    
    ## Tests
    
    ${data.tests}
    
    ## Questions?
    
    GitHub Username: ${data.github}
    Email: ${data.email}`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
