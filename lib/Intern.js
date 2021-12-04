// require Employee parent constructor 
const Employee = require('./Employee');

// extends from employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning school from user input 
    getSchool () {
        return this.school;
    }

    // override role to intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 