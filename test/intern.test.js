const Intern = require('../lib/intern');

jest.mock('../lib/intern');

test('get intern obj', () =>{
    const intern = new Intern;
    console.log(intern);
  });