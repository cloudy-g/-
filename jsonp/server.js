const http = require('http');

let data = {
  msg: '我是jsonp返回的数据'
};
data = JSON.stringify(data);

http
  .createServer((req, res) => {
    let callback = getJsonpName(req.url);
    res.write(`${callback}(${data})`);
    res.end();
  })
  .listen(7000, () => {
    console.log('http://localhost:7000');
  })

function getJsonpName(url) {
  let index = url.indexOf('?');
  url = url.slice(index + 1);
  let res = url.split('&');
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].split('=');
    if (res[i][0] === 'callback') {
      return res[i][1];
    }
  }
  return 'jsonp';
}