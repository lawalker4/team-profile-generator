//TODO: write code to describe roll of manager and there contact info, role info, etc.
const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, OfficeNumber){
        super(name, id, email);
        this.OfficeNumber = OfficeNumber;
    }

    getOfficeNumber(){
        return this.OfficeNumber;
    }

    getRole(){
        return "Manager";
    }

}

module.exports = Manager;