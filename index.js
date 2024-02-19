const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const util = require("util");
// const { log } = require("console");

// const writeToFile = util.promisify(fs.writeFile);

const linceses = [
    "MIT",
    "dsada",
]

// array of questions for user
const questions = () => 
    inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "<Project-Title-Here>",
    },
    { 
        type: "input",
        name: "description",
        message: "Please describe your your project is. A short paragraph explaining the use case and how you came about creating it.",
    },
    {
        type: "input",
        name: "contense",
        message: "Please create a table of contense for your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please list out the steps required to install the developed project/environment you have created.",
    },
    {
        type: "input",
        name: "usage",
        message: "In as much detail as possible please use this section to descibe the use case for your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the appropriate license.",
        choices: linceses,
    },
    {
        type: "input",
        name: "contributing",
        message: "Please entre all contributors.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please add information on all testing methodologies used when developing this project. This can be from unit testing, system testing to intergration testing if the project isnt completely blackbox.",
    },
    {
        type: "input",
        name: "github",
        message: "Please entre your GitHub username.",
    },
    {
        type: "input",
        name: "linkedin",
        message: "Please entre your LinkedIn profile URL.",
    },
    {
        type: "input",
        name: "email",
        message: "Please entre your email address"
    },
    ])
;

// function to write README file
fs.writeFile(fileName, (generateMarkdown(data)), (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("README created!")
    }
})


// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => answers 
    ?
    (writeToFile("README.md", answers)) 
    :
    console.log("Please input all questions")
    );
}

// function call to initialize program
init();

