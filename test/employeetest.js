const Employee = require('./employee.js');

jest.mock('./employee.js');

test('get employee obj', () =>{
    const Employee = new Employee;
  });