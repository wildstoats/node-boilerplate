import Koa from 'koa';
const app = new Koa();

const PORT = process.env.PORT;

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  await next();
});

app.listen(PORT);
