// apply call 都是基于bind实现
let window = {};
const bindFn = function (self, ...args) {
  self = self || window;
  self.fn = this;
  return function (...cur) {
    args.push(...cur);
    self.fn(...args);
  }
}
// call 
const callFn = function (self, ...args) {
  this.bindFn(self, ...args)();
}
// apply
const applyFn = function (self, args) {
  this.bindFn(self, ...args)();
}
// Function.prototype.bind = Function.prototype.bind || bindFn;
Function.prototype.bindFn = bindFn;
Function.prototype.callFn = callFn;
Function.prototype.applyFn = applyFn;
let o1 = {
  name1: 'o1',
  age: 24,
  lesson: 4
}

function say(a, b, c) {
  console.log(this[a]);
  console.log(this[b]);
  console.log(this[c]);
}
// say.bind(o1, 'name1', 'age')('lesson');
// say.bindFn(o1, 'name1', 'age')('lesson');
say.call(o1, 'name1', 'age', 'lesson');
say.callFn(o1, 'name1', 'age', 'lesson');