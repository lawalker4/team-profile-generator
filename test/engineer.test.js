const Engineer = require('../lib/engineer');

jest.mock('../lib/engineer');

test('get engineer obj', () =>{
    const engineer = new Engineer;
    console.log(engineer);
  });