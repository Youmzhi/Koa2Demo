// koa2原生路由

const Koa = require('koa');
const fs = require('fs');  // 操作文件模板
const app = new Koa();

function render(page) {
  return new Promise((resolve, reject)=>{
    let pageUrl = `./page/${page}`
    console.log(pageUrl)
    fs.readFile(pageUrl, "binary", (err, data)=> {
      console.log('444')
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function route(url) {
  let page = '404.html' 
  switch(url) {
    case '/':
      page = 'index.html'
      break;
    case '/index':
      page = 'index.html'
      break;
    case '/todo':
      page = 'todo.html'
      break;
    default:
      break;
  }
  let html = await render(page)
  return html
}

app.use(async (ctx)=> {
  let url = ctx.request.url;
  console.log(url)
  let html = await route(url)
  ctx.body = html
})

app.listen(3000)
console.log('starting at 3000');