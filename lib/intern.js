//TODO: write code to describe roll of interns and there contact info, role info, etc.
const employee = require("./employee")

class intern extends employee {
    constructors(name, id, email){
        this.name = name;
        super(name, id,)
        this.school = school;
    }
   
    getRole(){
        return this.role;
    };

    getSchool() {
        return this.school
    }
  
}

module.exports = Employee;