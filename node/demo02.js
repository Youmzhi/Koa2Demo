
// demo01
// 回调函数

var fs = require("fs");

console.log("阻塞模式---start");
var data = fs.readFileSync('input.txt');  // 阻塞模式

console.log(data.toString());
console.log("程序执行结束!");
console.log("阻塞模式---end");


console.log("非阻塞模式---start");
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("程序执行结束!");
console.log("非阻塞模式---end");