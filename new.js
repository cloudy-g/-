// 实现 new 过程
/**
  1. 生成一个空对象，并将原型指向构造函数原型
  2. 调用构造函数，绑定this
  3. 判断构造函数返回值，对象则直接返回，不是对象则返回初始创建的对象
*/

const newFn = function (Fn, ...args) {
  const obj = Object.create(Fn.prototype);
  let res = Fn.apply(obj, args);
  if (typeof res === 'object') {
    return res;
  }
  return obj;
}

function People(name, age) {
  this.name = name;
  this.age = age;
}
People.prototype.say = function () {
  console.log(this.name);
}
let p1 = new People('p1', 12);
let p2 = newFn(People, 'p2', 13);
console.log(p1);
console.log(p2.__proto__ === People.prototype);