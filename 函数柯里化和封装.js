// 函数柯里化，
//    将接受一个函数作为参数，返回一个柯里化之后的函数，
//      可以实现将多个参数的传递变为单个的参数的传递的过程，实现惰性求值，
//  意义：多参数的不确定性会带来代码内部的不确定性，
//      对于函数式编程而言，柯里化可以使函数方便的进行组合使用
//  具体实现： bind 

const curry_fn = function (fn, ...args) {
  let len = fn.length;
  return function curry(...cur) {
    args.push(...cur);
    if (args.length >= len) {
      return fn.apply(this, args);
    }
    return curry.bind(this);
  }
}

function add(a, b, c) {
  return a + b + c;
}

let fn = curry_fn(add);
let fn1 = fn(1)(2)(3);
console.log(fn);
console.log(fn(4));