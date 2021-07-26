// 实现  instanceof 方法

// 判断 o 的原型是否在 t 的原型链上
const instanceofFn = function (t, o) {
  if (o === null) {
    throw new Error('右边不能是空对象')
  }
  let ans = o.prototype,
    target = t.__proto__;
  while (ans !== target && target != null) {
    target = target.__proto__;
  }
  return ans === target ? true : false;
}

let a = new String('a')
console.log(instanceofFn(a, String));
console.log(a instanceof String);

let b = Object.create(null);
console.log(instanceofFn(b, Object));
console.log(b instanceof Object);