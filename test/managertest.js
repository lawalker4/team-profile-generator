const Manager = require('../lib/manager');

jest.mock('../lib/engineer');

test('get engineer obj', () =>{
    const engineer = new Engineer;
    console.log(engineer);
  });