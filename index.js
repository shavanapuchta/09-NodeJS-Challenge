// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        type: 'list',
        name: 'license',
        message: "What license will be used for this project?",
        choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Boost', 'Eclipse', 'Mozilla', 'The Unilicense', 'None'],
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


//TODO: Create a function to write README file

inquirer.prompt(questions).then((data) => {
    const md = generateMarkdown(data);

    console.log(md);


    fs.writeFile('README.md', md, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Successfully created README file!');
    });

});

//TODO: Create a function to initialize app

function init() {}

//TODO: Function call to initialize app

init();
