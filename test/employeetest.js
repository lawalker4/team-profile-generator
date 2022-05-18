const Employee = require('../lib/employee');

jest.mock('../lib/employee');

test('get employee obj', () =>{
    const Employee = new Employee;
    console.log(Employee);
  });