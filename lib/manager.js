//TODO: write code to describe roll of manager and there contact info, role info, etc.
const employee = require("./employee")

class Manager {
    constructors(name, id, email, OfficeNumber){
        super(name, id, email);
        this.OfficeNumber = OfficeNumber;
    }

     getOfficeNumber(){
        return this.getOfficetNumber;
    }

    getRole(){
        return this.role;
    }

}

module.exports = Manager;