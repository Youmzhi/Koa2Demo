// 引入koa2
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx)=> {
  ctx.body = "hello koa2"
})

app.listen(3000)
console.log('[demo] start-quick is starting at prot 3000')