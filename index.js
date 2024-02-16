const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const { type } = require("os");

const writeToFile = until.promisify(fs.writeFile);

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
        type: "input",
        // is it an input? surely we dont just let a user just add a license?
        name: "license",
        message: "",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please entre all contributors",
    },
    {
        type: "input",
        name: "tests",
        message: "Please add information on all testing methodologies used when developing this project. This can be from unit testing, system testing to intergration testing if the project isnt completely blackbox",
    },
    {
        type: "input",
        name: "github",
        message: "Please entre your GitHub username",
    },
    {
        type: "input",
        name: "linkedin",
        message: "Please entre your LinkedIn profile URL",
    },
    {
        type: "input",
        name: "email",
        message: "Please entre your email address"
    },
    ])
;

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
