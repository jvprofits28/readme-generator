//  Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//  array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "Table of content",
    name: "table of content",
  },
  {
    type: "input",
    message: "What command should be run to install this app?",
    name: "install",
  },
  {
    type: "input",
    message: "how is this app used? ",
    name: "usage",
  },
  {
    type: "list",
    message: "what license is being used? ",
    choices: ["MIT", "Apache 2.0", "GNU", "BSD3", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is you email address?",
    name: "email",
  },
];

//Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("successfully created README.md file")
  );
}

//   function to initialize app
function init() {
  //use inquier
  inquirer
    .prompt(questions)
    //get the answers object
    .then((answers) => {
      writeToFile("README.md", generateMarkdown(answers));
    });
  // write that content to a file using a call to write to file
}

// Function call to initialize app
init();
