// node简介： 简单的说 Node.js 就是运行在服务端的 JavaScript

// demo01
// 创建第一个应用

// 1.引入http模板
var http = require('http')

// 2.创建服务器
http.createServer(function (request, response) {
    // 发送Http头部
    // http状态值： 200: ok
    // 内容类型： text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'})

    // 发送响应数据 “hellow word”
    response.end('hello world\n')
}).listen(8888)

    // 终端打印信息如下
console.log('Server running at http://127.0.0.1:8888/')


// 以上完成可工作的Http服务器 进入cmd终端执行 node index.js 运行服务
