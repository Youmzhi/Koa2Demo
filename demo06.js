// koa-router中间件
// desc：如果你作的是测试的小程序，你可能还能顶上一阵子，但实际工作中是满足不了你的。将使用中间件koa-router来完成路由的配置，koa的中间件生态环境足够强大，路由的中间件不只一种。

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
  prefix: '/Youmzhi'   // 设置前缀一般都是全局的，并不能实现路由的层级，如果你想为单个页面设置层级，也是很简单的。只要在use时使用路径就可以了。
});

// 设置前缀 如http://127.0.0.1:3000/todo 变成  http://127.0.0.1:3000/jspang/todo


router.get('/', function (ctx, next) {
  ctx.body="Hello Youmzhi";
}).get('/todo',(ctx,next)=>{
  ctx.body="Todo page"
}).get('/list',(ctx,next)=>{
  ctx.body="list page"
});

// 多页面的添加只要继续在下面填写get或者Post就可以了,链式操作

app
  .use(router.routes())
  .use(router.allowedMethods());
  

app.listen(3000,()=>{
  console.log('starting at port 3000');
});