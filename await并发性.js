//循环中的 await 也会等待前一个 执行
async function f1() {
  for (let i = 0; i < 10; i++) {
    let t1 = await f2(i);
    console.log(t1);
  }
}

function f2(cnt) {
  return new Promise(res => {
    let t = cnt + Math.random() * 100;
    setTimeout(() => {
      res(t);
    }, t)
  })
}
f1();