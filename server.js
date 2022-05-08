const Koa = require ('koa');
const bodyparser = require('koa-bodyparser');
const EmployeeRoutes = require('./router/employee.routes');

const app = new Koa();
app.use(bodyparser());

app.use(EmployeeRoutes.routes())
    .use(EmployeeRoutes.allowedMethods())

app.listen(3000);
console.log('Server is running on port 3000');