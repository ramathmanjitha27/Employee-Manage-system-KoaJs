const Koa = require ('koa');

const app = new Koa();

app.use(ctx => {
    ctx.body = "Hello World!! Koa.js"
})

app.listen(3000);
console.log('Server is running on port 3000');