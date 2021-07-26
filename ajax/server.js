const http = require('http');

let data = {
  msg: '我是返回的数据'
};
data = JSON.stringify(data);

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.write(`${data}`);
    res.end();
  })
  .listen(7000, () => {
    console.log('http://localhost:7000');
  })