// koa-bodyparser 中间件
// desc: 对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中

const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app.use(async(ctx)=>{
  if(ctx.url==='/' && ctx.method==='GET'){
      //显示表单页面
      let html=`
          <h1>JSPang Koa2 request POST</h1>
          <form method="POST" action="/">
              <p>userName</p>
              <input name="userName" /><br/>
              <p>age</p>
              <input name="age" /><br/>
              <p>website</p>
              <input name="webSite" /><br/>
              <button type="submit">submit</button>
          </form>
      `;
      ctx.body=html;
  }else if(ctx.url==='/' && ctx.method==='POST'){
       let postData= ctx.request.body; // ctx.request.body进行获取POST请求参数，koa-bodyparser中间件自动给我们做了解析
       ctx.body=postData;
  }else{
      ctx.body='<h1>404!</h1>';
  }

});


app.listen(3000,()=>{
  console.log('[demo] server is starting at port 3000');
});