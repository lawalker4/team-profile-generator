const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquire = require("inquirer");
const fs = require("fs");
const generateTeam= require("./templates/pagetemplate.js");
const inquirer = require("inquirer");
const { resolve } = require("path");

const newTeam = [];

//Create functions to add engineer, interns and managers
function addEngineerInfo(){
    console.log(`
    =======================
    Team Profile Generator!
    =======================
    `);
    return inquirer
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
    ]).then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        newTeam.push(engineer);
        console.log(newTeam);
        addNewTeamMember();
    });
}

function addInternInfo(){
    console.log(`
    ==============
    Add New Intern
    ==============
    `);

    return inquirer
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
            message: "The name of the school the intern is from"
        },
    ]).then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        newTeam.push(intern);
        console.log(newTeam);
        addNewTeamMember();
    });
}

function addManagerInfo(){
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
    ]).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        newTeam.push(manager);
        console.log(newTeam);
        addNewTeamMember();
        
    });
}

//Questions from inquirer prompts

function addNewTeamMember() {
    return inquirer
    .prompt([
        {
            type:"list",
            name: "addEmployee",
            message:"Select the employee you want to add to the list.",
            choices:[
                "Engineer",
                "Intern",
                "Manager",
                "Finish Making Team List"
            ],
        },
    ])
    .then((choice) => {
        if (choice.addEmployee === "Engineer"){
            addEngineerInfo();
        }
        if (choice.addEmployee === "Intern") {
            addInternInfo();
        }
        if (choice.addEmployee === "Manager") {
            addManagerInfo();
        }  
        if (choice.addEmployee === "Finish Making Team List"){
            // console.log(newTeam); 
            return finishTeam('./index.html', generateTeam(newTeam));
        }
    });

}

    function finishTeam(file, data){
        console.log(data);
        fs.writeFileSync(file, data (err) =>{
        //     if (err){
        //         reject(err);
        //         return;
        //     }
        //     resolve({
        //         ok: true,
        //         message: 'File created!'
        //     });
        // });
    }

  addEngineerInfo();
