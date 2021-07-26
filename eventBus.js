// 事件总线
let eventsMap = new Map();

function $on(type, callback) {
  if (callback == null) {
    callback = () => null;
  }
  eventsMap.set(type, callback);
}

function $emit(type, ...args) {
  let callback = eventsMap.get(type);
  if (callback == undefined) {
    console.log('回调函数事件类型未定义');
    return;
  }
  try {
    callback.apply(null, args);
  } catch (e) {
    console.log(e.message);
  }
}

let f1 = function (p) {
  console.log(p);
  throw new Error('错误')
}
$on('name', f1);
$emit('name', 'f1');
// console.log(eventsMap);