const Intern = require('../lib/intern.js');

jest.mock('../lib/intern.js');

test('Get Intern school info', () =>{
    const Intern = new Intern;
    console.log(Intern);
  });