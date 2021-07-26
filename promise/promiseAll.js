// 基于promise实现 promise.all 方法  实现并发的方法

Promise.allFn = function (arr = []) {
  if (arr.length <= 0) {
    return Promise.resolve();
  }
  let data = [],
    cnt = 0;
  let p = new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      let tem = arr[i];
      if (!(tem instanceof Promise)) {
        tem = Promise.resolve(tem);
      }
      tem.then(res => {
        data[i] = res;
        cnt++;
        if (cnt == arr.length) {
          return resolve(data);
        }
      }, rej => {
        reject(rej);
      })
    }
  });

  return p;
}
//  取决于第一个的promise完成或者结束的状态
// 如果传的迭代是空的，则返回的 promise 将永远等待。
Promise.raceFn = function (arr = []) {
  if (arr.length <= 0) {
    return new Promise();
  }
  let p = new Promise((resolve, reject) => {
    arr.forEach(v => {
      v.then(resolve, reject);
    })
  })
  return p;
}
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
Promise.raceFn([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// const promise1 = Promise.resolve(3);
// const promise2 = 1;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// console.log(1);
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// }).catch(e => {
//   console.log(e);
// });
// Promise.allFn([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// }).catch(e => {
//   console.log(e);
// });
// console.log(2);
// expected output: Array [3, 42, "foo"]