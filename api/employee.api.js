const UUID = require('uuid');

const data = new Map();

const addEmployee = ({name, age, salary}) =>{
    const employee = {
        id : new UUID.v4(),
        name,
        age,
        salary
    }
    data.set(employee.id, employee)
}

module.exports = addEmployee;