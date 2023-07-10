// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown')

// An array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'Project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['GNUPLv3', 'ISC', 'MIT'],
        filter(val) {
            return val.toLowerCase();
        }
    },
];

// run query func
function runQuery() {
    return inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            const mark = MarkDown.generateMarkdown(answers)
            fs.writeFile('README.md', mark, (error) => {
                if (error) {
                    console.log('Could not save file', error)
                } else {
                    console.log('Success: new README.md file generated inside the current folder')
                }
            })
        })
        .catch((error) => {
            console.log("some error", error)
        })
}
runQuery()

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();