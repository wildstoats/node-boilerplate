import Koa from 'koa';
import Router from '@koa/router';

const PORT = process.env.PORT;

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Node Boilerplate Backend';
  await next();
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT);
