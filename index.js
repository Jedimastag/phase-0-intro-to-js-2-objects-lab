const employee = {
    name: "Sam",
    streetAddress: "123 Street"
};

function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmployee = { ...employee };
    newEmployee[name] = value;
    return newEmployee;
  };
  
const newEmply = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value;
    return employee;
  };

  const newHire = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(employee, name, value) {
    const newEmployee = {employee};
    newEmployee[name] = value;
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name;
    return employee;
}
