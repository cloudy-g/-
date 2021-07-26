// 数组 reduce 手写

const reduce = function (arr, callback, init = 0) {
  for (let i = 0; i < arr.length; i++) {
    init = callback.call(null, init, arr[i], i, arr);
  }
  return init;
}

let arr = [1, 2, 3, 4, 5];
let obj = [{
  name: 'age'
}, {
  age: 'next'
}, {
  next: 'target'
}, {
  target: '4'
}];
let cal = (pre, v) => pre + v;
let cal2 = (pre, v) => v[pre];
console.log(arr.reduce(cal, 3));
console.log(obj.reduce(cal2, 'name'));

let cnt = reduce(arr, cal, 3);
let cnt2 = reduce(obj, cal2, 'name');
console.log(cnt);
console.log(cnt2);