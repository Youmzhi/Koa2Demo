// koa2模板（ejs）
// 安装中间件cnpm install --save koa-views
// 安装ejs模板引擎 npm install --save ejs

const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title
  })
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})