// 浅拷贝实现  Object.assign()  扩展运算符  
// 深拷贝  参考 vue2.x 源码实现。
const deepCopy = function (origin, cache = []) {
  if (origin == null || typeof origin !== 'object') {
    return origin;
  }
  let tem = null;
  tem = cache.find(v => v.origin === origin);
  if (tem) {
    return tem.copy;
  }
  tem = Array.isArray(origin) ? [] : {};
  cache.push({
    origin,
    copy: tem
  });
  Object.keys(origin).map(key => {
    tem[key] = deepCopy(origin[key], cache);
  })
  return tem;
}

let o1 = {
  name: 'gy',
  mom: {
    age: '49'
  },
}
let o21 = {
  target: o1
}
o1.target = o21;
let o2 = deepCopy(o1);
const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};
target.target = target;
let t = deepCopy(target);
console.log(t.target == target);
console.log(o1 === o2);
console.log(o1.mom === o2.mom);
console.log(o1);
console.log(o2);