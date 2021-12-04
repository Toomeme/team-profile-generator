// require Employee parent constructor
const Employee = require("./Employee");

// extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // returning github from user input 
    getGithub () {
        return this.github;
    }

     // override role to engineer
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer;
