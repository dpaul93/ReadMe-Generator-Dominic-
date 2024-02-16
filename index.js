const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");

// const writeFileAsync = until.promisify(fs.writeFile);

// array of questions for user
const questions = () => 
    inquirer.questions([
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
        type: ""
    }
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
