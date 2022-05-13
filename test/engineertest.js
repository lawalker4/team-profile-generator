const Engineer = require('../lib/engineer');

jest.mock('../lib/engineer.js');

test('get employee obj', () =>{
    const Engineer = new Engineer;
    console.log(Engineer);
  });