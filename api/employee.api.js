const { v4 : uuid } = require('uuid');
const data = new Map();

const addEmployee = ({name, age, salary}) =>{
    const id = uuid();
    const employee = {
        id,
        name,
        age,
        salary
    }
    data.set(employee.id, employee)
}

const getEmployees = () => {
    return [...data.values()];
}

const getEmployee = (id)=>{
    return data.get(id);
}

module.exports = {addEmployee, getEmployees, getEmployee};