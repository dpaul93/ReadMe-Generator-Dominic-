const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const licenses = [
    "MIT",
    "BSL-1.0",
    "EUPL-1.1",
    "MS-PL",
    "Unlicense",
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
    // {
    //     type: "input",
    //     name: "contents",
    //     message: "Please create a table of contense for your project."
    // },
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
        choices: licenses,
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

questions ()
.then((answers) => writeFileAsync("README.md", generateMarkdown(answers)))
.then(() => console.log("README file Created"))
.catch((err) => console.log(err));



// function to write README file
// fs.writeFile("README.md", (generateMarkdown(data)), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("README created!")
//     }
// })


// function to initialize program

// function init() {
//     inquirer.prompt(questions).then((data) => {
//         fs.writeFile("README.md", generateMarkdown(data), (err) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log("README created!");
//             }
//         });
//     });
// }


// function init() {
//     inquirer.prompt(questions).then((response) => response 
//     ?
//     (writeToFile("README.md", response)) 
//     :
//     console.log("Please input all questions")
//     );
// }

// function call to initialize program
// init();

