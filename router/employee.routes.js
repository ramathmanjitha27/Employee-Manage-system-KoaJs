const Router = require('koa-router');
const addEmployee = require('../api/employee.api')


console.log('Routes called');
const router = new Router({
    prefix: '/employee'
})

router.post('/',ctx => {
    let employee = ctx.request.body;
    employee = addEmployee(employee);
    ctx.response.status = 201;
    ctx.body = employee;
})

module.exports = router;