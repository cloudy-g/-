// 数组 
//  map实现
const map = function (arr, callback) {
  if (arr.length <= 0) {
    return [];
  }
  return Array.from({
    length: arr.length
  }, (v, i) => callback.call(null, arr[i], i, arr));
}
let arr = [1, 2, 3, 4, 5];
console.log(arr.map(v => v + 1));
console.log(map(arr, (v) => v + 1));
// filter   如果回调函数返回真，则保留当前元素  
const filter = function (arr, callback) {
  if (arr.length <= 0) {
    return [];
  }
  let res = [],
    index = 0,
    flag = null;
  for (let i = 0; i < arr.length; i++) {
    flag = callback.call(null, arr[i], i, arr);
    if (flag) {
      res[index++] = arr[i];
    }
  }
  return res;
}
console.log(filter(arr, (v) => v + 1 === 3 || v - 1 === 3));
console.log(arr.filter((v) => v + 1 === 3 || v - 1 === 3));
// find / findIndex
const find = function (arr, callback) {
  if (arr.length <= 0) {
    return null;
  }
  let flag = null;
  for (let i = 0; i < arr.length; i++) {
    flag = callback.call(null, arr[i], i, arr);
    if (flag) {
      return arr[i];
    }
  }
  return null;
}
console.log(find(arr, (v) => v - 1 === 3));
console.log(arr.find((v) => v - 1 === 3));