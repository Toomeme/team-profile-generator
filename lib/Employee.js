// employee constructor 
class Employee {
  constructor (name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email 
  }

  // return name from input
  getName () {
      return this.name;
  }

  // return ID from input
  getId () {
      return this.id;
  }   

  // return email value
  getEmail () {
      return this.email;
  }

  // return role 
  getRole () {
      return 'Employee'; 
  }
};
 
module.exports = Employee; 