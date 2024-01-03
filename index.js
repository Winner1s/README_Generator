// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title of project",
    },

    {
        type: "input",
        name: "description",
        message: "Summary of project",
    },

    {
        type: "input",
        name: "require",
        message: "Enter requirements",
    },

       {
        type: "input",
        name: "usage",
        message: "Provide usage details" ,
    },
    
    {
        type: "input",
        name: "Installation",
        message: "Provide installation instructions",
    },

 

    {
        type: "checkbox",
        name: "license",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "none"], 
    },

    {
        type: "input",
        name: "name",
        message: "Name of Authors and developers" 
    },

    {
        type: "input",
        name: "email",
        message: "Enter email address using this format []()" 
    },

    {
        type: "input",
        name: "creator",
        message: "Enter github.com account using this format []()" 
    },
    {
        type: "input",
        name: "questions",
        message: "Questions",
    },

    {
        type: "input",
        name: "contribution",
        message: "Who contributed to this project?",
    },

    {
        type: "input",
        name: "test",
        message: "include any tests for the project" 
    },

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Easy README.md File");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }
  
  // Function call to initialize app
  init();

