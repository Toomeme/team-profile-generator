// using Manager constructor 
const Manager = require('../lib/Manager');

// create manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Toomey', 90, 'jtoom238@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole()
test('gets role of employee', () => {
    const manager = new Manager('Toomey', 90, 'jtoom238@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 