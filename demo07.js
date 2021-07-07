// koa-router中间件
// desc：如果你作的是测试的小程序，你可能还能顶上一阵子，但实际工作中是满足不了你的。将使用中间件koa-router来完成路由的配置，koa的中间件生态环境足够强大，路由的中间件不只一种。

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
// const router = new Router();


let home = new Router();
home.get('/jspang',async(ctx)=>{
    ctx.body="Home JSPang";
}).get('/todo',async(ctx)=>{
    ctx.body ='Home ToDo';
})

let page = new Router();
page.get('/', function (ctx, next) {
  ctx.body="Hello Youmzhi";
}).get('/todo',(ctx,next)=>{
  ctx.body="Todo page"
}).get('/list',(ctx,next)=>{
  ctx.body="list page"
});


// 装载所有子路由
let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app
  .use(router.routes())
  .use(router.allowedMethods());
  

app.listen(3000,()=>{
  console.log('starting at port 3000');
});