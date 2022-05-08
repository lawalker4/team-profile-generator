const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquire = require("inquirer");
const fs = require("fs");
const generateTeam= require("./templates/pagetemplate.js");
const inquirer = require("inquirer");

const team = [];
addCreateTeamList();

//Questions from inquirer prompts

function addCreateTeamList() {
    inquirer.prompt([
        {
            type:"list",
            name: "addEmployee",
            message:"Select the employee you want to add to the list.",
            choices:[
                "Engineer",
                "Intern",
                "Managner",
            ]
        }
    ])
}



