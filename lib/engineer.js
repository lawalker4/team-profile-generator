//TODO: write code to describe roll of engineer and there contact info, role info, etc.
const employee = require("./employee");

class engineer {
    constructors(name, id, email, github){
        super(name, id, email);
        this.github = this.github;
    }

    getName(){
        return this.name;
    }

    getRole(){
        return this.role;
    }

    getGithub(){
        return this.github;
    }

}

module.exports = engineer;