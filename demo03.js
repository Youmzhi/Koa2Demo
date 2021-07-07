
// Post请求

const Koa = require('koa')
const app = new Koa()
app.use(async (ctx)=> {
  // 当前请求时get请求时，显示表单让用户填写
  if (ctx.url==='/' && ctx.method === 'GET') {
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST"  action="/">
        <p>userName</p>
        <input name="userName" /> <br/>
        <p>age</p>
        <input name="age" /> <br/>
        <p>webSite</p>
        <input name='webSite' /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if(ctx.url==='/' && ctx.method === 'POST') {
    let pastData = await parsePostData(ctx)
    ctx.body = pastData
  } else {
    // 其他请求显示404页面
    ctx.body === '<h1>404!</h1>'
  }
})

app.listen(3000,()=>{
  console.log('[demo] server is starting at port 3000');
})


function parsePostData (ctx) {
  return new Promise((resolve, reject)=>{
    try {
      let postdata= ''
      ctx.req.on('data', (data) => {
        postdata += data
      })
      ctx.req.addListener('end', function() {
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    } catch (error) {
      reject(error)
    }
  })
}

function parseQueryStr(queryStr){
  let queryData={};
  let queryStrList = queryStr.split('&');
  console.log(queryStrList);
  for( let [index,queryStr] of queryStrList.entries() ){
      let itemList = queryStr.split('=');
      console.log(itemList);
      queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  } 
  return queryData
}
