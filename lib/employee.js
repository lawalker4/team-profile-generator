// /TODO: write code to describe roll of employee and there contact info, role info, etc.
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    
    getEmail(){
        return this.email;
    };

    getRole(){
        return "Employee", "Manager", "Intern", "Engineer";
    };
  
}

module.exports = Employee;