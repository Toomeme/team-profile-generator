// using Intern constructor 
const Intern = require('../lib/Intern');

// create intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Toomey', 90, 'jtoom@gmail', 'UCONN');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// getSchool()
test('gets employee school', () => {
    const intern = new Intern('Toomey', 90, 'jtoom@gmail', 'UCONN');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//getRole()
test('gets role of employee', () => {
    const intern = new Intern('Toomey', 90, 'jtoom@gmail', 'UCONN');

    expect(intern.getRole()).toEqual("Intern");
}); 