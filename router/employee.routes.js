const Router = require('koa-router');
const {getEmployees, addEmployee, getEmployee} = require("../api/employee.api");

const router = new Router({
    prefix: '/employee'
})

router.post('/',ctx => {
    let employee = ctx.request.body;
    employee = addEmployee(employee);
    ctx.response.status = 201;
    ctx.body = employee;
})

router.get('/',ctx => {
    ctx.body = getEmployees();
})

router.get('/:id', ctx =>{
    const id= ctx.params.id;
    ctx.body = getEmployee(id);
})
module.exports = router;



