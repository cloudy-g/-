// 数组的指定层次进行 扁平化  flat  flatMap
const flat = function (arr, depth) {
  if (depth <= 0) {
    return arr;
  }
  let res, diff, flag;
  while (depth > 0) {
    res = [];
    diff = 0;
    flag = true;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flag = false;
        for (let j = 0; j < arr[i].length; j++) {
          res[i + diff + j] = arr[i][j];
        }
        diff += arr[i].length - 1;
      } else {
        res[i + diff] = arr[i];
      }
    }
    if (flag) {
      return res;
    }
    depth--;
    arr = res;
  }
  return arr;
}
// 递归版
const flatRecur = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let tem = flatRecur(arr[i])
      res.push(...tem);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
let arr = [1, 2, 3, [12, 3, 5],
  [1, 2, [4, 5, [5, 6, [7, 8], 0], 1], 1], 1
];
let res = flat(arr, 4);
let res2 = flatRecur(arr);
console.log(res);
console.log(res2);