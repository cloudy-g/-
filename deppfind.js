// 寻找深层次数据
/**
const obj = {a: {b : {c : {d: 3}}}}
function getValue(obj, str, defaultValue) {}
getValue(obj, 'a.b.c.d', 1) => 3 (存在该属性返回该属性对应的值)
getValue(obj, 'a.b.c.d.e', 1) => 1 (出现错误返回传入的默认值)
改动，能处理数组
const obj_1 = {a: {b : {c : {d: [{e : 4}]}}}}
getValue(obj_1, 'a.b.c.d[0].e', 1) => 4
 * 
 * */
const getValue = function (obj, str, defaultVal) {
  str = str.replace(/[\[|\]]/g, '.');
  let res = str.split('.');
  for (let i = 0; i < res.length; i++) {
    if (res[i] == '') {
      continue;
    }
    if (obj[res[i]] == undefined) {
      return defaultVal;
    } else {
      obj = obj[res[i]];
    }
  }
  return obj;
}
const obj_1 = {
  a: {
    b: {
      c: {
        d: [{
          e: 4
        }]
      }
    }
  }
}
const obj = {a: {b : {c : {d: 3}}}}
let ans1 = getValue(obj_1, 'a.b.c.d[0].e', 1)
let ans2 = getValue(obj, 'a.b.c.d.e', 1)
console.log(ans1);
console.log(ans2);