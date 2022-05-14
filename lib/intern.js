//TODO: write code to describe roll of interns and there contact info, role info, etc.
const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
   
       getSchool() {
        return this.school
    }

    getRole(){
        return "Intern";
    };
  
}

module.exports = Intern;