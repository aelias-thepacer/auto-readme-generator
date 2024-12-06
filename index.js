// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = ["What is your README title?", "What is your description?", "What are the installation instructions for this project?", "What is the usage information?", "What are the guidelines for contributing?", "What are the instructions for testing?", "What license would you like to use?", "What is your Github username?", "What is your email adress?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("File Written");
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: questions[0]
        },
            
        {
            name: "description",
            type: "input",
            message: questions[1]
        },
    
        {
            name: "installation",
            type: "input",
            message: questions[2]
        },
    
        {
            name: "usage",
            type: "input",
            message: questions[3]
        },
    
        {
            name: "contribute",
            type: "input",
            message: questions[4]
        },

        {
            name: "testing",
            type: "input",
            message: questions[5]
        },

        {
            name: "license",
            type: "list",
            message: questions[6],
            choices: ["MIT", "Apache 2.0", "GPL", "BSD (2-clause)", "BSD (3-clause)", "BSD (4-clause)"]
        },

        {
            name: "gitHub",
            type: "input",
            message: questions[7]
        },

        {
            name: "email",
            type: "input",
            message: questions[8]
        }
    ])
    .then((data) => {
        writeToFile("READMEtest.md", generateMarkdown(data))
})
}

// Function call to initialize app
init();
