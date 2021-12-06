// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// create engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Toomey', 90, 'jtoom238@gmail', 'Toomeme');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Toomey', 90, 'jtoom238@gmail', 'Toomeme');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Toomey', 90, 'jtoom238@gmail', 'Toomeme');

    expect(engineer.getRole()).toEqual("Engineer");
});