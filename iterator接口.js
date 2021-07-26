// 迭代器接口的实现

let makeIterable = function (arr) {
  let index = 0;
  let obj = {
    next() {
      let value = arr[index++];
      let done = false;
      if (index >= arr.length) {
        done = true;
      }
      return {
        value,
        done
      }
    },
    [Symbol.iterator]: function () {
      return this;
    }
  }
  return obj;
}
let arr1 = [1, 2, 3, 4];
let itera = makeIterable(arr1);
console.log(itera.next());;
console.log(itera.next());;
console.log(itera.next());;
console.log(itera.next());;