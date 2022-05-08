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
                "Finish Making Team List"
            ]
        }
    ]).then(function(data){
        const employeeRole = data.addEmployee;
        if (employeeRole === "Engineer"){
            engineerInfo();
        }
        else if (employeeRole === "Intern") {
            internInfo();
        }
        else if (employeeRole === "Manager") {
        }
        else if (employeeRole === "Finish Making Team List") {
            renderTeam();
        }
    })
}

//Create functions to add engineer, interns and managers
function addEngineer(){
    console.log(`
    =======================
    Team Profile Generator!
    =======================
    `);
    return inquire
    .prompt([
        {
            type:"input",
            name: "engineerName",
            message: "Engineers Name"
        },
        
        {
            type:"input",
            name: "engineerID",
            message: "The Engineers Employee ID Number"
        },
        {
            type:"input",
            name: "engineerEmail",
            message: "The Engineers Email Address"
        },
        {
            type:"input",
            name: "engineerGitHub",
            message: "The Engineers GitHub"
        },
    ]).then(function(data){
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        team.push(engineer);
        addCreateTeamList
    });
}

function addIntern(){
    console.log(`
    ==============
    Add New Intern
    ==============
    `)

    return inquire
    .prompt([
        {
            type:"input",
            name: "internName",
            message: "Intern Name"
        },
        
        {
            type:"input",
            name: "internID",
            message: "The Interns Employee ID Number"
        },
        {
            type:"input",
            name: "internEmail",
            message:"Interns Email Address"
        },
        {
            type:"input",
            name: "internSchool",
            message: "The name of the school the intern is from."
        },
    ]).then(function(data){
        const intern = new Intern(data.interName, data.internId, data.internEmail, data.internSchool);
        team.push(intern);
        addCreateTeamList
    });
}

function addManager(){
    console.log(`
    ================
    Add New Manager
    ================
    `)
    return inquire
    .prompt([
        {
            type:"input",
            name: "managerName",
            message: "Manager Name"
        },
        
        {
            type:"input",
            name: "managerID",
            message: "Manager Employee ID Number"
        },
        {
            type:"input",
            name: "managerEmail",
            message: "Manager Email Address"
        },
        {
            type:"input",
            name: "managerOfficeNumber",
            message: "Manager Office Number"
        },
    ]).then(function(data){
        const manager = new Manager(data.managerame, data.managerId, data.managerEmail, data.managerOfficeNumber);
        team.push(manager);
        addCreateTeamList
    }); 
}



