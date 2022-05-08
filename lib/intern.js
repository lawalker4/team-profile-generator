//TODO: write code to describe roll of interns and there contact info, role info, etc.
const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email){
        super(name, id, email);
        this.school = school;
    }
   
    getRole(){
        return this.role;
    };

    getSchool() {
        return this.school
    }
  
}

module.exports = Intern;