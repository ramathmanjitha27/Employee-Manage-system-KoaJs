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

const getEmployees = () => {
    return [...data.values()];
}

module.exports = {addEmployee, getEmployees};