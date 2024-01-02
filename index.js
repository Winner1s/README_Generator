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
    }

    {
        type: "input",
        name: "description",
        message: "Summary of project",
    } 

    {
        type: "input",
        name: "table of contents",
        message: "Create table of contents",
    }
    {
        type: "input",
        name: "Installation",
        message: "Provide installation instructions",
    }

    {
        type: "input",
        name: "Usage",
        message: "Provide usage details" ,
    }

    {
        type: "input",
        name: "license",
        message: "Provide license details" 
    }

    {
        type: "input",
        name: "authors",
        message: "Name of Authors and developers" 
    }

    {
        type: "input",
        name: "tests",
        message: "include any tests for the project" 
    }

    {
        type: "input",
        name: "questions",
        message: "Questions" 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
